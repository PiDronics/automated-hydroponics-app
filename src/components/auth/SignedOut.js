import React from "react";
import {MDBMask,MDBRow, MDBCol, MDBIcon, MDBBtn, MDBView, MDBContainer } from "mdbreact";
import video_hydroponics from './hydroponics.mp4';
import "./landingpage.css";

class SignedOut extends React.Component {
state = {
collapseID: ""
};

toggleCollapse = collapseID => () =>
this.setState(prevState => ({
collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
return ( 
<div id="videobackground" >
  <MDBView>
    <video className="video-intro" poster="https://talkinghydroponics.files.wordpress.com/2017/05/hydroponic-lettuce-grow-1080.jpg" playsInline
      autoPlay muted loop>
      <source src={video_hydroponics} type="video/mp4" />
    </video>
    <MDBMask className="d-flex justify-content-center align-items-center gradient">
      <MDBContainer className="px-md-3 px-sm-0">
        <MDBRow>
          <MDBCol md="12" className="mb-4 white-text text-center">
            <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
              PiDronics Monitoring System{" "}
            </h3>
            <hr className="hr-light my-4 w-75" />
            <h4 className="subtext-header mt-2 mb-4">
                Manage complicated hydroponic farms with ease!
            </h4>
            <MDBBtn outline rounded color="white" href="/about">
              <MDBIcon icon="pagelines" /> Learn More
            </MDBBtn >
            <MDBBtn outline rounded color="white" href="/register">
                <MDBIcon icon="home" />  Register
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBMask>
  </MDBView>
</div>
);
}
}

export default SignedOut;