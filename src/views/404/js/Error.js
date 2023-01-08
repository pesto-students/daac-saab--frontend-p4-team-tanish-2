import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../../../assets/giphy.gif";
import axios from "axios";
import logo from "../../../assets/logo192.png";

export default function Error() {
  const navigate = useNavigate();
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post("http://localhost:5001/payment");

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_Y9YH8F8lRERGsD", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",
      image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "http://localhost:5001/payment/success",
          data
        );

        alert(result.data.msg);
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="align-items-center container d-flex flex-column justify-content-around my-5 py-5 ">
      <img src={error} alt="error" className="img-fluid" />
      <button className="btn btn-secondary" onClick={() => navigate("/")}>
        Go To Home
      </button>

      <div className="my-5 py-5">
        <header className="App-header">
          <p>Buy React now!</p>
          <button className="App-link" onClick={displayRazorpay}>
            Pay ₹500
          </button>
        </header>
      </div>
    </div>
  );
}
