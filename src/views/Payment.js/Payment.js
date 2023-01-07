import React from 'react'
import axios from "axios";
import "./Payment.css";
const Payment = () => {

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = document.body.appendChild(script);
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            // document.body.appendChild(script);
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

    // creating a new order
    const result = await axios.post("http://localhost:5000/payment/orders");

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
        key: 'pE8AGAhhnwYvJy1gnLId1PJI', // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Soumya Corp.",
        description: "Test Transaction",
        // image: { logo },
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await axios.post("payment/success", data);

            alert(result.data.msg);
        },
        prefill: {
            name: "Gantavya Saraswat",
            email: "gantavya99@gmail.com",
            contact: "9999999999",
        },
        notes: {
            address: "DaacSaab Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}
  return (
    <div>

<button className="pay-button m-5 btn-primary" onClick={displayRazorpay}>
                    Pay ₹500
                </button>
    </div>
  )
}

export default Payment