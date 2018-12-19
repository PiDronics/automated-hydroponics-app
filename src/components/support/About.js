// import React  from "react";
// import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

// const TestimonialsMultiPage = () => {
//   return (
//     <MDBContainer>
//       <section className="text-center my-5">
//         <h2 className="h1-responsive font-weight-bold my-5">
//           Meet Our Team
//         </h2>
//         <MDBCarousel
//           activeItem={1}
//           length={3}
//           slide={true}
//           showControls={true}
//           multiItem
          
//         >
//           <MDBCarouselInner>
//             {/* <MDBRow> */}
//               {/* <MDBCarouselItem itemId="1"> */}
//               <MDBRow>
//                 <MDBCol md="4">
//                 <MDBCarouselItem itemId="1">
//                     <img
//                         src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
//                         alt=""
//                         className="rounded-circle img-fluid"
//                       />
//                     <h4 className="font-weight-bold mt-4">Anna Deynah</h4>
//                     <h6 className="blue-text font-weight-bold my-3">
//                       Web Designer
//                     </h6>
//                     <p className="font-weight-normal">
//                       <MDBIcon icon="quote-left" className="pr-2" />
//                       Lorem ipsum dolor sit amet, consectetur adipisicing
//                       elit. Quod eos id officiis hic tenetur.
//                     </p>
//                     <div className="grey-text">
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star-half-full" />
//                     </div>
//                   </MDBCarouselItem>
//                 </MDBCol>
//                 <MDBCol md="4" className="d-md-block">
//                 <MDBCarouselItem itemId="4">
                    
//                       <img
//                         src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
//                         alt=""
//                         className="rounded-circle img-fluid"
//                       />
                   
//                     <h4 className="font-weight-bold mt-4">John Doe</h4>
//                     <h6 className="blue-text font-weight-bold my-3">
//                       Web Developer
//                     </h6>
//                     <p className="font-weight-normal">
//                       <MDBIcon icon="quote-left" className="pr-2" />
//                       Ut enim ad minima veniam, quis nostrum exercitationem
//                       ullam corporis laboriosam.
//                     </p>
//                     <div className="grey-text">
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                     </div>
//                     </MDBCarouselItem>
//                 </MDBCol>
//                 </MDBRow>
//                 {/*
//                 <MDBCol md="4" className="clearfix d-none d-md-block">
                  
                   
//                       <img
//                         src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg"
//                         alt=""
//                         className="rounded-circle img-fluid"
//                       />
                   
//                     <h4 className="font-weight-bold mt-4">Abbey Clark</h4>
//                     <h6 className="blue-text font-weight-bold my-3">
//                       Photographer
//                     </h6>
//                     <p className="font-weight-normal">
//                       <MDBIcon icon="quote-left" className="pr-2" />
//                       Quis autem vel eum iure reprehenderit qui in ea
//                       voluptate velit esse quam nihil molestiae.
//                     </p>
//                     <div className="grey-text">
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star-o" />
//                     </div>
                  
//                 </MDBCol> */}
//               {/* </MDBCarouselItem> */}
//               <MDBCarouselItem itemId="2">
//                 <MDBCol md="4">
                 
                   
//                       <img
//                         src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg"
//                         alt=""
//                         className="rounded-circle img-fluid"
//                       />
                   
//                     <h4 className="font-weight-bold mt-4">Blake Dabney</h4>
//                     <h6 className="blue-text font-weight-bold my-3">
//                       Web Designer
//                     </h6>
//                     <p className="font-weight-normal">
//                       <MDBIcon icon="quote-left" className="pr-2" />
//                       Ut enim ad minima veniam, quis nostrum exercitationem
//                       ullam corporis laboriosam.
//                     </p>
//                     <div className="grey-text">
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star-half-full" />
//                     </div>
                  
//                 </MDBCol>
//                 {/* <MDBCol md="4" className="clearfix d-none d-md-block">
                 
                   
//                       <img
//                         src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg"
//                         alt=""
//                         className="rounded-circle img-fluid"
//                       />
                    
//                     <h4 className="font-weight-bold mt-4">Andrea Clay</h4>
//                     <h6 className="blue-text font-weight-bold my-3">
//                       Front-end developer
//                     </h6>
//                     <p className="font-weight-normal">
//                       <MDBIcon icon="quote-left" className="pr-2" />
//                       Lorem ipsum dolor sit amet, consectetur adipisicing
//                       elit. Quod eos id officiis hic tenetur quae.
//                     </p>
//                     <div className="grey-text">
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                     </div>
                  
//                 </MDBCol>
//                 <MDBCol md="4" className="clearfix d-none d-md-block">
                 
                   
//                       <img
//                         src="https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg"
//                         alt=""
//                         className="rounded-circle img-fluid"
//                       />
                   
//                     <h4 className="font-weight-bold mt-4">Cami Gosse</h4>
//                     <h6 className="blue-text font-weight-bold my-3">
//                       Phtographer
//                     </h6>
//                     <p className="font-weight-normal">
//                       <MDBIcon icon="quote-left" className="pr-2" />
//                       At vero eos et accusamus et iusto odio dignissimos
//                       ducimus qui blanditiis praesentium.
//                     </p>
//                     <div className="grey-text">
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star-o" />
//                     </div>
                  
//                 </MDBCol> */}
//               </MDBCarouselItem>
//               <MDBCarouselItem itemId="3">
//                 <MDBCol md="4">
                
                   
//                       <img
//                         src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
//                         alt=""
//                         className="rounded-circle img-fluid"
//                       />
                    
//                     <h4 className="font-weight-bold mt-4">Bobby Haley</h4>
//                     <h6 className="blue-text font-weight-bold my-3">
//                       Web Developer
//                     </h6>
//                     <p className="font-weight-normal">
//                       <MDBIcon icon="quote-left" className="pr-2" />
//                       Lorem ipsum dolor sit amet, consectetur adipisicing
//                       elit. Quod eos id officiis hic tenetur quae.
//                     </p>
//                     <div className="grey-text">
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                     </div>
                  
//                 </MDBCol>
//                 {/* <MDBCol md="4" className="clearfix d-none d-md-block">
                 
                   
//                       <img
//                         src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
//                         alt=""
//                         className="rounded-circle img-fluid"
//                       />
                    
//                     <h4 className="font-weight-bold mt-4">Elisa Janson</h4>
//                     <h6 className="blue-text font-weight-bold my-3">
//                       Marketer
//                     </h6>
//                     <p className="font-weight-normal">
//                       <MDBIcon icon="quote-left" className="pr-2" />
//                       At vero eos et accusamus et iusto odio dignissimos
//                       ducimus qui blanditiis praesentium.
//                     </p>
//                     <div className="grey-text">
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star-half-full" />
//                     </div>
                 
//                 </MDBCol>
//                 <MDBCol md="4" className="clearfix d-none d-md-block">
                  
                    
//                       <img
//                         src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
//                         alt=""
//                         className="rounded-circle img-fluid"
//                       />
                    
//                     <h4 className="font-weight-bold mt-4">Rob Jacobs</h4>
//                     <h6 className="blue-text font-weight-bold my-3">
//                       Front-end developer
//                     </h6>
//                     <p className="font-weight-normal">
//                       <MDBIcon icon="quote-left" className="pr-2" />
//                       Ut enim ad minima veniam, quis nostrum exercitationem
//                       ullam corporis laboriosam.
//                     </p>
//                     <div className="grey-text">
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star" />
//                       <MDBIcon icon="star-o" />
//                     </div>
                 
//                 </MDBCol> */}
//               </MDBCarouselItem>
//             {/* </MDBRow> */}
//           </MDBCarouselInner>
//         </MDBCarousel>
//       </section>
//     </MDBContainer>
//   );
// }

// export default TestimonialsMultiPage;

import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

const TeamPage = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our amazing team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
              <p className="text-uppercase blue-text">Graphic designer</p>
              <p className="grey-text">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon icon="facebook" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon icon="twitter" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon icon="instagram" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
              <p className="text-uppercase blue-text">Web Developer</p>
              <p className="grey-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                ipsa accusantium doloremque rem laudantium totam aperiam.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon icon="facebook" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon icon="instagram" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
              <p className="text-uppercase blue-text">Photographer</p>
              <p className="grey-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim est fugiat nulla id eu laborum.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon icon="facebook" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon icon="instagram" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon icon="dribbble" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
              <p className="text-uppercase blue-text">Backend Developer</p>
              <p className="grey-text">
                Perspiciatis repellendus ad odit consequuntur, eveniet earum
                nisi qui consectetur totam officia voluptates perferendis
                voluptatibus aut.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon icon="facebook" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default TeamPage;

// import React from 'react';
// import { CardImage, Button, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup, MDBContainer } from "mdbreact";

// const PanelPage = props => {
// return (
// <MDBContainer>
  
//   <MDBCardGroup deck>
//     <MDBCard>
//     <CardImage
//             className="img-fluid"
//             src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
//             waves
//           />
//       <MDBCardBody>
//         <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
//         <MDBCardText>
//           This is a wider panel with supporting text below as a natural
//           lead-in to additional content. This content is a little bit
//           longer.
//         </MDBCardText>
//         <Button href="#">Button</Button>
//       </MDBCardBody>
//       <MDBCardFooter small muted>
//         Last updated 3 mins ago
//       </MDBCardFooter>
//     </MDBCard>
//     <MDBCard>
//     <CardImage
//             className="img-fluid"
//             src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
//             waves
//           />
//       <MDBCardBody>
//         <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
//         <MDBCardText>
//           This is a wider panel with supporting text below as a natural
//           lead-in to additional content. This content is a little bit
//           longer.
//         </MDBCardText>
//         <Button href="#">Button</Button>
//       </MDBCardBody>
//       <MDBCardFooter small muted>
//         Last updated 3 mins ago
//       </MDBCardFooter>
//     </MDBCard>
//     <MDBCard>
//     <CardImage
//             className="img-fluid"
//             src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
//             waves
//           />
//       <MDBCardBody>
//         <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
//         <MDBCardText>
//           This is a wider panel with supporting text below as a natural
//           lead-in to additional content. This content is a little bit
//           longer.
//         </MDBCardText>
//         <Button href="#">Button</Button>
//       </MDBCardBody>
//       <MDBCardFooter small muted>
//         Last updated 3 mins ago
//       </MDBCardFooter>
//     </MDBCard>
//     <MDBCard>
//     <CardImage
//             className="img-fluid"
//             src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
//             waves
//           />
//       <MDBCardBody>
//         <MDBCardTitle tag="h5">Panel title</MDBCardTitle>
//         <MDBCardText>
//           This is a wider panel with supporting text below as a natural
//           lead-in to additional content. This content is a little bit
//           longer.
//         </MDBCardText>
//         <Button href="#">Button</Button>
//       </MDBCardBody>
//       <MDBCardFooter small muted>
//         Last updated 3 mins ago
//       </MDBCardFooter>
//     </MDBCard>
//   </MDBCardGroup>
// </MDBContainer>
// );
// };

// export default PanelPage;

// import React, { Component } from 'react';
// import { MDBContainer, MDBRow, View, Carousel, CarouselInner, CarouselItem, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText,
// Button } from "mdbreact";
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
// import 'react-vertical-timeline-component/style.min.css';
// import { FaReact, FaThermometer, FaRobot, FaStar } from 'react-icons/fa';
// import { GoTasklist, GoRocket, GoAlert, GoTools } from "react-icons/go";

// const containerStyle = {
//   paddingRight: "0 !important", 
//   paddingLeft: "0 !important", 
//   marginRight: "auto !important", 
//   marginLeft: "auto !important",
//   maxWidth:"300% !important",
//   width: "1200%"
// };

// class timeline extends Component{
//   render(){
//     return (
  
//       <div className = "container-fluid p-0">
//         <div className = "unique-color">
//           <Carousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={true} multiItem>
//             <CarouselInner>
            
//                 <CarouselItem itemId="1">
//                 <Row>
//                   <Col md="6">
//                   <Card className="mb-2">
//                     <CardImage className="img-fluid" src="/img/t1.jpeg" />
//                     <CardBody>
//                       <CardTitle>Michael Ali - 814005475</CardTitle>
//                       <CardText>
//                           Designer, frontend/backend software engineer, hardware engineer.
//                       </CardText>
//                       <Button href="https://github.com/irontarkus95" target="_blank" rel="noopener noreferrer" color="primary">Button</Button>
//                     </CardBody>
//                   </Card>
//                   </Col>
//                   <Col md="6" className="clearfix ">
//                   <Card className="mb-2">
//                     <CardImage className="img-fluid" src="/img/t2.jpeg" />
//                     <CardBody>
//                       <CardTitle>Gabriela Sewdhan - 813001696</CardTitle>
//                       <CardText>
//                           Designer, frontend/backend software engineer, hardware engineer.
//                       </CardText>
//                       <Button target="_blank" href="https://github.com/princesszelda94" rel="noopener noreferrer" color="primary">Button</Button>
//                     </CardBody>
//                   </Card>
//                   </Col>
//                   </Row>
//                 </CarouselItem>
//                 <CarouselItem itemId="2">
//                 <Row>
//                   <Col md="6">
//                   <Card className="mb-2">
//                     <CardImage className="img-fluid" src="/img/kristan.jpg" />
//                     <CardBody>
//                       <CardTitle>Kristan Birbalsingh - 816003409</CardTitle>
//                       <CardText>
//                           Designer, frontend/backend software engineer.
//                       </CardText>
//                       <Button target="_blank" href="https://github.com/KCB4Rockstar" rel="noopener noreferrer" color="primary">Button</Button>
//                     </CardBody>
//                   </Card>
//                   </Col>
//                   <Col md="6" className="clearfix d-none d-md-block">
//                   <Card className="mb-2">
//                     <CardImage className="img-fluid" src="/img/qarun.jpg" />
//                     <CardBody>
//                       <CardTitle>Qarun Bissoondial - 816002009</CardTitle>
//                       <CardText>
//                           Designer, frontend/backend software engineer, business analyst/project manager, Software Testor.
//                       </CardText>
//                       <Button target="_blank" href="https://github.com/Qarun-Qadir-Bissoondial" rel="noopener noreferrer" color="primary">Button</Button>
//                     </CardBody>
//                   </Card>
//                   </Col>
//                   </Row>
//                 </CarouselItem>
            
//             </CarouselInner>
//           </Carousel>

//         </div>



//         <Container className = "w-100 p-0 m-0 mw-100 mt-0 px-0 mx-0 test container-fluid p-0 aqua-gradient" style={{paddingLeft: "-340px !important", paddingRight: "-430px !important", marginLeft: "32px !important", marginRight: "43px !important", width: "100%", backgroundColor: "blue"}}>
//         {/* <style>{'div.container mt-5, div.row mt-4 { background-color: #D3D3D3; padding-right: 0px !important; padding-left: 0 !important; margin-right: auto !important; margin-left: auto !important; width: 1200px; display: block !important; '}</style> */}
//         <VerticalTimeline>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date ="NOW 30/11/2018"
//             style={{ paddingLeft: '78px' }}
//             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
//             icon={<FaReact />}
//           >
//             <h3 className="vertical-timeline-element-title">What we have now</h3>
//             <h4 className="vertical-timeline-element-subtitle">Present</h4>
//             <ul class="list-unstyled">
//               <p>Fully authenticated front-end Web App</p>
//               <p>Multiple sensors can connect to a resilient Raspberry Pi server</p>
//               <p>Data can be pushed to Firebase in realtime</p>
//               <p>Sensor data visualization</p>
//               <p>End of the day summary report of sensor data</p>
//               <p>Notifies user if sensor values are too low/high</p>
//             </ul>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="30/12/2018"
//             style={{ paddingRight: '78px' }}
//             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//             icon={ <FaThermometer />}
//           >
//             <h3 className="vertical-timeline-element-title">EC and Dissolved Oxygen Probes Testing</h3>
//             <h4 className="vertical-timeline-element-subtitle">1 Month</h4>
//             <p>
//               <h6>Obtain EC and Dissolved Oxygen Probes</h6>
//               <h6>Ensure New probes work with our app</h6>
//               <h6>Test Monitoring system fully</h6>
//               <h6>Develop go-to-market strategy</h6>
//               <h6>Find promoters/affiliates</h6>
//               <h6>Launch initial mobile app as a monitoring system</h6>
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="28/02/2019"
//             style={{ paddingLeft: '78px' }}
//             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//             icon={<GoAlert />}
//           >
//             <h3 className="vertical-timeline-element-title">Plant Disease Diagnoser</h3>
//             <h4 className="vertical-timeline-element-subtitle">2 Month</h4>
           
//             <ul class="list-unstyled">
//             <p>Plant Disease Detecter and Diagnoser Developed</p>
//             <p>Upload Plant Disease Diagnoser to the cloud</p>
//             <p>Live camera feed viewable in app</p>
//             </ul>
          
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--work"
//             date="NOW 31/05/2019"
//             style={{ paddingRight: '78px' }}
//             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//             icon={<FaRobot />}
//           >
//             <h3 className="vertical-timeline-element-title">Hydroponics Automation System</h3>
//             <h4 className="vertical-timeline-element-subtitle">3 Month</h4>
//             <p>
//               <h5 class="h5-responsive">Hydroponics system will be automated to maintain a homeostatic environment</h5>
//               <h5 class="h5-responsive">This involves the use of sun lamps, misting, ventilation fans, arduino to release a controlled amount of the nutrient chemical for controlled EC and alkaline solution for pH.</h5>
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--education"
//             date="April 2013"
//             style={{ paddingLeft: '78px' }}
//             iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//             icon={<GoTasklist />}
//           >
//             <h3 className="vertical-timeline-element-title">Beta Test and Final Product</h3>
//             <h4 className="vertical-timeline-element-subtitle">1 Month</h4>
//             <p>
//               <h6>Beta test</h6>
//               <h6>Start building anticipation</h6>
//               <h6>Finalize launch content</h6>
//               <h6>Gather reviews from beta testers</h6>
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--education"
//             date="November 2012"
//             style={{ paddingRight: '78px' }}
//             iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//             icon={<GoRocket />}
//           >
//             <h3 className="vertical-timeline-element-title">Launch</h3>
//             <h4 className="vertical-timeline-element-subtitle">LAUNCH WEEK</h4>
//             <p>
//               <h6>Make launch a special event</h6>
//               <h6>Keep sharing on social media and email list</h6>
//               <h6>Continue contact with stakeholders</h6>
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             className="vertical-timeline-element--education"
//             date="2002 - 2006"
//             style={{ paddingLeft: '78px' }}
//             iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//             icon={<GoTools />}
//           >
//             <h3 className="vertical-timeline-element-title">Improving PiDronics</h3>
//             <h4 className="vertical-timeline-element-subtitle">AFTER LAUNCH</h4>
//             <p>
//             <h6>Celebrate :D</h6>
//               <h6>Follow up testimonials</h6>
//               <h6>Take feedback and make your product even better</h6>
//             </p>
//           </VerticalTimelineElement>
//           <VerticalTimelineElement
//             iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
//             icon={<FaStar />}
//           />
//         </VerticalTimeline>
//         </Container>
//       </div>
//     );
//   }
// }

// export default timeline;