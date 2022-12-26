import React, { useState } from "react";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import GoogleIcon from "@mui/icons-material/Google";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../css/LoginPage.css";
import { useSelector, useDispatch } from "react-redux";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import Visibility from "@mui/icons-material/Visibility";

export default function LoginPage(props) {
  //const [showModal, setShowModal] = useState(props.showModal);
  const [isRegisterClicked, setIsRegisterClicked] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);
  //   const [forgotPasswordEmail, setForgotPasswordEmail] = useState(false);

  const showModal = useSelector((state) => state.login.value);
  console.log(showModal, "show");
  return (
    <>
      {showModal && (
        <div
          className="position-absolute"
          style={{ top: "317px", bottom: "0", left: "829px", right: "0" }}
        >
          <h1>hello modal</h1>
        </div>
      )}
    </>
  );
}
