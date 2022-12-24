import React from "react";
import "../css/Special.css";
import General_Physian_Logo from "./../../assets/General_Physian_Logo.svg";
import Vector from "./../../assets/Vector.svg";
import Category from "../../../components/Category/js/Category";
const data = [
  {
    Image: General_Physian_Logo,
    title: "General Physician",
    Description: "For common medical conditions like headache, cough and more",
  },
  {
    Image: General_Physian_Logo,
    title: "General Physician",
    Description: "For common medical conditions like headache, cough and more",
  },
  {
    Image: General_Physian_Logo,
    title: "General Physician",
    Description: "For common medical conditions like headache, cough and more",
  },
  {
    Image: General_Physian_Logo,
    title: "General Physician",
    Description: "For common medical conditions like headache, cough and more",
  },
  {
    Image: General_Physian_Logo,
    title: "General Physician",
    Description: "For common medical conditions like headache, cough and more",
  },
  {
    Image: General_Physian_Logo,
    title: "General Physician",
    Description: "For common medical conditions like headache, cough and more",
  },
  {
    Image: General_Physian_Logo,
    title: "General Physician",
    Description: "For common medical conditions like headache, cough and more",
  },
  {
    Image: General_Physian_Logo,
    title: "General Physician",
    Description: "For common medical conditions like headache, cough and more",
  },
  {
    Image: General_Physian_Logo,
    title: "General Physician",
    Description: "For common medical conditions like headache, cough and more",
  },
  {
    Image: General_Physian_Logo,
    title: "General Physician",
    Description: "For common medical conditions like headache, cough and more",
  },
  {
    Image: General_Physian_Logo,
    title: "General Physician",
    Description: "For common medical conditions like headache, cough and more",
  },
  {
    Image: General_Physian_Logo,
    title: "General Physician",
    Description: "For common medical conditions like headache, cough and more",
  },
  {
    Image: General_Physian_Logo,
    title: "General Physician",
    Description: "For common medical conditions like headache, cough and more",
  },
];
const Special = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="header">
        Specialists
        <img src={Vector} className="img-fluid vector" />
      </div>
      <div className="subtext mt-2 mb-4">
        See real time availability of doctors and book virtual consultations at
        your convenience
      </div>
      <div className="d-flex flex-wrap">
        {data.map((x, i) => {
          return (
            <div className="ms-3">
              <Category
                logo={x.Image}
                Specialty={x.title}
                description={x.Description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Special;
