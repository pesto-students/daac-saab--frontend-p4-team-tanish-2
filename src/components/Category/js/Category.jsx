import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Category.css";
const Category = (props) => {
  const { logo, Specialty, description } = props;
  const navigate = useNavigate();
  return (
    <div className="mt-3 main-box">
      <div
        className="ms-3 d-grid"
        onClick={() => navigate(`/Specialist/${description}`)}
      >
        <div className="mb-3 mt-2">
          <img alt="doc-logo" className="logo" src={logo} />
        </div>
        <div className="mb-2 header-text text-line-truncate">{description}</div>
        <div className="mb-5 description text-line-truncate ">{Specialty}</div>
        <div className="doctor-page-link">
          <span
            className="mb-2 "
            onClick={() => navigate(`/Specialist/${Specialty}`)}
          >
            See Doctors &gt;
          </span>
        </div>
      </div>
    </div>
  );
};

export default Category;
