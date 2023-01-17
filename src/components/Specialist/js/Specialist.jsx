import React, { useEffect } from "react";
import "../css/Specialist.css";
import chevron from "../../../assets/chevron-right.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../../../Backend";
import Avatar from "react-avatar";

const Specialist = (props) => {
  const [doctors, setDoctors] = useState([]);
  const params = useParams();

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
    getDoctorBySpecility();
  }, []);
  return (
    <>
      {doctors.map((x, i) => {
        return (
          <div
            key={i}
            className="specialist-card d-flex align-items-center mt-5 me-2 col-3"
            onClick={() => navigate(`${x?._id}`)}
          >
            <Avatar name={x?.name} round={true} textSizeRatio={1.75}/>
            <div className="d-flex flex-column mx-2">
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
