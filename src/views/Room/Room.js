import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
const Room = () => {
const {roomId}=useParams();
const myMeeting = async(element)=>{

    const appID = 1057479042;
    const serverSecret = "0419545703c37e2146e0159798d4f9e6";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Gantavya Saraswat");
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
        container: element,
        sharedLinks: [{
            name:'Copy Link !',
            url:`https://daac-saab.vercel.app/room/${roomId}` 
        }
            
        ],
        scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
        showScreenSharingButton: false
    });
}

return (
<div>
    <div ref={myMeeting} />
</div>
);

};
export default Room