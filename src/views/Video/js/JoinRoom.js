import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState , useCallback} from 'react';
const JoinRoom = () => {

    const [value,setValue]=useState();
    const navigate=useNavigate();
    const handleJoinRoom=useCallback(
      () => {
        navigate(`/room/${value}`)
      },
      [navigate,value],
    )
    
  return (
    <div className="container">
        <input 
        
        onChange={(e)=>setValue(e.target.value)}
        value={value}
        type="text" 
        placeholder="Enter Room code"/>
        <button onClick={handleJoinRoom} className="btn-primary">
            Join
        </button>
    </div>
  )
}

export default JoinRoom