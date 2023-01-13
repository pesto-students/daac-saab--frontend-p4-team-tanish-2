import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import "../css/Calendar.css";
import doctor from "../../../assets/docFemale.svg";
import { backendUrl } from "../../../Backend";
import { useParams } from "react-router-dom";
import axios from "axios";
const Calendar = () => {
  const [doctorById, setDoctorById] = useState([]);
  const params = useParams();
  let doctorId = params.id.split(":");
  const getDocById = async (id) => {
    await axios
      .get(`${backendUrl}/doctorByDetail/${id}`)
      .then((res) => {
        setDoctorById(res.data);
        console.log(res.data, "data data");
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  useEffect(() => {
    getDocById(doctorId[1]);
  }, []);
  return (
    <div className="container col-12">
      <span className="booking">Book a consultation</span>
      <div className="d-flex">
        <div className="col-4 mt-5">
          <div className="d-flex mb-4">
            <div className="d-flex ">
              <img alt="doc-img" src={doctorById?.Image} />
              <div className="d-flex flex-column ms-3">
                <span className="docName">{doctorById?.name}</span>
                <span className="specialistMainText">
                  {doctorById?.specialist}
                </span>
                <span className="experienceText">{doctorById?.degree}</span>
              </div>
            </div>
          </div>
          <span className="supervisorText">
            Our dedicated medical advisors will be in touch with you post
            scheduling to guide you through the consultation.
          </span>
        </div>

        <div className="col-8">
          <InlineWidget url="https://calendly.com/gantavya99/appointment-with-daac-saab" />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
