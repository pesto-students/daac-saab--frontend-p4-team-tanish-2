import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import General_Physian_Logo from "../../../assets/General_Physian_Logo.svg";
import { backendUrl } from "../../../Backend";
import "../css/Category.css";
import axios from "axios";
import { Skeleton } from "@mui/material";

const Category = (props) => {
  const { logo, specialist, degree, name, exprience } = props;
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getDoctor = async () => {
    setIsLoading(true);
    await axios
      .get(`${backendUrl}/getDoctor`)
      .then((response) => {
        setDoctors(response.data);
        setIsLoading(false);
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
      <div className="mt-3 main-box">
        <div
          className="ms-3 d-grid"
          onClick={() => navigate(`/Specialist/${specialist}`)}
        >
          <div className="mb-3 mt-2">
            {isLoading ? (
              <Skeleton variant="circular" width={50} height={50} />
            ) : (
              <img alt="doc-logo" className="logo" src={General_Physian_Logo} />
            )}
          </div>
          <div className="mb-2 header-text text-line-truncate">
            {isLoading ? <Skeleton width={100} /> : specialist}
          </div>
          <div className="mb-5 description text-line-truncate ">
            {isLoading ? <Skeleton width={80} /> : degree}
          </div>
          <div className="doctor-page-link">
            <span
              className="mb-2 "
              onClick={() => navigate(`/Specialist/${specialist}`)}
            >
              {isLoading ? <Skeleton width={120} /> : "See Doctors ->"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;