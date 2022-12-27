import React from 'react';
import "./Special.css";
import General_Physian_Logo from "./../../assets/General_Physian_Logo.svg"
import Vector from "./../../assets/Vector.svg"; 
import Category from '../../components/Category/js/Category';
import specialIcon from "./../../assets/specialIcon.svg";
import online_consult from "./../../assets/online_consult.svg";
import digital_prescription from "./../../assets/digital_prescription.svg";

const Special = () => {
    const data=[
        {
            Image:General_Physian_Logo,
            title:"General Physician",
            Description:"For common medical conditions like headache, cough and more"
        },
        {
            Image:General_Physian_Logo,
            title:"General Physician",
            Description:"For common medical conditions like headache, cough and more"
        },
        {
            Image:General_Physian_Logo,
            title:"General Physician",
            Description:"For common medical conditions like headache, cough and more"
        },
        {
            Image:General_Physian_Logo,
            title:"General Physician",
            Description:"For common medical conditions like headache, cough and more"
        },
        {
            Image:General_Physian_Logo,
            title:"General Physician",
            Description:"For common medical conditions like headache, cough and more"
        },
        {
            Image:General_Physian_Logo,
            title:"General Physician",
            Description:"For common medical conditions like headache, cough and more"
        },
        {
            Image:General_Physian_Logo,
            title:"General Physician",
            Description:"For common medical conditions like headache, cough and more"
        },
        {
            Image:General_Physian_Logo,
            title:"General Physician",
            Description:"For common medical conditions like headache, cough and more"
        },
        {
            Image:General_Physian_Logo,
            title:"General Physician",
            Description:"For common medical conditions like headache, cough and more"
        },
        {
            Image:General_Physian_Logo,
            title:"General Physician",
            Description:"For common medical conditions like headache, cough and more"
        },
        {
            Image:General_Physian_Logo,
            title:"General Physician",
            Description:"For common medical conditions like headache, cough and more"
        },
        {
            Image:General_Physian_Logo,
            title:"General Physician",
            Description:"For common medical conditions like headache, cough and more"
        },
        {
            Image:General_Physian_Logo,
            title:"Chiropractor",
            Description:"For common medical conditions like headache, cough and more"
        },
      

    ]
  return (
    <div>
    <div className="container mt-5 pt-5">
            <div className="header">
                Specialists
                <img src={Vector} className="img-fluid vector"/>
            </div>
            <div className="subtext mt-2 mb-4">
                See real time availability of doctors and book virtual consultations at your convenience
            </div>
        <div className="d-flex flex-wrap">
            {data.map((x,i)=>{
                return(
                    <div className="me-3">
                    <Category
                    logo={x.Image}
                    Specialty={x.title}
                    description={x.Description}
                    />
                    </div>
                );
            })
            }
        </div>
        <div className="header-1 mt-5">
                How it works?
                <img src={Vector} className="img-fluid vector"/>
            </div>
            <div className="mt-5 mb-5 d-flex flex-wrap">
                <span className="me-5">
                <span>
                <img src={specialIcon} alt="Speciality Icon" />
                </span>
                <span className="ms-2 header-2">
                Specialities
                </span>
                <div className="mt-3 subtext-1" >
                    Choose a specialty as per your medical need.
                </div>
                
                </span>
                <span className="me-5">
                <span>
                <img src={online_consult} alt="Speciality Icon" />
                </span>
                <span className="ms-2 header-2">
                Online Consult
                </span>
                <div className="mt-3 subtext-1" >
                    Consult with a doctor at your scheduled time 
                </div>
                
                </span>
                <span>
                <span>
                <img src={digital_prescription} alt="Speciality Icon" />
                </span>
                <span className="ms-2 header-2">
                Digital Prescription
                </span>
                <div className="mt-3 subtext-1" >
                    Get a digital prescription within the app
                </div>
                
                </span>
            
            </div>
            </div>
            <div className="testimonial-box flex-column d-flex justify-content-center align-items-center">
                <div>
                "It was great to have Daac Saab Doctors with our family for all the medical needs"
                </div>
                <div className="credits">
                    -Gantavya, Bajrang (Web Developers)
                </div>
            </div>
            <div className="container">
            <div className="question-text mt-5">
                Got questions?
            </div>
            
    </div>
    </div>
  )
}

export default Special