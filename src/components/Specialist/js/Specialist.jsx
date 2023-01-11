import React, { useEffect } from "react";
import "../css/Specialist.css";
import chevron from "../../../assets/chevron-right.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../../../Backend";

const Specialist = (props) => {
  const { id, name, imglogo, degree, specialist, experience } = props;
  const [Experience, setExperince] = useState();
  const [doctors, setDoctors] = useState([]);
  const params = useParams();
  const getExprience = () => {
    const exp = experience.split("");

    for (let i = 0; i <= exp.length - 1; i++) {
      setExperince(...exp[0]);
    }
  };
  const getDoctorBySpecility = async () => {
    await axios
      .get(`${backendUrl}/doctorSpecialist/${params.id} `)
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  const navigate = useNavigate();
  useEffect(() => {
    getExprience();
    getDoctorBySpecility();
  }, []);
  console.log(params, "params");
  return (
    <>
      {doctors.map((x, i) => {
        return (
          <div
            key={id}
            className="specialist-card d-flex align-items-center mt-5 me-2"
            onClick={() => navigate("/Schedule-Appointment")}
          >
            <img alt="doc" className="img-fluid col-2 mx-3" src={imglogo} />
            <div className="d-flex flex-column col-8">
              <span className="docText mb-1">{x?.name}</span>
              <span className="docSpecialist mb-1 ">{x?.specialist}</span>
              <span className="docDegreeText mb-1 text-line-truncate">
                {x?.degree}
              </span>
              <span className="docDegreeText mb-1">{`${x?.experience} years of experience`}</span>
            </div>
            <img src={chevron} alt="chevron" className="img-fluid " />
          </div>
        );
      })}
    </>
  );
};

export default Specialist;
