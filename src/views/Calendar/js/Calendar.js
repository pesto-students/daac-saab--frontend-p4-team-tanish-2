import React, { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import "../css/Calendar.css";
import doctor from "../../../assets/docFemale.svg";
import { backendUrl } from "../../../Backend";
import { useParams } from "react-router-dom";
import axios from "axios";
import Avatar from "react-avatar";
import { isMobile } from "react-device-detect";

const Calendar = () => {
  const [doctorById, setDoctorById] = useState([]);
  const params = useParams();
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
    getDocById(params?.id);
  }, []);
  return (
    <div className="container col-12 calendar-box">
      <span className="booking mt-4">Book a consultation</span>
      <div className={`${isMobile ? "flex-wrap" : ""} d-flex`}>
        <div className={`${isMobile ? "col-12" : "col-4"} mt-5`}>
          <div className="d-flex mb-4">
            <div className="d-flex ">
              <Avatar
                name={doctorById?.name}
                round={true}
                textSizeRatio={1.75}
              />
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
          <InlineWidget 
           pageSettings={{
            backgroundColor: '#ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '#025f4c',
            textColor: '#025f4c'
          }}

          prefill={{
            email: 'test@test.com',
            firstName: 'Jon',
            lastName: 'Snow',
            name: 'Jon Snow'}}
            style={{minWwidth:"320px",height:"630px"}}
           url="https://calendly.com/daacsaabhelp/30min" 
           />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
