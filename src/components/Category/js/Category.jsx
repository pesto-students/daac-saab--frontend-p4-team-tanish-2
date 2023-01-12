import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import General_Physian_Logo from "../../../assets/General_Physian_Logo.svg";
import { backendUrl } from "../../../Backend";
import "../css/Category.css";
import axios from "axios";
import { useEffect } from "react";

const Category = (props) => {
  // const { logo, specialist, degree } = props;
  const [doctors, setDocotors] = useState([]);
  const getDoctor = async () => {
    await axios
      .get(`${backendUrl}/getDoctor`)
      .then((response) => {
        setDocotors(response.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  const navigate = useNavigate();
  useEffect(() => {
    getDoctor();
  }, []);
  return (
    <>
      {doctors.map((x, i) => {
        return (
          <div className="mt-3 main-box">
            <div
              className="ms-3 d-grid"
              onClick={() => navigate(`/Specialist/${x?.specialist}`)}
            >
              <div className="mb-3 mt-2">
                <img
                  alt="doc-logo"
                  className="logo"
                  src={General_Physian_Logo}
                />
              </div>
              <div className="mb-2 header-text text-line-truncate">
                {x?.specialist}
              </div>
              <div className="mb-5 description text-line-truncate ">
                {x?.degree}
              </div>
              <div className="doctor-page-link">
                <span
                  className="mb-2 "
                  onClick={() => navigate(`/Specialist/${x?.specialist}`)}
                >
                  See Doctors &gt;
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Category;
