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

// import React from "react";
// import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

// const TeamPage = () => {
//   return (
//     <MDBCard className="my-5 px-5 pb-5 text-center">
//         <MDBCardBody>
//           <h2 className="h1-responsive font-weight-bold my-5">
//             Our amazing team
//           </h2>
//           <p className="grey-text w-responsive mx-auto mb-5">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
//             error amet numquam iure provident voluptate esse quasi, veritatis
//             totam voluptas nostrum quisquam eum porro a pariatur veniam.
//           </p>
//           <MDBRow>
//             <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
//               <img
//                 src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
//                 className="rounded-circle z-depth-1 img-fluid"
//                 alt="Sample avatar"
//               />
//               <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
//               <p className="text-uppercase blue-text">Graphic designer</p>
//               <p className="grey-text">
//                 Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
//                 consectetur, adipisci sed quia non numquam modi tempora eius.
//               </p>
//               <ul className="list-unstyled mb-0">
//                 <a href="#!" className="p-2 fa-lg">
//                   <MDBIcon icon="facebook" className="blue-text" />
//                 </a>
//                 <a href="#!" className="p-2 fa-lg">
//                   <MDBIcon icon="twitter" className="blue-text" />
//                 </a>
//                 <a href="#!" className="p-2 fa-lg">
//                   <MDBIcon icon="instagram" className="blue-text" />
//                 </a>
//               </ul>
//             </MDBCol>

//             <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
//               <img
//                 src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
//                 className="rounded-circle z-depth-1 img-fluid"
//                 alt="Sample avatar"
//               />
//               <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
//               <p className="text-uppercase blue-text">Web Developer</p>
//               <p className="grey-text">
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                 ipsa accusantium doloremque rem laudantium totam aperiam.
//               </p>
//               <ul className="list-unstyled mb-0">
//                 <a href="#!" className="p-2 fa-lg">
//                   <MDBIcon icon="facebook" className="blue-text" />
//                 </a>
//                 <a href="#!" className="p-2 fa-lg">
//                   <MDBIcon icon="instagram" className="blue-text" />
//                 </a>
//               </ul>
//             </MDBCol>

//             <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
//               <img
//                 src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
//                 className="rounded-circle z-depth-1 img-fluid"
//                 alt="Sample avatar"
//               />
//               <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
//               <p className="text-uppercase blue-text">Photographer</p>
//               <p className="grey-text">
//                 Excepteur sint occaecat cupidatat non proident, sunt in culpa
//                 qui officia deserunt mollit anim est fugiat nulla id eu laborum.
//               </p>
//               <ul className="list-unstyled mb-0">
//                 <a href="#!" className="p-2 fa-lg">
//                   <MDBIcon icon="facebook" className="blue-text" />
//                 </a>
//                 <a href="#!" className="p-2 fa-lg">
//                   <MDBIcon icon="instagram" className="blue-text" />
//                 </a>
//                 <a href="#!" className="p-2 fa-lg">
//                   <MDBIcon icon="dribbble" className="blue-text" />
//                 </a>
//               </ul>
//             </MDBCol>

//             <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
//               <img
//                 src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
//                 className="rounded-circle z-depth-1 img-fluid"
//                 alt="Sample avatar"
//               />
//               <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
//               <p className="text-uppercase blue-text">Backend Developer</p>
//               <p className="grey-text">
//                 Perspiciatis repellendus ad odit consequuntur, eveniet earum
//                 nisi qui consectetur totam officia voluptates perferendis
//                 voluptatibus aut.
//               </p>
//               <ul className="list-unstyled mb-0">
//                 <a href="#!" className="p-2 fa-lg">
//                   <MDBIcon icon="facebook" className="blue-text" />
//                 </a>
//                 <a href="#!" className="p-2 fa-lg">
//                   <MDBIcon icon="github" className="blue-text" />
//                 </a>
//               </ul>
//             </MDBCol>
//           </MDBRow>
//         </MDBCardBody>
//       </MDBCard>
//   );
// }

// export default TeamPage;

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

import React, { Component } from 'react';
import { MDBBtn, MDBInput, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, Container } from "mdbreact";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact, FaThermometer, FaRobot, FaStar } from 'react-icons/fa';
import { GoTasklist, GoRocket, GoAlert, GoTools } from "react-icons/go";

// const containerStyle = {
//   paddingRight: "0 !important", 
//   paddingLeft: "0 !important", 
//   marginRight: "auto !important", 
//   marginLeft: "auto !important",
//   maxWidth:"300% !important",
//   width: "1200%"
// };

class timeline extends Component{
  render(){
    return (

    <div className = "container-fluid">

    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold">
            Our Product - PiDronics
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Solving world hunger one step at a time.
          </p>
          <img
            src="/img/hydroponics2.jpg"
            className="z-depth-1 img-fluid"
            alt="Sample avatar"
          />
          <h5 className="font-weight-bold mt-4 mb-3">About our product</h5>
              <p className="text-uppercase blue-text">Neque porro quisquam est,</p>
              <p className="grey-text">
              The PiDronics system benefits people wishing to break into hydroponics with little to no prior knowledge and with a low cost of entry. It’s remote monitoring capability reduces risk by providing timely readings on their farm and notifies them if it has reached unsafe levels, compensating for a farmer’s poor education in the field while allowing them to divert their time on other tasks, such as marketing. In addition, we believe the PiDronics system is an important educational tool to introduce young people into the world of agriculture in an engaging environment, since it encapsulates the fields of agriculture, programming and the ever-popular Raspberry Pi. The PiDronics system integrates seamlessly with a hydroponics farm, and the modularity of the system allows various sensors to be integrated and viewable on the app.
              </p>
              <ul className="list-unstyled mb-0">
              <a href="https://github.com/PiDronics" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg">
                  See our Code <MDBIcon icon="github" className="blue-text" />
                </a>
              </ul>
        </MDBCardBody>
      </MDBCard>

    {/* <section className="my-100">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Why is PiDronics so great?
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        The PiDronics system benefits people wishing to break into hydroponics with little to no prior knowledge and with a low cost of entry. It’s remote monitoring capability reduces risk by providing timely readings on their farm and notifies them if it has reached unsafe levels, compensating for a farmer’s poor education in the field while allowing them to divert their time on other tasks, such as marketing. 
        </p>

        <MDBRow>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon
                  icon="flag-checkered"
                  size="2x"
                  className="light-blue-text"
                />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Monitor Your Farm</h5>
                <p className="grey-text">
                Monitor your farm from anywhere with ease. Get daily reports and visuals demonstrating a summary for the day about your farm.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-6">
              <MDBCol size="2">
                <MDBIcon icon="flask" size="2x" className="light-blue-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Experimental</h5>
                <p className="grey-text">
                The PiDronics system integrates seamlessly with a hydroponics farm, where the modular design allows sensors to be integrated easily and viewable on the app. It will notify the farmer if the values read from these sensors are outside safe level, compensating for their lack of experience.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="glass" size="2x" className="light-blue-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Humanitarian</h5>
                <p className="grey-text">
                PiDronics can be very impactful in a humanitarian setting, due to its low cost, easy scalability and portability, allowing hydroponics farms to be developed in affected countries, thus reducing transportation costs, and provide a high-yield food solution to those in need.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="4" className="text-name">
            <img
              className="img-fluid"
              src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png"
              alt=""
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="heart" size="2x" className="light-blue-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Educational</h5>
                <p className="grey-text">
                iDronics system is an important educational tool to introduce young people into the world of agriculture in an engaging environment, since it encapsulates the fields of agriculture, programming and the ever-popular Raspberry Pi. The PiDronics system integrates seamlessly with a hydroponics farm, and the modularity of the system allows various sensors to be integrated and viewable on the app.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="flash" size="2x" className="light-blue-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Scalable</h5>
                <p className="grey-text">
                  Can easily add any amount of systems and sensors and scale to any size of farm.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="2">
                <MDBIcon icon="magic" size="2x" className="light-blue-text" />
              </MDBCol>
              <MDBCol size="10">
                <h5 className="font-weight-bold mb-3">Magical</h5>
                <p className="grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reprehenderit maiores nam, aperiam minima assumenda deleniti
                  hic.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section> */}


      {/* About Us */}
        <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Meet the Team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="/img/t1.jpeg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Michael Ali</h5>
              <p className="text-uppercase blue-text">Software and Hardware Engineer</p>
              <p className="grey-text">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
              <ul className="list-unstyled mb-0">
              <a href="https://github.com/irontarkus95" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg">
                  <MDBIcon icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="/img/kristan.jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Kristan Birbalsingh</h5>
              <p className="text-uppercase blue-text">Software Developer and Designer</p>
              <p className="grey-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                ipsa accusantium doloremque rem laudantium totam aperiam.
              </p>
              <ul className="list-unstyled mb-0">
              <a href="https://github.com/KCB4Rockstar" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg">
                  <MDBIcon icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="/img/qarun.jpg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Qarun Bissoondial</h5>
              <p className="text-uppercase blue-text">Software Developer and Tester</p>
              <p className="grey-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim est fugiat nulla id eu laborum.
              </p>
              <ul className="list-unstyled mb-0">
              <a href="https://github.com/Qarun-Qadir-Bissoondial" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg">
                  <MDBIcon icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                src="/img/t2.jpeg"
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Gabriela Sewdhan</h5>
              <p className="text-uppercase blue-text">Software and Hardware Engineer</p>
              <p className="grey-text">
                Perspiciatis repellendus ad odit consequuntur, eveniet earum
                nisi qui consectetur totam officia voluptates perferendis
                voluptatibus aut.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="https://github.com/princesszelda94" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg">
                  <MDBIcon icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

{/*   
        <div className = "unique-color">
          <Carousel activeItem={1} length={2} slide={true} showControls={true} showIndicators={true} multiItem>
            <CarouselInner>
            
                <CarouselItem itemId="1">
                <Row>
                  <Col md="6">
                  <Card className="mb-2">
                    <CardImage className="img-fluid" src="/img/t1.jpeg" />
                    <CardBody>
                      <CardTitle>Michael Ali - 814005475</CardTitle>
                      <CardText>
                          Designer, frontend/backend software engineer, hardware engineer.
                      </CardText>
                      <Button href="https://github.com/irontarkus95" target="_blank" rel="noopener noreferrer" color="primary">Button</Button>
                    </CardBody>
                  </Card>
                  </Col>
                  <Col md="6" className="clearfix ">
                  <Card className="mb-2">
                    <CardImage className="img-fluid" src="/img/t2.jpeg" />
                    <CardBody>
                      <CardTitle>Gabriela Sewdhan - 813001696</CardTitle>
                      <CardText>
                          Designer, frontend/backend software engineer, hardware engineer.
                      </CardText>
                      <Button target="_blank" href="https://github.com/princesszelda94" rel="noopener noreferrer" color="primary">Button</Button>
                    </CardBody>
                  </Card>
                  </Col>
                  </Row>
                </CarouselItem>
                <CarouselItem itemId="2">
                <Row>
                  <Col md="6">
                  <Card className="mb-2">
                    <CardImage className="img-fluid" src="/img/kristan.jpg" />
                    <CardBody>
                      <CardTitle>Kristan Birbalsingh - 816003409</CardTitle>
                      <CardText>
                          Designer, frontend/backend software engineer.
                      </CardText>
                      <Button target="_blank" href="https://github.com/KCB4Rockstar" rel="noopener noreferrer" color="primary">Button</Button>
                    </CardBody>
                  </Card>
                  </Col>
                  <Col md="6" className="clearfix d-none d-md-block">
                  <Card className="mb-2">
                    <CardImage className="img-fluid" src="/img/qarun.jpg" />
                    <CardBody>
                      <CardTitle>Qarun Bissoondial - 816002009</CardTitle>
                      <CardText>
                          Designer, frontend/backend software engineer, business analyst/project manager, Software Testor.
                      </CardText>
                      <Button target="_blank" href="https://github.com/Qarun-Qadir-Bissoondial" rel="noopener noreferrer" color="primary">Button</Button>
                    </CardBody>
                  </Card>
                  </Col>
                  </Row>
                </CarouselItem>
            
            </CarouselInner>
          </Carousel>

        </div> */}


        {/* RoadMap */}
        <h2 className="h1-responsive font-weight-bold my-5 text-center">
           Product RoadMap
          </h2>
        <Container className = "w-100 p-0 m-0 mw-100 mt-0 px-0 mx-0 test container-fluid p-0  grey lighten-3" style={{paddingLeft: "-340px !important", paddingRight: "-430px !important", marginLeft: "32px !important", marginRight: "43px !important", width: "100%", backgroundColor: "blue"}}>
        {/* <style>{'div.container mt-5, div.row mt-4 { background-color: #D3D3D3; padding-right: 0px !important; padding-left: 0 !important; margin-right: auto !important; margin-left: auto !important; width: 1200px; display: block !important; '}</style> */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date ="NOW 30/11/2018"
            style={{ paddingLeft: '78px' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">What we have now</h3>
            <h4 className="vertical-timeline-element-subtitle">Present</h4>
            <ul className="list-unstyled">
              <h6>Fully authenticated front-end Web App</h6>
              <h6>Multiple sensors can connect to a resilient Raspberry Pi server</h6>
              <h6>Data can be pushed to Firebase in realtime</h6>
              <h6>Sensor data visualization</h6>
              <h6>End of the day summary report of sensor data</h6>
              <h6>Notifies user if sensor values are too low/high</h6>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="30/12/2018"
            style={{ paddingRight: '78px' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={ <FaThermometer />}
          >
            <h3 className="vertical-timeline-element-title">EC and Dissolved Oxygen Probes Testing</h3>
            <h4 className="vertical-timeline-element-subtitle">1 Month</h4>
            <ul className="list-unstyled">
              <h6>Obtain EC and Dissolved Oxygen Probes</h6>
              <h6>Ensure New probes work with our app</h6>
              <h6>Test Monitoring system fully</h6>
              <h6>Develop go-to-market strategy</h6>
              <h6>Find promoters/affiliates</h6>
              <h6>Launch initial mobile app as a monitoring system</h6>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="28/02/2019"
            style={{ paddingLeft: '78px' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<GoAlert />}
          >
            <h3 className="vertical-timeline-element-title">Plant Disease Diagnoser</h3>
            <h4 className="vertical-timeline-element-subtitle">2 Month</h4>
           
            <ul className="list-unstyled">
            <h6>Plant Disease Detecter and Diagnoser Developed</h6>
            <h6>Upload Plant Disease Diagnoser to the cloud</h6>
            <h6>Live camera feed viewable in app</h6>
            </ul>
          
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="NOW 31/05/2019"
            style={{ paddingRight: '78px' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaRobot />}
          >
            <h3 className="vertical-timeline-element-title">Hydroponics Automation System</h3>
            <h4 className="vertical-timeline-element-subtitle">3 Month</h4>
            <ul className="list-unstyled">
              <h6>Hydroponics system will be automated to maintain a homeostatic environment</h6>
              <h6>This involves the use of sun lamps, misting, ventilation fans, arduino to release a controlled amount of the nutrient chemical for controlled EC and alkaline solution for pH.</h6>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2013"
            style={{ paddingLeft: '78px' }}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<GoTasklist />}
          >
            <h3 className="vertical-timeline-element-title">Beta Test and Final Product</h3>
            <h4 className="vertical-timeline-element-subtitle">1 Month</h4>
            <ul className="list-unstyled">
              <h6>Beta test</h6>
              <h6>Start building anticipation</h6>
              <h6>Finalize launch content</h6>
              <h6>Gather reviews from beta testers</h6>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            style={{ paddingRight: '78px' }}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<GoRocket />}
          >
            <h3 className="vertical-timeline-element-title">Launch</h3>
            <h4 className="vertical-timeline-element-subtitle">LAUNCH WEEK</h4>
            <ul className="list-unstyled">
              <h6>Make launch a special event</h6>
              <h6>Keep sharing on social media and email list</h6>
              <h6>Continue contact with stakeholders</h6>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            style={{ paddingLeft: '78px' }}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<GoTools />}
          >
            <h3 className="vertical-timeline-element-title">Improving PiDronics</h3>
            <h4 className="vertical-timeline-element-subtitle">AFTER LAUNCH</h4>
            <ul className="list-unstyled">
            <h6>Celebrate :D</h6>
              <h6>Follow up testimonials</h6>
              <h6>Take feedback and make your product even better</h6>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
        </Container>


    {/* Contact Us */}
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
               Help us help you!
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil"
                  label="Icon Prefix"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.199733451757!2d-61.40165968469991!3d10.641585992413123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c3600a30808a9fb%3A0x63fa52505f29ebcd!2sThe+University+of+the+West+Indies+-+St.+Augustine+Campus!5e0!3m2!1sen!2stt!4v1545213358482"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker" />
              </MDBBtn>
              <p>U.W.I St Augustine</p>
              <p className="mb-md-0">Trinidad and Tobago</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 1(868)435-3532</p>
              <p className="mb-md-0">Mon - Fri, 8:00-6:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>support@pisynthesis.com </p>
              <p className="mb-md-0">support@pisynthesis.com </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
    </div>
    );
  }
}

export default timeline;