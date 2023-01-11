import React, { useEffect, useState } from "react";
import "../css/DoctorPage.css";
import seperator from "../../../assets/seperator.svg";
import Specialist from "../../../components/Specialist/js/Specialist";
import docImg from "../../../assets/docImg.svg";
import docImgFemale from "../../../assets/docFemale.svg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../../../Backend";

export default function DoctorPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [doctors, setDocotors] = useState([]);

  const getDoctor = async () => {
    await axios
      .get(`${backendUrl}/getDoctor`)
      .then((response) => {
        setDocotors(response.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };
  useEffect(() => {
    getDoctor();
  }, []);
  return (
    <div className="container mt-5 pt-5">
      <div className="d-flex flex-column">
        <span className="specialistText"> {params?.id}</span>
        <img src={seperator} alt="separator" className="img-fluid col-1" />
      </div>

      <div className="d-flex justify-content-between flex-wrap mb-5">
        {doctors.slice(0, 25)?.map((x, i) => {
          return (
            <div
              className="col-4"
              onClick={() => navigate(`/Specialist/${params?.id}/${x._id}`)}
            >
              <Specialist
                id={x?._id}
                name={x?.name}
                imglogo={x?.image}
                degree={x?.degree}
                specialist={x?.specialist}
                experience={x?.exprience}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
