import React from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../context/Firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./css/Register.css";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then(() => {
      navigate("/");
    });
  };

  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
        alert("Logged in successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <MDBContainer fluid className="p-4">
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            Login to experience <br />
            <span style={{ color: "#025f4c" }}>healthcare at its best</span>
          </h1>

          <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard className="my-5 w-50 input-login">
            <MDBCardBody className="p-5">
              {/* <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
            </MDBCol>
          </MDBRow> */}

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form1"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Login with test Credentials"
                />
              </div>

              <MDBBtn onClick={signInUser} className="w-100 mb-4" size="md">
                Login
              </MDBBtn>

              <div className="text-center">
                <p>or sign up with:</p>

                <button className="Google-btn-login p-2" onClick={signInWithGoogle}>
                  <GoogleIcon /> Login with Google
                </button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignIn;
