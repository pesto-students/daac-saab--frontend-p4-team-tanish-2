import React from "react";
import { useState } from "react";
import "../css/oneTap.css";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const data = [
  {
    Symptom:"Headache",
    Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Dry Cough",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Wet Cough",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Loose Motion",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Constipation",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Runny Nose",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Red Eye",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Feeling cold",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Rashes",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Itching",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Breathlessness",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Bone Pain",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Dizziness",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Oral Ulcer",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Stomach Ulcer",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Nausea",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Weakness",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Pain in Knee",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Leg Sprain",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Cut on Skin",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Vomitting",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Swollen Eye",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Migraine",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Unable to Sleep",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Loss of appetite",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Pain in Kness",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Burning while Urinating",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom: "Itchiness in Genitals",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom: "Dandruff",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Abdominal (Pain)",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Abdominal (Burning)",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Chest Pain",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom: "Chest Burning",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Neck Pain",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
{
  Symptom:"Nose Bleeding",
  Prescription:"Dolo 650mg for 3 Days after lunch"
},
];

export default function OneTap() {
  const [showOneTap, setShowOneTap] = useState(false);
  const [show, setShow] = useState(true);
  const [selectedSymptom, setSelectedSymptom] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);
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
          <h4>Please consult a Specialist Doctor if you have more than 3 Symptoms</h4>
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
  
  const handleSymptomColor = (symptom) => {
    if (!selectedSymptom.includes(symptom)) {
      const prevValue = [...selectedSymptom, symptom];
      setSelectedSymptom(prevValue);
    } else {
      const prevValue = selectedSymptom.filter((sym) => sym !== symptom);
      setSelectedSymptom(prevValue);
    }
  };
  const showModal=()=>{
    if(selectedSymptom.length>=3)
    setModalShow(true);
  }
  console.log(selectedSymptom.length);

  return (
    <div className="">
      <div className="enquiry-div container">
        <p className="general-question">
          Are you here for General Consultation?
        </p>
      </div>
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
                  onClick={() =>{
                    handleSymptomColor(i);
                    showModal();
                  }}
                  className={`m-2 ${
                    selectedSymptom.includes(i)
                      ? "selectedSymptomColor"
                      : "sym-card"
                  }`}
                >
                  {x.Symptom}
                </div>
              );
            })}
          </div>
          
          {/* symptom component ends */}
          <div className="d-flex justify-content-center mt-4 mb-5">
            <button className="btn btn-submit">Generate Prescription</button>
          </div>
        </div>
      ) : null}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    
    </div>
  );
}
