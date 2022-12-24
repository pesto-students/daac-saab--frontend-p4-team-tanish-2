import React from "react";
import { useState } from "react";
import "../css/oneTap.css";

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
  const handleSymptomColor = (symptom) => {
    if (!selectedSymptom.includes(symptom)) {
      const prevValue = [...selectedSymptom, symptom];
      setSelectedSymptom(prevValue);
    } else {
      const prevValue = selectedSymptom.filter((sym) => sym !== symptom);
      setSelectedSymptom(prevValue);
    }
  };

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
            setShowOneTap(true);
            console.log("Clicked on Yes Button");
          }}
        >
          Yes
        </button>
        <button className="btn btn-secondary">
          No, I want to see a specialist
        </button>
      </div>
      <hr></hr>
      {showOneTap ? (
        <div className="container">
          <div className="d-flex justify-content-between">
            <p className="text-1">
              Please select 0-3 Symptoms and Let Us Generate a Prescription for
              you
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
    </div>
  );
}
