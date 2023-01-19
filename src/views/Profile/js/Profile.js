import React from 'react';
import "../css/profile.css" ;
import { Auth, getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const auth = getAuth();
const user=auth.currentUser;
const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
const Profile = () => {

    const navigate=useNavigate();
    function signOutUser(){
        signOut(auth);
        navigate("/");
        toast.success("Logged out successfully");
    }
    
  return (
    
    <div className="container d-flex align-items-center justify-content-center m-5 ">
        <div className="user-box d-flex  align-items-center flex-column">
            <div>
            <h1>
            My Profile
            </h1>
            <Toaster
                toastOptions={{
                  // Define default options
                  className: '',
                  duration: 3000,
                  }}
                />
            
            </div>
            <div>
            <h2>
           {email}
            
            

            </h2>
                
            
            </div>
            <div>
            
            <button className="btn-primary" onClick={()=>signOutUser() 
              }>
                    Logout
            </button>
            </div>
            
            
           
        </div>
    </div>
  )
}

export default Profile