import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
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
import { app,auth,signInWithGoogle,registerWithEmailAndPassword } from "../../../context/Firebase";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Register.css";

// const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
//Functional Component begins here

const RegisterPage = () => {
  //hooks
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  console.log(name);
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <>
      <MDBContainer
        fluid
        className="p-4"
        style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
      >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="my-5 display-3 fw-bold ls-tight px-3">
              The best Healthcare <br />
              <span style={{ color: "#025f4c" }}>platform around you</span>
            </h1>

            <p className="px-3" style={{ color: "hsl(217, 10%, 50.8%)" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>
          </MDBCol>
          <MDBCol md="6">
            <MDBCard className="my-5 w-75 input-login">
              <MDBCardBody className="p-5">
                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                    value={name}
                      onChange={(e) => setName(e.target.value)}
                      wrapperClass="mb-4"
                      label="Enter your Full Name"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>
                </MDBRow>

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
                    label="I agree to the terms of service and Privacy Policy"
                  />
                </div>

                <MDBBtn onClick={register} className="w-100 mb-4" size="md">
                  Sign up
                </MDBBtn>
                <Toaster
                  toastOptions={{
                    // Define default options
                    className: "",
                    duration: 3000,
                  }}
                />
                <div className="text-center">
                  <p>or sign up with:</p>

                  <button className="Google-btn p-2" onClick={signInWithGoogle}>
                    <GoogleIcon /> Sign up with Google
                  </button>
                  <div className="mt-3">
                    <span>Already have account? &nbsp;</span>
                    <span
                      className="register-here"
                      onClick={() => navigate("/Sign-In")}
                    >
                      Click here
                    </span>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};
export default RegisterPage;
