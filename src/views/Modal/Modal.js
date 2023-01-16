import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={()=>{
            toggleModal()
      }} className="button-modal">
        Open
      </button>

      {modal && (
        <div className="modal1">
          <div onClick={toggleModal} className="overlay1"></div>
          <div className="modal-content1 ">
            <div className="d-flex flex-row align-items-center justify-content-center">
                <div>
                <input type="email" placeholder="Enter your email  ! "/>
                </div>
                <div>
                <input type ="password" placeholder="Enter your password "/>
                </div>
            <div>
            <button className="close-modal1" onClick={toggleModal}>
            Sign Up
            </button>
            </div>
            
              
            </div>
          
          </div>
        </div>
      )}
      
    </>
  );
}