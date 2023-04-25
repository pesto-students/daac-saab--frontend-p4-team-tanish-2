import React, { useState } from "react";
import "./Modal.css";
import SignIn from "../../components/Register/SignIn";

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
          <div onClick={toggleModal} className="overlay1">

          </div>
          <div className="modal-content1 ">
            <SignIn />
            
            </div>
            
              
            </div>
          
      )}
      
    </>
  );
}