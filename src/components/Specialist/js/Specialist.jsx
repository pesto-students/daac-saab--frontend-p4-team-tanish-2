import React from "react";
import "../css/Specialist.css";
import chevron from "../../../assets/chevron-right.svg";

const specialist = (props) => {
  const { name, imglogo, degree, specialist, experience } = props;
  return (
    <div className="specialist-card d-flex col-12 align-items-center mt-5">
      <img alt="doc" className="img-fluid col-2 mx-3" src={imglogo} />
      <div className="d-flex flex-column ">
        <span className="docText mb-1">{name}</span>
        <span className="docSpecialist mb-1">{specialist}</span>
        <span className="docDegreeText mb-1">{degree}</span>
        <span className="docDegreeText mb-1">{`${experience} years of experience`}</span>
      </div>
      <img src={chevron} alt="chevron" className="img-fluid ms-3" />
    </div>
  );
};

export default specialist;
