import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import "../css/JoinRoom.css";
import doc from "../../../assets/Doc123.svg"




const JoinRoom = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <div className="container video-box d-flex flex-wrap justify-content-between">
      <div>
        <h1 className="video-header">
          Consult with your Daac Saab
        </h1>
        <h2 className="video-subheader mt-4">
          Using our in house video and chat features , consult with your Doctor in a seamless and modern way
        </h2>
        <div>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            type="text"
            placeholder="Enter Room code"
            className="id-input ps-2"
          />
          <button onClick={handleJoinRoom} className="btn-primary mt-5 ms-3">
            Join
          </button>
          <p className="hint-text mt-3">
            *Enter your name as Room Code
          </p>
        </div>

      </div>
      <div className="doc-image mt-5">
        <img style={{width:"20vw"}} className="m-3 mt-5"  src={doc} />
        </div>

    </div>
  );
};

export default JoinRoom;
