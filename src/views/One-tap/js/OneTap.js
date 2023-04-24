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
import ClockLoader from "react-spinners/ClockLoader";
import { auth, db, logout } from "../../../context/Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Loader from "./Loader";
import { symptoms } from "../../../context/Data"
import "animate.css";
import Accordion1 from "../../../components/Accordion/Accordion";


// let moment = require("moment");
// const override: cssProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };


export default function OneTap() {
  const [showOneTap, setShowOneTap] = useState(false);
  const [show, setShow] = useState(true);
  const [selectedSymptom, setSelectedSymptom] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [prescription, setPrescription] = useState([]);
  const [showPrescription, setShowPrescription] = useState(false);
  const [loading, setLoading] = useState(false);
  const [presData, setPresData] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [user, loading1, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const[click, setClick]=useState(false);
  const navigate = useNavigate();

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
    console.log(prescription);
  };

  const showModal = () => {
    if (selectedSymptom.length >= 3) setModalShow(true);
  };

  const generatePDF = () => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#health-tips-container"), {
      callback: function (pdf) {
        pdf.save("Prescription.pdf");
      },
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
    <>

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
        <div class="selection container">
  {showPrescription ? (
    <button
      class="btn btn-primary"
      onClick={()=>{
        setShowOneTap(!showOneTap);
        setShowPrescription(false);
        setSelectedSymptom([]);

      }}
    >
      Refresh Symptoms
    </button>
  ) : (
    <button
      class="btn btn-primary"
      onClick={() => {
        setShowOneTap(!showOneTap);
      }}
    >
      Yes
    </button>
  )}
  <button
    class="btn btn-secondary"
    onClick={() => {
      navigate("/Specialist");
    }}
  >
    No, I want to see a specialist
  </button>
</div>

        <hr></hr>
        <div className="container">
        {showOneTap && (
            <>
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
          
            <div className="d-flex flex-wrap ">
              {(show ? symptoms.slice(0, 15) : symptoms).map((x, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      handleSymptomColor(x, i);
                      handlePrescription(x.prescription, i);
                      showModal();
                    }}
                    className={`m-2 ${selectedSymptom.includes(x)
                      ? "selectedSymptomColor"
                      : "sym-card"
                      }`}
                  >
                    {x.key}
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
              {!showPrescription && (
                <button
                  className="btn btn-submit"
                  disabled={selectedSymptom.length === 0 ? true : false}
                  onClick={() => {
                    setShowPrescription(true);
                    setShowOneTap(false);
                    setClick(true);
                  }}
                >
                  Generate Prescription
                </button>
              )}
            </div>

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => {
                setModalShow(false);
                if (selectedSymptom.length > 3) {
                  selectedSymptom.pop();
                  prescription.pop();

                }
              }}
            />
            
                </>
                )}
                <div >
              {showPrescription ? (
                <>
                <div id="health-tips-container" className="bg-light rounded p-4 shadow-sm">
                <h3 className="text-muted mb-4">General Health tips for you:</h3>
                  {selectedSymptom.map((advice, key) => {
                    return (
                      <p className="symptom-tip" key={key}>
                        <span className="symptom-name font-weight-bold">{advice.key}: </span>
                        <span className="symptom-advice">{advice.prescription}</span>
                      </p>
                    );
                  })}
                </div>
                  <div>
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
                  </>
                  ) : null}
                </div>
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
         <Accordion1 />
      </div>
    </>
      );
}
