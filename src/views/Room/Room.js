import React from "react";
import {useState,useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { auth,db,logout } from "./../../context/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./Room.css"


const Room = () => {

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
    }
  };
  const navigate=useNavigate();
  const { roomId } = useParams();
 const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  const myMeeting = async (element) => {
    const appID = 1057479042;
    const serverSecret = "0419545703c37e2146e0159798d4f9e6";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Enter your name"
    );
      
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy Link !",
          url: `https://daac-saab.vercel.app/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: false,
    });
  };

  return (
    <div className="m-5 container-room">
      <div className="video-screen"
       ref={myMeeting} />
    </div>
  );
};
export default Room;
