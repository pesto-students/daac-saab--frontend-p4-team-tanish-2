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
import {
  app,
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
} from "../../context/Firebase";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./css/Register.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const[dummyEmail,setDummyEmail]=useState("pestoproject@gmail.com");
  const[dummyPassword,setDummyPassword]=useState("abcd1234");

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  return (
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
          <MDBCard className="my-5 w-80 input-login">
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

              <div className="d-flex justify-content-center mb-2">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Login with test Credentials"
                  onClick={()=>{
                    setEmail(dummyEmail)
                    setPassword(dummyPassword)
                      }}
                />
              </div>

              <MDBBtn
                onClick={() => {
                  logInWithEmailAndPassword(email, password)
                }}
                className="w-100 mb-4"
                size="md"
              >
                Login
              </MDBBtn>

              <div className="text-center">
                <button
                  className="Google-btn-login p-2"
                  onClick={signInWithGoogle}
                >
                  <GoogleIcon /> Login with Google
                </button>
                <div className="mt-3 mb-3 text-primary">
                  <Link to="/reset">Forgot Password ?</Link>
                </div>
                <div className="mt-2">
                  <span>New user? &nbsp;</span>
                  <span
                    className="register-here"
                    onClick={() => navigate("/Sign-Up")}
                  >
                    Register here
                  </span>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default SignIn;
