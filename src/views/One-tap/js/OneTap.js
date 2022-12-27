import React from "react";
import { useState } from "react";
import "../css/oneTap.css";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const data = [
  "Headache",
  "Fever",
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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
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
                  onClick={() => {
                    handleSymptomColor(i);
                  }}
                  className={`m-2 ${
                    selectedSymptom.includes(i)
                      ? "selectedSymptomColor"
                      : "sym-card"
                  }`}
                >
                  {x}
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
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    
 


    </div>
  );
}
