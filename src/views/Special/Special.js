import React, { useEffect, useState } from "react";
import "./Special.css";
import General_Physian_Logo from "./../../assets/General_Physian_Logo.svg";
import GreyBG from "./../../assets/GreyBG.svg";
import Category from "../../components/Category/js/Category";
import specialIcon from "./../../assets/specialIcon.svg";
import online_consult from "./../../assets/online_consult.svg";
import digital_prescription from "./../../assets/digital_prescription.svg";
import Accordion from "react-bootstrap/Accordion";
import { backendUrl } from "../../Backend";
import axios from "axios";

const Special = () => {
  const [docData, setDocData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getDocDetail = async () => {
    setIsLoading(true);
    await axios
      .get(`${backendUrl}/getDoctorDetail`)
      .then((response) => {
        setDocData(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  useEffect(() => {
    getDocDetail();
  }, []);
  return (
    <div>
      <div className="container mt-5 pt-5">
        <div className="header">
          Specialists
          <img src={GreyBG} className="img-fluid vector" />
        </div>
        <div className="subtext mt-2 mb-4">
          See real time availability of doctors and book virtual consultations
          at your convenience
        </div>
        <div className="d-flex flex-wrap">
          {docData.map((x, i) => {
            return (
              <div className="me-3" key={x?._id}>
                <Category
                  isLoading={isLoading}
                  logo={General_Physian_Logo}
                  exprience={x.exprience}
                  name={x.name}
                  degree={x?.degree}
                  specialist={x?.specialist}
                />
              </div>
            );
          })}
        </div>
        <div className="header mt-5">
          How it works?
          <img src={GreyBG} className="img-fluid vector" />
        </div>
        <div className="mt-5 mb-5 d-flex flex-wrap">
          <span className="me-5">
            <span>
              <img src={specialIcon} alt="Speciality Icon" />
            </span>
            <span className="ms-2 header-2">Specialities</span>
            <div className="mt-3 subtext-1">
              Choose a specialty as per your medical need.
            </div>
          </span>
          <span className="me-5">
            <span>
              <img src={online_consult} alt="Speciality Icon" />
            </span>
            <span className="ms-2 header-2">Online Consult</span>
            <div className="mt-3 subtext-1">
              Consult with a doctor at your scheduled time
            </div>
          </span>
          <span>
            <span>
              <img src={digital_prescription} alt="Speciality Icon" />
            </span>
            <span className="ms-2 header-2">Digital Prescription</span>
            <div className="mt-3 subtext-1">
              Get a digital prescription within the app
            </div>
          </span>
        </div>
      </div>
      <div className="testimonial-box flex-column d-flex justify-content-center align-items-center">
        <div>
          "It was great to have Daac Saab Doctors with our family for all the
          medical needs"
        </div>
        <div className="credits">-Gantavya, Bajrang (Web Developers)</div>
      </div>
      <div className="container">
        <div className="question-text mt-5">
          Got questions? We have got answers
        </div>
        <Accordion className="mt-4 mb-5">
          <Accordion.Item eventKey="0" className="Accordion">
            <Accordion.Header>
              <div className="Acc-header">Is this consultation free?</div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="Accordion">
            <Accordion.Header>
              <div className="Acc-header">
                Is it a video consultation? How do I book
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="Accordion">
            <Accordion.Header>
              <div className="Acc-header">
                Can I book a follow-up session with the doctor?
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="Accordion">
            <Accordion.Header>
              <div className="Acc-header">
                Can I use my free consultation for a family member?
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="Accordion">
            <Accordion.Header>
              <div className="Acc-header">
                I can't see the specialty I want to consult for. Who do I
                contact?
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className="Accordion-last">
            <Accordion.Header>
              <div className="Acc-header">
                I need to consult a doctor urgently but there is no
                availability.
              </div>
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
export default Special;
