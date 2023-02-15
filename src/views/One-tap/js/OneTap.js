import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useState, CSSProperties, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import "../css/oneTap.css";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import jsPDF from "jspdf";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import axios from "axios";
import { backendUrl } from "../../../Backend";
import pencil from "../../../assets/pencil.svg";
import ClockLoader from "react-spinners/ClockLoader";
import Accordion from "react-bootstrap/Accordion";
import { auth, db, logout } from "../../../context/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

// let moment = require("moment");
const override: cssProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const data = [
  "Headache",

  "Dry Cough",

  "Wet Cough",

  "Loose Motion",

  "Constipation",

  "Runny Nose",

  "Red Eye",

  "Feeling cold",

  "Rashes",

  "Itching",

  "Breathlessness",

  "Bone Pain",

  "Dizziness",

  "Oral Ulcer",

  "Stomach Ulcer",

  "Nausea",
  "Weakness",
  "Pain in Knee",
  "Leg Sprain",
  "Cut on Skin",
  "Vomitting",
  "Swollen Eye",
  "Migraine",
  "Unable to Sleep",
  "Loss of appetite",
  "Pain in Kness",
  "Burning while Urinating",
  "Itchiness in Genitals",
  "Dandruff",
  "Abdominal (Pain)",
  "Abdominal (Burning)",
  "Chest Pain",
  "Chest Burning",
  "Neck Pain",
  "Nose Bleeding",
];

export default function OneTap() {
  const [showOneTap, setShowOneTap] = useState(false);
  const [show, setShow] = useState(true);
  const [selectedSymptom, setSelectedSymptom] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [prescription, setPrescription] = useState([]);
  const [showPrescription, setShowPrescription] = useState(false);
  const [loading, setLoading] = useState(false);
  const [presData, setPresData] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [user, loading1, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const getCurrentDate = () => {
    let x = new Date();
    let date = x.format("MMM Do YY");
    setCurrentDate(date);
  };
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Highly Recommended!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            Please consult a Specialist Doctor if you have more than 3 Symptoms
          </h4>
          <div className="btn-modal">
            <button
              className="btn btn-secondary"
              onClick={() => {
                navigate("/Specialist");
              }}
            >
              Take me to the Specialist Page
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const handleSymptomColor = (elem, index) => {
    if (!selectedSymptom.includes(elem)) {
      const prevValue = [...selectedSymptom, elem];
      setSelectedSymptom(prevValue);
    } else {
      const prevValue = selectedSymptom.filter((sym) => sym !== elem);
      setSelectedSymptom(prevValue);
    }
  };

  const handlePrescription = (sym, pres) => {
    if (!prescription.includes(sym)) {
      setPrescription([...prescription, sym]);
    } else {
      const value = prescription.filter((x) => x !== sym);
      setPrescription(value);
    }
  };

  const showModal = () => {
    if (selectedSymptom.length >= 3) setModalShow(true);
  };

  const generatePDF = () => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#prescription-pdf"), {
      callback: function (pdf) {
        pdf.save("Prescription.pdf");
      },
    });
  };

  const getPrescription = async () => {
    setLoading(true);
    await axios
      .get(`${backendUrl}/getPrescription/${selectedSymptom[0]}`)
      .then((res) => {
        setLoading(true);
        setPresData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (loading)
      return;

    if (!user) {
      return navigate("/Sign-In");
      toast("Please Login first !");
    }
    fetchUserName();
  }, [user, loading]);
  return (
    <div className="">
      <div className="enquiry-div container">
        <p className="general-question">
          Are you here for General Consultation?
        </p>
      </div>
      <Toaster
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
        }}
      />
      <div className="selection container">
        <button
          className="btn btn-primary"
          onClick={() => {
            setShowOneTap(!showOneTap);
          }}
        >
          Yes
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            navigate("/Specialist");
          }}
        >
          No, I want to see a specialist
        </button>
      </div>
      <hr></hr>
      {showOneTap ? (
        <div className="container">
          <div className="d-flex justify-content-between">
            <p className="text-1">
              Please select 0-3 Symptoms and Let Us Generate a Prescription for
              you.
            </p>
            <button
              onClick={() => {
                setShow(!show);
              }}
              className="btn-light"
            >
              {show ? "Show More Symptoms" : "Show Less"}
            </button>
          </div>
          {/*  symptoms cards component  */}
          <div className="d-flex flex-wrap ">
            {(show ? data.slice(0, 15) : data).map((x, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    handleSymptomColor(x, i);
                    handlePrescription(x, i);
                    showModal();
                  }}
                  className={`m-2 ${selectedSymptom.includes(x)
                      ? "selectedSymptomColor"
                      : "sym-card"
                    }`}
                >
                  {x}
                </div>
              );
            })}
          </div>
          {showPrescription ? (
            <div>
              {loading ? (
                <ClockLoader
                  cssOverride={override}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <div className="d-flex align-items-center justify-content-center">
                  <div className="Prescription-box mt-3 ">
                    {presData.map((x, i) => {
                      return (
                        <div
                          id="prescription-pdf"
                          className="position-relative"
                        >
                          <div className="d-flex align-items-center justify-content-center mt-1 pres-header">
                            PRESCRIPTION
                          </div>
                          <hr className="my-4"></hr>
                          <hr className="my-4"></hr>
                          <hr className="my-4"></hr>
                          <hr className="my-4"></hr>
                          <hr className="my-4"></hr>

                          <hr className="my-4"></hr>
                          <hr className="my-4"></hr>
                          <hr className="my-4"></hr>

                          <hr className="my-4"></hr>
                          <hr className="my-4"></hr>
                          <hr className="my-4"></hr>
                          <hr className="my-4"></hr>
                          <hr className="my-4"></hr>
                          <hr className="my-4"></hr>

                          <div className="position-absolute presData">
                            <div className="ms-3 info ">
                              <div className="patientName">Name : {name}</div>
                              {/* <div>Gender : {user?.gender}</div>
                          <div>Age : {user?.birthdate}</div> */}
                              <div className="patientName">
                                Date : {currentDate}
                              </div>
                              <div className=" advice">Advice :</div>
                            </div>

                            <div className="ms-3 patientDetails">
                              {x?.advice.map((y, j) => {
                                return (
                                  <div className="">
                                    {j + 1}.{y}
                                  </div>
                                );
                              })}
                            </div>

                            <div className="ms-3 suggest">
                              General health suggestions :
                            </div>
                            {x?.health.map((z, k) => {
                              return (
                                <div className="ms-3 patientDetails">
                                  {k + 1}. {z}
                                </div>
                              );
                            })}
                          </div>
                          {/* <img
                            className="img-fluid prescriptionPencil"
                            loading="lazy"
                            alt="pencil"
                            src={pencil}
                          /> */}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              <div>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  
                  <div>
                    <button
                      className="btn btn-info mt-5 "
                      onClick={() => {
                        generatePDF();
                      }}
                    >
                      Download Prescription
                      <FileDownloadIcon />
                    </button>
                  </div>
                  <div>
                    
                    
                    <button
                      className="btn btn-secondary1 mt-5 "
                      onClick={() => {
                        navigate("/Specialist");
                      }}
                    >
                     Still have doubts? Consult a specialist
                    </button>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
            {!showPrescription && (
              <button
                className="btn btn-submit"
                disabled={selectedSymptom.length === 0 ? true : false}
                onClick={() => {
                  getPrescription();
                  setShowPrescription(true);
                  getCurrentDate();
                }}
              >
                Generate Prescription
              </button>
            )}
          </div>
        </div>
      ) : null}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          if (selectedSymptom.length > 3) {
            selectedSymptom.pop();
          }
        }}
      />
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
}
