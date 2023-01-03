import React from "react";
import { InlineWidget } from "react-calendly";
import "../css/Calendar.css";
import doctor from "../../../assets/docFemale.svg";
const Calendar = () => {
  return (
    <div className="container col-12">
      <span className="booking">Book a consultation</span>
      <div className="d-flex">
        <div className="col-4 mt-5">
          <div className="d-flex mb-4">
            <div className="d-flex ">
              <img alt="doc-img" src={doctor} />
              <div className="d-flex flex-column ms-3">
                <span className="docName">Dr.Pooja Kadar</span>
                <span className="specialistMainText">Dermatologist</span>
                <span className="experienceText">
                  10 years of experience MBBS, Diploma in Dermatology Diploma in
                  Cosmetology (UK) Speaks English, Hindi, Marathi
                </span>
              </div>
            </div>
          </div>
          <span className="supervisorText">
            Our dedicated medical advisors Dr. Supriya and Dr. Priyadarshani
            will be in touch with you post scheduling to guide you through the
            consultation.
          </span>
        </div>

        <div className="col-12">
          <InlineWidget url="https://calendly.com/gantavya99/30min" />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
