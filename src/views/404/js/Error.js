import React from "react";
import error from "../../../assets/giphy.gif";

export default function Error() {
  return (
    <div className="align-items-center container d-flex justify-content-around my-5 py-5 ">
      <img src={error} alt="error" className="img-fluid" />
    </div>
  );
}
