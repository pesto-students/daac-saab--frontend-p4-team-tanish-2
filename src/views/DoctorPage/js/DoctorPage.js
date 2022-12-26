import React from "react";
import "../css/DoctorPage.css";
import seperator from "../../../assets/seperator.svg";
import Specialist from "../../../components/Specialist/js/Specialist";
import docImg from "../../../assets/docImg.svg";
import docImgFemale from "../../../assets/docFemale.svg";

const doctor = [
  {
    name: "Dr. Gourish Karande",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, DNB (Family Medicine), PGDGM",
    experience: "15",
    Image: docImg,
  },
  {
    name: "Dr. Amruta Bakshi",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, MD (Biochemistry)",
    experience: "13",
    Image: docImgFemale,
  },
  {
    name: "Dr. Waseem Ahmed",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, DNB (Family Medicine), PGDGM",
    experience: "8",
    Image: docImg,
  },
  {
    name: "Dr. Gourish Karande",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, DNB (Family Medicine), PGDGM",
    experience: "15",
    Image: docImg,
  },
  {
    name: "Dr. Gourish Karande",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, DNB (Family Medicine), PGDGM",
    experience: "15",
    Image: docImg,
  },
  {
    name: "Dr. Gourish Karande",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, DNB (Family Medicine), PGDGM",
    experience: "15",
    Image: docImg,
  },
  {
    name: "Dr. Gourish Karande",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, DNB (Family Medicine), PGDGM",
    experience: "15",
    Image: docImg,
  },
  {
    name: "Dr. Gourish Karande",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, DNB (Family Medicine), PGDGM",
    experience: "15",
    Image: docImg,
  },
  {
    name: "Dr. Gourish Karande",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, DNB (Family Medicine), PGDGM",
    experience: "15",
    Image: docImg,
  },
  {
    name: "Dr. Gourish Karande",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, DNB (Family Medicine), PGDGM",
    experience: "15",
    Image: docImg,
  },
  {
    name: "Dr. Gourish Karande",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, DNB (Family Medicine), PGDGM",
    experience: "15",
    Image: docImg,
  },
  {
    name: "Dr. Gourish Karande",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, DNB (Family Medicine), PGDGM",
    experience: "15",
    Image: docImg,
  },
  {
    name: "Dr. Gourish Karande",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, DNB (Family Medicine), PGDGM",
    experience: "15",
    Image: docImg,
  },
  {
    name: "Dr. Gourish Karande",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, DNB (Family Medicine), PGDGM",
    experience: "15",
    Image: docImg,
  },
  {
    name: "Dr. Gourish Karande",
    specialist: "Family Physician & Diabetologist",
    degree: "MBBS, DNB (Family Medicine), PGDGM",
    experience: "15",
    Image: docImg,
  },
];
export default function DoctorPage() {
  return (
    <div className="container mt-5 pt-5">
      <div className="d-flex flex-column">
        <span className="specialistText"> General Physician</span>
        <img src={seperator} alt="separator" className="img-fluid col-1" />
        <div className="d-flex flex-wrap justify-content-between mb-5">
          {doctor.map((x, i) => {
            return (
              <div className="mx-2">
                <Specialist
                  name={x.name}
                  imglogo={x.Image}
                  degree={x.degree}
                  specialist={x.specialist}
                  experience={x.experience}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
