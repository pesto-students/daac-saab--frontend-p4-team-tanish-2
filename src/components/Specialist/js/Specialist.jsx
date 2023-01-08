import React, { useEffect } from "react";
import "../css/Specialist.css";
import chevron from "../../../assets/chevron-right.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Specialist = (props) => {
  const { id,name, imglogo, degree, specialist, experience } = props;
  const [Experience, setExperince] = useState();
  const getExprience = () => {
    const exp = experience.split("");

    for (let i = 0; i <= exp.length - 1; i++) {
      setExperince(...exp[0]);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    getExprience();
  });

  return (
    <div key={id}
      className="specialist-card d-flex align-items-center mt-5 me-2"
      onClick={() => navigate("/Schedule-Appointment")}
    >
      <img alt="doc" className="img-fluid col-2 mx-3" src={imglogo} />
      <div className="d-flex flex-column col-8">
        <span className="docText mb-1">{name}</span>
        <span className="docSpecialist mb-1 ">{specialist}</span>
        <span className="docDegreeText mb-1 text-line-truncate">{degree}</span>
        <span className="docDegreeText mb-1">{`${Experience} years of experience`}</span>
      </div>
      <img src={chevron} alt="chevron" className="img-fluid " />
    </div>
  );
};

export default Specialist;
