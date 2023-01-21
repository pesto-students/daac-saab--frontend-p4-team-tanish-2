import React, { useEffect } from "react";
import "../css/Specialist.css";
import chevron from "../../../assets/chevron-right.svg";
import { useNavigate, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../../../Backend";
import Avatar from "react-avatar";
import { isMobile } from "react-device-detect";




const Specialist = (props) => {


  const [doctors, setDoctors] = useState([]);
  const [payNow, setPayNow] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  //Stripe code begins
let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MNhagSHk6cCnpybxcnVe0oHwpiPaKueLb7Yk7vCg8ngb9hNp40eoTNCQEupFKkr0eRqCC8ZULwzrDTf3mQWDfEE00WnVfEX3n"
    );
  }
  return stripePromise;
};

const [stripeError, setStripeError] = useState(null);
const [isLoading, setLoading] = useState(false);
const item = {
  price: "price_1MSOFKSHk6cCnpybQYVttY0M",
  quantity: 1,
};

const checkoutOptions = {
  lineItems: [item],
  mode: "payment",
  successUrl: `${window.location.origin}/success`,
  cancelUrl: `${window.location.origin}/cancel`,
};

 const redirectToCheckout = async () => {
  setLoading(true);
  console.log("redirectToCheckout");

  const stripe = await getStripe();
  const { error } = await stripe.redirectToCheckout(checkoutOptions);
  console.log("Stripe checkout error", error);

  if (error) setStripeError(error.message);
  setLoading(false);
};

if (stripeError) alert(stripeError);


  const getDoctorBySpecility = async () => {
    await axios
      .get(`${backendUrl}/doctorSpecialist/${params.id} `)
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  useEffect(() => {
    getDoctorBySpecility();
  }, []);
  return (
    <>
    
      {doctors.map((x, i) => {
        return (
          <div
            key={i}
            className={`col-3 px-1 ${
              isMobile
                ? "col-12"
                : "specialist-card d-flex align-items-center mt-5 me-2"
            }`}
            onClick={() => navigate(`${x?._id}`)}
            onMouseLeave={() => {
              setPayNow("");
            }}
          >
            <Avatar
              name={x?.name.slice(3)}
              round={true}
              textSizeRatio={1.25}
              className="Avatar-img"
              size="90"
              
            />
            <div
              className="d-flex flex-column mx-2"
              onMouseEnter={() => setPayNow(x?._id)}
            >
              <span className="docText mb-1">{x?.name}</span>
              <span className="docSpecialist mb-1 ">{x?.specialist}</span>
              <span className="docDegreeText mb-1 text-line-truncate">
                {x?.degree}
              </span>
              <span className="docDegreeText mb-1">{`${x?.experience} years of experience`}</span>
            </div>
            <img src={chevron} alt="chevron" className="img-fluid ms-auto" />
            {payNow === x?._id && (
              <div
                className="position-absolute pay-now-div col-12 text--center ps-4 py-2"
                onClick={(e) => {
                  e.stopPropagation();
                  redirectToCheckout();
                }}
              >
                <span className="ms-5 text-align-center ">Book a consultation</span>
              </div>
            )}
          </div>
        );
      })}
      
    </>
  );
};

export default Specialist;
