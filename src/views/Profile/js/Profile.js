import React from 'react';
import "../css/profile.css" ;
import { Auth, getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const auth = getAuth();

const Profile = () => {

    const navigate=useNavigate();
    function signOutUser(){
        signOut(auth);
        navigate("/");
    }
    
  return (
    
    <div className="container d-flex align-items-center justify-content-center m-5 ">
        <div className="user-box d-flex  align-items-center flex-column">
            <div>
            <h1>
            My Profile
            </h1>
                
            
            </div>
            <div>
            <h2>
            UserName 
            </h2>
                
            
            </div>
            <div>
            <button className="btn-primary" onClick={()=>signOutUser()}>
                    Logout
            </button>
            </div>
            
            
           
        </div>
    </div>
  )
}

export default Profile