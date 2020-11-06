import React, { Component } from 'react';
import { Card, CardBody, MDBBtn, MDBCard, MDBCardBody, MDBInput, MDBRow, MDBCol, MDBIcon, Row, Col, Container } from "mdbreact";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact, FaThermometer, FaRobot, FaStar } from 'react-icons/fa';
import { GoTasklist, GoRocket, GoAlert, GoTools } from "react-icons/go";

/**
 * @class About
 * @desc Provides a description about the Application and the problem that it solves, an introduction to the team, a product roadmap and a contact us to receive queries.
 */

class About extends Component{
  render(){
    return (
    // Header
    <div className="container-fluid">
    <div className="row">
        <div className="container mt-5">
            <div className="row mt-5">
            <div className = "container-fluid">
                  <Row className="align-items-center mt-5">
                      <h1 className="grey-text" style={{margin: "0px"}}>
                          PiDronics
                      </h1>
                      <span className="click border grey-text px-1 border-light rounded ml-2"><MDBIcon icon="tasks" className="grey-text" /></span>
                  </Row>
                  <hr className="mb-5" />

              {/* About Our Product */} 
              <Card className="my-5 px-3 pb-5 text-center">
                  <CardBody>
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
                        <p className="text-uppercase blue-text">How we can help you.</p>
                        <p className="grey-text">
                        The PiDronics system benefits people wishing to break into hydroponics with little to no prior knowledge and with a low cost of entry. It’s remote monitoring capability reduces risk by providing timely readings on their farm and notifies them if it has reached unsafe levels, compensating for a farmer’s poor education in the field while allowing them to divert their time on other tasks, such as marketing. In addition, we believe the PiDronics system is an important educational tool to introduce young people into the world of agriculture in an engaging environment, since it encapsulates the fields of agriculture, programming and the ever-popular Raspberry Pi. The PiDronics system integrates seamlessly with a hydroponics farm, and the modularity of the system allows various sensors to be integrated and viewable on the app.
                        </p>
                        <ul className="list-unstyled mb-0">

                        <MDBBtn outline floating size="lg" color="white" className="z-depth-1" >
                        <a href="https://github.com/PiDronics" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg">
                            See our Code <MDBIcon icon="github" className="blue-text" />
                          </a>
                        </MDBBtn>
                        </ul>
                  </CardBody>
                </Card>

                {/* About The Team */}
                <Card className="my-5 px-5 pb-5 text-center">
                  <CardBody>
                    <h2 className="h1-responsive font-weight-bold my-5">
                      Meet the Team
                    </h2>
                    <p className="grey-text w-responsive mx-auto mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                      error amet numquam iure provident voluptate esse quasi, veritatis
                      totam voluptas nostrum quisquam eum porro a pariatur veniam.
                    </p>
                    <Row>
                      <Col lg="3" md="6" className="mb-lg-0 mb-5">
                        <img
                          src="/img/t1.jpeg"
                          className="rounded-circle z-depth-1 img-fluid"
                          alt="Sample avatar"
                        />
                        <h5 className="font-weight-bold mt-4 mb-3">Michael Ali</h5>
                        <p className="text-uppercase blue-text">Software and Hardware Engineer</p>
                        <p className="grey-text">
                        </p>
                        <ul className="list-unstyled mb-0">

                        <MDBBtn outline size="sm" color="white" className="rounded-circle z-depth-1" >
                        <a href="https://github.com/irontarkus95" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg">
                            <MDBIcon icon="github" className="blue-text" size="3x" />
                          </a>
                        </MDBBtn>
                        </ul>
                      </Col>

                      <Col lg="3" md="6" className="mb-lg-0 mb-5">
                        <img
                          src="/img/kristan.jpg"
                          className="rounded-circle z-depth-1 img-fluid"
                          alt="Sample avatar"
                        />
                        <h5 className="font-weight-bold mt-4 mb-3">Kristan Birbalsingh</h5>
                        <p className="text-uppercase blue-text">Software Developer and Designer</p>
                        <p className="grey-text">
                        </p>
                        <ul className="list-unstyled mb-0">
                        <MDBBtn  outline size="sm" color="white" className="rounded-circle z-depth-1" >
                        <a href="https://github.com/KCB4Rockstar" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg">
                            <MDBIcon icon="github" className="blue-text" size="3x"  />
                          </a>
                        </MDBBtn>
                        </ul>
                      </Col>

                      <Col lg="3" md="6" className="mb-lg-0 mb-5">
                        <img
                          src="/img/qarun.jpg"
                          className="rounded-circle z-depth-1 img-fluid"
                          alt="Sample avatar"
                        />
                        <h5 className="font-weight-bold mt-4 mb-3">Qarun Bissoondial</h5>
                        <p className="text-uppercase blue-text">Software Developer and Tester</p>
                        <p className="grey-text">
                        </p>
                        <ul className="list-unstyled mb-0">

                        <MDBBtn outline size="sm" color="white" className="rounded-circle z-depth-1" >
                        <a href="https://github.com/Qarun-Qadir-Bissoondial" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg">
                            <MDBIcon icon="github" className="blue-text" size="3x"  />
                          </a>
                        </MDBBtn>
                        </ul>
                      </Col>

                      <Col lg="3" md="6" className="mb-lg-0 mb-5">
                        <img
                          src="/img/t2.jpeg"
                          className="rounded-circle z-depth-1 img-fluid"
                          alt="Sample avatar"
                        />
                        <h5 className="font-weight-bold mt-4 mb-3">Gabriela Sewdhan</h5>
                        <p className="text-uppercase blue-text">Software and Hardware Engineer</p>
                        <p className="grey-text">
                        </p>
                        <ul className="list-unstyled mb-0">

                        <MDBBtn outline size="sm" color="white" className="rounded-circle z-depth-1">
                          <a href="https://github.com/princesszelda94" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg">
                            <MDBIcon icon="github" className="blue-text" size="3x"  />
                          </a>
                          </MDBBtn>

                        </ul>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>

                {/* RoadMap which uses the react-vertical-timeline-component library */}
                  <h2 className="h1-responsive font-weight-bold my-5 text-center">
                    Product RoadMap
                    </h2>
                  <Container className = "grey lighten-3">
                  <VerticalTimeline>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
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

                      <p className = "blue-grey-text">NOW 21/12/2018</p>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
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
                      <p className = "blue-grey-text">31/01/2019</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<GoAlert />}
                    >
                      <h3 className="vertical-timeline-element-title">Plant Disease Diagnoser</h3>
                      <h4 className="vertical-timeline-element-subtitle">2 Months</h4>
                    
                      <ul className="list-unstyled">
                      <h6>Plant Disease Detecter and Diagnoser Developed</h6>
                      <h6>Upload Plant Disease Diagnoser to the cloud</h6>
                      <h6>Live camera feed viewable in app</h6>
                      </ul>
                      <p className = "blue-grey-text">31/03/2019</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                      icon={<FaRobot />}
                    >
                      <h3 className="vertical-timeline-element-title">Hydroponics Automation System</h3>
                      <h4 className="vertical-timeline-element-subtitle">3 Months</h4>
                      <ul className="list-unstyled">
                        <h6>Hydroponics system will be automated to maintain a homeostatic environment</h6>
                        <h6>This involves the use of sun lamps, misting, ventilation fans, arduino to release a controlled amount of the nutrient chemical for controlled EC and alkaline solution for pH.</h6>
                      </ul>
                      <p className = "blue-grey-text">30/06/2019</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
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
                      <p className = "blue-grey-text">July 2019</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
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
                      <p className = "blue-grey-text">August 2019</p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                      className="vertical-timeline-element--education"
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
                      <p className = "blue-grey-text">September 2019</p>
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
                Need Assistance? 
              </p>
              <MDBRow>
                <MDBCol lg="5" className="lg-0 mb-4">
                  <MDBCard>
                    <MDBCardBody>

                    <span className=" text-center d-block p-2  blue accent-1 text-white">
                    <h3 className="mt-2">
                          <MDBIcon icon="envelope" /> Write to us: 
                      </h3>
                    </span>
                      <p className="dark-grey-text">
                        We'll write rarely, but only the best content.
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
                          label="Description"
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
                      <p className="mb-md-0">Mon - Fri, 8:00-18:00</p>
                    </MDBCol>
                    <MDBCol md="4">
                      <MDBBtn tag="a" floating color="blue" className="accent-1">
                        <MDBIcon icon="envelope" />
                      </MDBBtn>
                      <p><a href = "mailto:support@pisynthesis.com?Subject=Delete%20Account" target = "_top">  support@pisynthesis.com </a></p>
                      <p className="mb-md-0"><a href = "mailto:support@pisynthesis.com?Subject=Delete%20Account" target = "_top">  sale@pisynthesis.com</a></p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </section>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default About;