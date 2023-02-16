import React from 'react';
import logo from "./assets/NewIcon.png";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';

import "./components/Register/css/Register.css"
function App() {
  return (
    <MDBContainer className="my-5 w-50">

      <MDBCard className="mt-5" >
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGhlYWx0aGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Daac Saab</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

                <MDBBtn className="w-100 mb-4" size="md">
                Login
              </MDBBtn>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <br />
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#1d4ed8'}}>Register here</a></p>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;