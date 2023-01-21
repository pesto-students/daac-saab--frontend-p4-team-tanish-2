import React, { useEffect } from "react";
import "../css/Specialist.css";
import chevron from "../../../assets/chevron-right.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../../../Backend";
import Avatar from "react-avatar";
import { isMobile } from "react-device-detect";

const Specialist = (props) => {
  const [doctors, setDoctors] = useState([]);
  const [payNow, setPayNow] = useState("");
  const params = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    getDoctorBySpecility();
  }, []);
  return (
    <>
      {doctors.map((x, i) => {
        return (
          <div
            key={i}
            className={`col-3 ${
              isMobile
                ? "col-12"
                : "specialist-card d-flex align-items-center mt-5 me-2 "
            }`}
            onClick={() => navigate(`${x?._id}`)}
            onMouseLeave={() => {
              setPayNow("");
            }}
          >
            <Avatar
              name={x?.name}
              round={true}
              textSizeRatio={1.25}
              className="Avatar-img"
            />
            <div
              className="d-flex flex-column mx-2"
              onMouseEnter={() => setPayNow(x?._id)}
            >
              <span className="docText mb-1">{x?.name}</span>
              <span className="docSpecialist mb-1 ">{x?.specialist}</span>
              <span className="docDegreeText mb-1 text-line-truncate">
                {x?.degree}
              </span>
              <span className="docDegreeText mb-1">{`${x?.experience} years of experience`}</span>
            </div>
            <img src={chevron} alt="chevron" className="img-fluid ms-auto" />
            {payNow === x?._id && (
              <div
                className="position-absolute pay-now-div col-12 text--center ps-4 py-2"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/checkout");
                }}
              >
                <span className="ms-5 ps-5 ">Book a consultation</span>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Specialist;
