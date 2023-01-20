import React from "react";
import "../css/Symptoms.css";
const Symptoms = (props) => {
  return (
    <div>
      <div className="container-1">
        <div className="symptoms">
          <p>{props.symptom}</p>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
