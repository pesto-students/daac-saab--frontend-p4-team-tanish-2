import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import ".././css/profile.css";
import { auth,db,logout } from "../../../context/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
const Profile=()=> {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
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
  useEffect(() => {
    if (loading) return;
    
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div className="dashboard">
       <div className="dashboard__container">
        Logged in as
         <div>{name}</div>
         <div>{user?.email}</div>
         <button className="dashboard__btn" onClick={logout}>
          Logout
         </button>
       </div>
     </div>
  );
}
export default Profile;











































// import React, { useState } from "react";
// import "../css/profile.css";
// import { Auth, getAuth, signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import toast, { Toaster } from "react-hot-toast";

// const auth = getAuth();
// const user=auth.currentUser;
// if(user){
//   const currentName = user.displayName;
//   const email = user.email;
  
// }
// const Profile = () => {
//     const[userName,setUserName] = useState("");
//     const navigate=useNavigate();
//     function signOutUser(){
//         signOut(auth);
//         navigate("/");
//         toast.success("Logged out successfully");
//     }
    
//   return (
//     <div className="container d-flex align-items-center justify-content-center m-5 ">
//         <div className="user-box d-flex  align-items-center flex-column">
//             <div>
//             <h1>
//             My Profile 
            
//             </h1>
//             <Toaster
//                 toastOptions={{
//                   // Define default options
//                   className: '',
//                   duration: 3000,
//                   }}
//                 />
//             </div>
//             <div>
//             <h2>
              
//             </h2>
//             </div>
//             <div>
            
//             <button className="btn-primary" onClick={()=>signOutUser() 
//               }>
//                     Logout
//             </button>
//             </div>
            
            
           
//         </div>
//     </div>
//   )
// }

// export default Profile
