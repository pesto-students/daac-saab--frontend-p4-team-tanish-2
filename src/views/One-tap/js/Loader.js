import React from 'react'
import "../css/oneTap.css";
const Loader = (props) => {
  return (
    <div className="loader">
    <div className="loader-animation"></div>
    <div className="loader-message">{props.message}</div>
  </div>
  )
}

export default Loader