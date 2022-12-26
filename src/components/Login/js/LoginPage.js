import React, { useState } from "react";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import GoogleIcon from "@mui/icons-material/Google";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../css/LoginPage.css";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import Visibility from "@mui/icons-material/Visibility";

export default function LoginPage(props) {
  const [showModal, setShowModal] = useState(props.showModal);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);
  //   const [forgotPasswordEmail, setForgotPasswordEmail] = useState(false);
  return (
    <>
      {showModal && (
        <div
        // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        // className="loginPopup"
        // onClose={props.setShowLogin}
        // open={props.showLogin}
        // closeAfterTransition
        // BackdropProps={{
        //   timeout: 500,
        // }}
        // keepMounted
        // onClick={(event) => event.stopPropagation()}
        // onMouseDown={(event) => event.stopPropagation()}
        >
          <div in={props.showLogin} className="modal">
            <div className="mainFrame">
              <div className="position-relative">
                <>
                  {isLoginPage ? (
                    <div className="m-4">
                      <h5 className="reset-password-header mt-4">
                        <b>Login to your account</b>
                      </h5>
                      <div className="mt-4">
                        <span style={{ color: "#A5A6AA", fontWeight: 400 }}>
                          Continue with
                        </span>
                      </div>
                      <div className="btn-rows ">
                        <div className="login-icon " style={{ margin: "10px" }}>
                          <button
                            onClick={() => {
                              setIsLoginClicked(true);
                              setIsLoginPage(false);
                            }}
                            className="button mr-1"
                          >
                            {/* <MailOutlineIcon /> */}
                          </button>
                        </div>
                        <div style={{ margin: "10px" }}>
                          <button onClick={""} className="button">
                            {/* <GoogleIcon /> */}
                          </button>
                        </div>
                      </div>
                      <div
                        className="btn-rows"
                        style={{ alignItems: "center" }}
                      >
                        <div className="border1"></div>
                        <div
                          style={{
                            color: "#D8D8D8",
                            display: "inline",
                            fontSize: "14px",
                            margin: "0 3px",
                            verticalAlign: "text-bottom",
                          }}
                        >
                          <span>OR</span>
                        </div>
                        <div className="border1"></div>
                      </div>
                      <div className="mt-4 text-center">
                        <span>Don’t have account?</span>
                      </div>
                      <div style={{ textAlign: "center" }} className="mt-4">
                        <button
                          className="register-btn"
                          onClick={() => {
                            setIsRegisterClicked(true);
                            setIsLoginPage(false);
                          }}
                        >
                          <span>
                            Register Now
                            {/* <img
                              src={blackArrowSvg}
                              alt="arrow"
                              loading="lazy"
                            /> */}
                          </span>
                        </button>
                      </div>
                    </div>
                  ) : null}
                  {isRegisterClicked ? (
                    <div className="m-4 mt-4">
                      <h5 className="reset-password-header">Register Now</h5>

                      <div className="mt-3">
                        <span className="text">Name</span>

                        <div className="input">
                          <input
                            className="w-100"
                            placeholder="Your Name"
                            value={"newUserName"}
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="text">Email id</span>

                        <div className="input">
                          <input
                            className="w-100"
                            placeholder="Your email id"
                            value={"newUserEmail"}
                          />
                        </div>
                      </div>

                      <div className="mt-2">
                        <span className="text">Set Password</span>
                        <div>
                          <div className="input">
                            <input
                              className="w-100"
                              type={showPassword ? "text" : "password"}
                              onChange={(event) => {}}
                              value={"newUserPassword"}
                              placeholder="Set your password"
                              // endAdornment={
                              //   <InputAdornment position="end">
                              //     <IconButton className="no-hover">
                              //       {showPassword ? (
                              //         <VisibilityIcon className="visibilityIcon" />
                              //       ) : (
                              //         <VisibilityOffIcon
                              //           onClick={() => {
                              //             setShowPassword(true);
                              //           }}
                              //         />
                              //       )}
                              //     </IconButton>
                              //   </InputAdornment>
                              // }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="text">Confirm Password</span>
                        <div>
                          <div className="input">
                            <input
                              className="w-100"
                              type={showConfirmPassword ? "text" : "password"}
                              onChange={(event) => {}}
                              value={"newUserConfirmPassword"}
                              placeholder="Confirm your password"
                              // endAdornment={
                              //   <InputAdornment position="end">
                              //     <IconButton
                              //       onClick={() => {
                              //         setShowConfirmPassword(
                              //           !showConfirmPassword
                              //         );
                              //       }}
                              //       className="no-hover"
                              //     >
                              //       {showConfirmPassword ? (
                              //         <VisibilityIcon className="visibilityIcon" />
                              //       ) : (
                              //         <VisibilityOffIcon />
                              //       )}
                              //     </IconButton>
                              //   </InputAdornment>
                              // }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <button
                          className="register-now"
                          onClick={"handleSignupSubmit"}
                        >
                          <span>Register</span>
                        </button>
                      </div>
                      <div style={{ textAlign: "center" }} className="mt-2">
                        <span style={{ fontSize: "13px" }}>
                          Already have an Account?{" "}
                        </span>

                        <span
                          className="cursor-pointer"
                          style={{ fontWeight: "600", fontSize: "14px" }}
                          onClick={() => {
                            setIsLoginPage(true);
                            setIsRegisterClicked(false);
                          }}
                        >
                          Login Now
                        </span>
                      </div>
                      <div
                        style={{ fontSize: "13px", lineHeight: "initial" }}
                        className="register-btn-container mt-1"
                      >
                        <span>By joining MachineHack, you agree to our </span>
                        <span>Terms of Service</span>
                        <span> and </span>
                        <span href="">Privacy Policy</span>
                      </div>
                    </div>
                  ) : null}
                  {isLoginClicked ? (
                    <div className="m-4">
                      <h5 className="reset-password-header mt-4">
                        Login with email
                      </h5>

                      <div className="mt-4">
                        <div>
                          <span className="text">Email id</span>
                        </div>
                        <div className={`${"input"}`}>
                          <input
                            className="w-100"
                            value={"loginEmail"}
                            placeholder="Your email id"
                            onChange={(event) => {}}
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="password-lable">
                          <div className="text">Password</div>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              setIsForgotPasswordClicked(true);
                              setIsLoginPage(false);
                              setIsLoginClicked(false);
                              // setForgotPasswordEmail(false);
                            }}
                          >
                            Forgot Password?
                          </span>
                        </div>
                        <div className="password-input">
                          <div className={`${"input"}`}>
                            <input
                              className="w-100"
                              type={showPassword ? "text" : "password"}
                              onChange={(event) => {}}
                              value={"loginPassword"}
                              placeholder="Password"
                              // endAdornment={
                              //   <InputAdornment position="end">
                              //     <IconButton className="no-hover">
                              //       {showPassword ? (
                              //         <VisibilityIcon className="visibilityIcon" />
                              //       ) : (
                              //         <VisibilityOff />
                              //       )}
                              //     </IconButton>
                              //   </InputAdornment>
                              // }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="register-btn-container mt-5">
                        <button className="login-btn ">
                          <span>Login</span>
                        </button>
                      </div>
                      <div className="mt-5 register-btn-container">
                        <span>Don’t have an account? </span>
                        <span
                          className="cursor-pointer"
                          onClick={() => {
                            setIsRegisterClicked(true);
                            setIsLoginPage(false);
                            setIsLoginClicked(false);
                            setIsForgotPasswordClicked(false);
                            //setForgotPasswordEmail(false);
                          }}
                        >
                          <b>Register Now</b>
                        </span>
                      </div>
                      <div
                        style={{ fontSize: "13px", lineHeight: "initial" }}
                        className="register-btn-container mt-2"
                      >
                        <span>By joining Daac saab, you agree to our </span>
                        <span>Terms of Service</span>
                        <span> and </span>
                        <span>Privacy Policy</span>
                      </div>
                    </div>
                  ) : null}
                  {/* {isForgotPasswordClicked ? (
                  <>
                    <div className="reset-password-container">
                      <h5 className="reset-password-header mt-4">
                        Reset Password
                      </h5>
                      <div className="mt-4">
                        We’ll send a reset link to your registered email
                      </div>
                      <div className="email-input mt-4">
                        <span className="text">Email id</span>

                        <div className={`${"input"}`}>
                          <Input
                            className="w-100"
                            placeholder="Your email id"
                            value={"forgotPasswordEmail"}
                            onChange={(event) => {}}
                          />
                        </div>
                      </div>
                      <div className="mt-5">
                        <button className="reset-password-btn">
                          <span>Reset Password</span>
                        </button>
                      </div>
                      <div className="mt-4">
                        <span className="text">Already have an account? </span>

                        <b className="" style={{ fontWeight: 600 }}>
                          Login Now
                        </b>
                      </div>
                    </div>
                  </>
                ) : null} */}
                </>

                {isForgotPasswordClicked && (
                  <div className="m-4">
                    <h5 className="reset-password-header mt-4">
                      Login with email
                    </h5>
                    <div className="mt-2">
                      <p
                        style={{
                          fontSize: "12px",
                          fontWeight: "lighter",
                          lineHeight: "initial",
                        }}
                      >
                        Your new password must be different from previous used
                        passwords.
                      </p>
                    </div>

                    <div className="mt-4">
                      <div>
                        <span className="text">New Password</span>
                      </div>
                      <div className={`${"input"}`}>
                        <input
                          className="w-100"
                          type={showPassword ? "text" : "password"}
                          value={"resetPassword"}
                          placeholder="Create a strong password"
                          // endAdornment={
                          //   <InputAdornment position="end">
                          //     <IconButton className="no-hover">
                          //       {showPassword ? (
                          //         <Visibility className="visibilityIcon" />
                          //       ) : (
                          //         <VisibilityOffIcon />
                          //       )}
                          //     </IconButton>
                          //   </InputAdornment>
                          // }
                        />
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="password-lable">
                        <div className="text">Confirm Password</div>
                      </div>
                      <div className="password-input">
                        <div className={`${"input"}`}>
                          <input
                            className="w-100"
                            type={showConfirmPassword ? "text" : "password"}
                            value={"resetConfirmPassword"}
                            placeholder="Confirm Password"
                            //   endAdornment={
                            //     <InputAdornment position="end">
                            //       <IconButton
                            //         className="no-hover"
                            //         onClick={() => {
                            //           setShowConfirmPassword(!showConfirmPassword);
                            //         }}
                            //       >
                            //         {showConfirmPassword ? (
                            //           <Visibility className="visibilityIcon" />
                            //         ) : (
                            //           <VisibilityOff />
                            //         )}
                            //       </IconButton>
                            //     </InputAdornment>
                            //   }
                          />
                        </div>
                      </div>
                    </div>

                    <div className="register-btn-container mt-5 mb-5">
                      <button className="login-btn ">
                        <span>Reset Now</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
