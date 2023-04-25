import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../css/LoginPage.css";
import { useSelector, useDispatch } from "react-redux";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "axios";
import { backendUrl } from "../../../Backend";
import { closeModal } from "../../../Store/Slice/LoginSlice";

export default function LoginPage(props) {
  const [reqDoc, setReqDoc] = useState({
    name: "",
    phone: "",
  });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    borderRadius: "30px",
  };
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.login.value);
  const close = useSelector((state) => state.login.value);
  const getRequest = async () => {
    await axios.post(`${backendUrl}/request`, reqDoc).then((res) => {
      setReqDoc({
        name: "",
        phone: "",
      });
      dispatch(closeModal());
    });
  };
  return (
    <>
      <div className="bootstrap-iso requestInput">
        <Modal
          open={showModal}
          onClose={close}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="requestInput">
            <div className="d-flex justify-content-between">
              <span className="text--center">Request a callback ?</span>{" "}
              <span
                className="cancelIcon cursor-pointer"
                onClick={() => dispatch(closeModal())}
              >
                X
              </span>
            </div>
            <input
              placeholder="Enter your Name"
              className="mt-5 "
              value={reqDoc.name}
              onChange={(e) =>
                setReqDoc({
                  ...reqDoc,
                  name: e.target.value,
                })
              }
            />
            <input
              placeholder="Enter your Mobile Number"
              className="my-5 "
              value={reqDoc.phone}
              onChange={(e) =>
                setReqDoc({
                  ...reqDoc,
                  phone: e.target.value,
                })
              }
            />
            <button
              className="btn btn-secondary no-wrap"
              onClick={() => getRequest()}
            >
              Get a callback
            </button>
          </Box>
        </Modal>
      </div>
    </>
  );
}
