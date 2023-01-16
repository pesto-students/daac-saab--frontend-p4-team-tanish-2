import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import General_Physian_Logo from "../../../assets/General_Physian_Logo.svg";
import { backendUrl } from "../../../Backend";
import "../css/Category.css";
import axios from "axios";
import { useEffect } from "react";
import { Skeleton } from "@mui/material";

const Category = (props) => {
  const { logo, specialist, degree, name, exprience } = props;
  const [doctors, setDoctors] = useState([]);
  const getDoctor = async () => {
    await axios
      .get(`${backendUrl}/getDoctor`)
      .then((response) => {
        setDoctors(response.data);
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
            {props.isLoading ? (
              <Skeleton height="50px" width="50px" />
            ) : (
              <img alt="doc-logo" className="logo" src={General_Physian_Logo} />
            )}
          </div>
          <div className="mb-2 header-text text-line-truncate">
            {props.isLoading ? <Skeleton height="30px" /> : specialist}
          </div>
          <div className="mb-5 description text-line-truncate ">
            {props.isLoading ? <Skeleton height="30px" /> : degree}
          </div>
          <div className="doctor-page-link">
            <span
              className="mb-2 "
              onClick={() => navigate(`/Specialist/${specialist}`)}
            >
              {props.isLoading ? <Skeleton height="30px" /> : "See Doctors &gt"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
