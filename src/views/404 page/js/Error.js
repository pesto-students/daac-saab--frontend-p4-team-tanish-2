import React from "react";
import "../css/error.css";
import error from "../../../assets/giphy.gif";

export default function Error() {
  return (
    <div
      className="align-items-center container d-flex justify-content-around mt-5 pt-5"
      style={{ height: "41vh" }}
    >
      <img src={error} alt="error" className="img-fluid" />
    </div>
  );
}
