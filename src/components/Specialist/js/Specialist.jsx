import React from "react";
import "../css/Specialist.css";
import chevron from "../../../assets/chevron-right.svg";
import { useNavigate } from "react-router-dom";

const Specialist = (props) => {
  const { name, imglogo, degree, specialist, experience } = props;
  const navigate = useNavigate();
  return (
    <div
      className="specialist-card d-flex col-12 align-items-center mt-5"
      onClick={() => navigate("/Schedule-Appointment")}
    >
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

export default Specialist;
