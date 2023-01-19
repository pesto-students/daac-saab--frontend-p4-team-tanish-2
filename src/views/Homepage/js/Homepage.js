import React, { useEffect, useState } from "react";
import home from "../../../assets/home1.svg";
import "../css/homepage.css";
import testomonial from "../../../assets/openlightbox.svg";
import superCharge from "../../../assets/div.svg";
import feature2 from "../../../assets/feature2.svg";
import feature1 from "../../../assets/feature1.svg";
import arrow from "../../../assets/arrow.svg";
import arrow1 from "../../../assets/yellowArrow.svg";
import img1 from "../../../assets/img1.svg";
import img2 from "../../../assets/img2.svg";
import img3 from "../../../assets/img3.svg";
import img4 from "../../../assets/img4.svg";
import videoCall from "../../../assets/videoCall.svg";
import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import LoginPage from "../../../components/Login/js/LoginPage";
import { useSelector, useDispatch } from "react-redux";
import { showModal, closeModal } from "../../../Store/Slice/LoginSlice";

export default function Homepage() {
  //const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.User);
  return (
    <>
      <div className="rootHome">
        <div className="">
          <div className={`firstContent ${isMobile ? "flex-wrap" : ""} my-5`}>
            <div className="grid">
              {" "}
              
              <span className="textColor">
                With great Technology{" "}
                <span className="textColorInner">comes great</span> Healthcare
              </span>
              <span className="textColorDesc">
                Consultations with curated doctors starting as low as{" "}
                <span>₹ 249</span>
              </span>
              <button className="talkToUs">Talk to us</button>
              <div className="firstContentTestemonial">
                <div className="col-6 mx-1">
                  <span className="testomonial">13k+</span>
                  <p className="testomonial">Happy Patients</p>
                </div>
                <div className="col-6 mx-1">
                  <span className="testomonial">4.8/5</span>
                  <p className="testomonial">App Rating</p>
                </div>
                <div className="col-6 mx-1">
                  <span className="testomonial">300+</span>
                  <p className="testomonial">Doctors</p>
                </div>
              </div>
            </div>
            <img
              alt="img1"
              src={home}
              className={`${isMobile ? "col-10" : ""} img-fluid`}
            />
          </div>
        </div>

        <div className={`trusted `}>
          <div
            className={`${
              isMobile
                ? "flex-wrap justify-content-around"
                : "justify-content-between"
            } align-items-lg-start container d-flex  py-5`}
          >
            <img
              alt="testemonial"
              src={testomonial}
              className={`${isMobile ? "col-10" : ""} img-fluid mx-5`}
            />
            <span
              className={`testomonialText ${isMobile ? "col-10" : "col-3"}`}
            >
              Trusted by 13K+ happy patients and their families
            </span>
          </div>
          <div className="container my-5">
            <img
              src={superCharge}
              alt="superCharge"
              className={`${isMobile ? "col-10" : ""} img-fluid ms-5`}
            />
          </div>
        </div>
        <div className={`container featureDiv py-5`}>
          <div
            className={`${
              isMobile ? "flex-wrap" : ""
            } d-flex justify-content-around py-5`}
          >
            <img src={feature1} alt="feature1" className="img-fluid" />
            <div className={`${isMobile ? "" : "col-3"} d-flex flex-column `}>
              <span className="featureText mb-3">
                Benefits your family<span className=""> will love</span>
              </span>
              <span className="chatText mb-1">
                <img src={arrow} alt="arrow" className="img-fluid me-3" />
                Chat with a family doctor 24/7
              </span>
              <span className="chatText mb-3">
                <img src={arrow} alt="arrow" className="img-fluid me-3" />
                Get help with any condition
              </span>
              <p className="consultationText mb-3">
                24/7 Virtual Consultations with our team of doctors. Text your
                doctor, anytime. Locate nearby partnered hospitals easily.
              </p>

              <button className="learnMoreBtn col-5">Learn more</button>
            </div>
          </div>
          <div
            className={`${
              isMobile ? "flex-wrap" : ""
            } d-flex justify-content-around py-5`}
          >
            <div className={`${isMobile ? "" : "col-3"} d-flex flex-column `}>
              <span className="featureText1 mb-3">
                Get prescription for general diseases in minutes
                <span className=""> not days</span>
              </span>
              <span className="chatTextOne mb-1">
                <img src={arrow1} alt="arrow" className="img-fluid me-3" />
                One tap prescription
              </span>
              <span className="chatTextOne mb-3">
                <img src={arrow1} alt="arrow" className="img-fluid me-3" />
                Completely free for users
              </span>

              <button
                className="learnMoreBtn col-5"
                onClick={() => navigate("/One-tap")}
              >
                Learn more
              </button>
            </div>
            <img
              src={feature2}
              alt="feature1"
              className={`${isMobile ? "mt-3" : ""} img-fluid`}
            />
          </div>
        </div>
        <div className="container my-5 py-5">
          <div className="text-center">
            <span className="userText ">
              User <span>benefits</span>
            </span>
          </div>
          <div
            className={`${
              isMobile ? "flex-column" : ""
            } col-12 d-flex justify-content-around m-3`}
          >
            <div
              className={`${
                isMobile ? "col-12" : "col-4"
              } d-flex displayCard flex-wrap justify-content-around p-3`}
            >
              <img
                src={img1}
                className={`${isMobile ? "col-12" : ""} img-fluid `}
                alt="img-1"
              />
              <span className={`${isMobile ? "col-12" : "col-7"}`}>
                Text your doctor, anytime you need
              </span>
            </div>
            <div
              className={`${
                isMobile ? "col-12 my-3" : "col-4"
              } d-flex displayCard flex-wrap justify-content-around p-3`}
            >
              <img
                src={img2}
                alt="img-2"
                className={`${isMobile ? "col-12" : ""} img-fluid `}
              />
              <span className={`${isMobile ? "col-12" : "col-7"}`}>
                24/7 consultations with curated doctors
              </span>
            </div>
          </div>
          <div
            className={`${
              isMobile ? "flex-column" : "m-3"
            } col-12 d-flex justify-content-around `}
          >
            <div
              className={`${
                isMobile ? "col-12" : "col-4"
              } d-flex displayCard flex-wrap justify-content-around p-3`}
            >
              <img
                src={img3}
                alt="img3"
                className={`${isMobile ? "col-12" : ""} img-fluid `}
              />
              <span className={`${isMobile ? "col-12" : "col-7"}`}>
                Set up a family doctor for your entire family
              </span>
            </div>
            <div
              className={`${
                isMobile ? "col-12 my-3" : "col-4"
              } d-flex displayCard flex-wrap justify-content-around p-3`}
            >
              <img
                src={img4}
                alt="img4"
                className={`${isMobile ? "col-12" : ""} img-fluid `}
              />
              <span className={`${isMobile ? "col-12" : "col-7"}`}>
                Insurance with claims support
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isMobile ? "flex-column" : ""
        } container d-flex justify-content-around my-5`}
      >
        <img src={videoCall} alt="videocall" />
        <div
          className={`${isMobile ? "col-12 mt-3" : "col-3"} d-flex flex-column`}
        >
          <span className="notWellText mb-2">NOT FEELING WELL?</span>
          <span className="consultText">
            Start a consult within <span>30-minutes</span>
          </span>
          <span className="descText mb-3">
            Our in-house team of doctors is here to help the patients night and
            day
          </span>
          <button
            className="videoBtn col-4"
            onClick={() => navigate("/Doctor")}
          >
            Learn more
          </button>
        </div>
      </div>
      <LoginPage />
    </>
  );
}
