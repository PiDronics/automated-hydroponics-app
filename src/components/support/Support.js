import React, { Component } from 'react';
import {Collapse, Card, CardBody, Container, Row, Fa, Button } from 'mdbreact';

/**
 * @class Support
 * @desc Gives a more in depth description of the application as well as how to use the application
 */

class Support extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
        collapseID: 'collapse1',
      collapse: false,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleCollapse = collapseID => () =>
  this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));

  render() {
    const {collapseID} = this.state;
    return (
    <div className = "container-fluid">
    <Container>
        <Row className="align-items-center mt-5">
            <h2 className="grey-text" style={{margin: "0px"}}>
                Frequently Asked Questions
            </h2>
            <span className="click border grey-text px-1 border-light rounded ml-2"><Fa icon="question-circle" className="mr-2"/>FAQ</span>
        </Row>
        <hr className="mb-5" />
        <h5>Click below for responses to frequently asked questions.</h5>

    {/* Not sure if needed, may take out */}
    <Row className="align-items-center mt-5">
        <h5 className="grey-text" style={{margin: "5px"}}>
        <Button href="#basics">
            Basics</Button>
        </h5>
        <h5 className="grey-text" style={{margin: "5px"}}>
        <Button href="#product">
            Product</Button>
        </h5>
        <h5 className="grey-text" style={{margin: "5px"}}>
        <Button href="#account">
            Account</Button>
        </h5>
        <h5 className="grey-text" style={{margin: "5px"}}>
        <Button href="#payments">
            Payments</Button>
        </h5>
        <h5 className="grey-text" style={{margin: "5px"}}>
        <Button href="#privacy">
            Privacy and Security</Button>
        </h5>
    </Row>

    <Container className="md-accordion mt-5">
        <div id = "basics">
            <h2 style={{marginBottom: "30px", marginTop: "30px"}}>
                Basics
            </h2>
            <Card className=" transparent border-0 border-light">
            <span onClick={this.toggleCollapse('collapse1')} className=" click d-flex p-2 transparent blue-text border-bottom border-light "><h5>How do I sign up? </h5><i className={collapseID === 'collapse2' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down ml-3'}></i> </span>

            {/* <Badge  text="black" onClick={this.toggleCollapse('collapse1')} color="success"><h5 text="black">New</h5></Badge>
            <style>{'Badge.h4 { color: #000000 !important;'}</style> */}
                {/* <MDBBtn className="d-flex p-2" outline color="success" onClick={this.toggleCollapse('collapse1')}>How do I sign up?
                <i className={collapseID === 'collapse1' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </MDBBtn> */}
            
                <Collapse id="collapse1" isOpen={collapseID}>
                    <CardBody>
                        The sign up button the appears after the welcome screen will take you to the sign up page where you enter the required information.
                    </CardBody>
                </Collapse>
            </Card>
        </div>

        <div id = "product">
            <h2 style={{marginBottom: "30px", marginTop: "30px"}}>
                Product - PiDronics
            </h2>
            <Card className=" transparent border-0 border-light">
                <span onClick={this.toggleCollapse('collapse2')} className="click d-flex p-2 transparent blue-text border-bottom border-light"><h5>Do I require an internet connection for PiDronics?</h5>
                    <i className={collapseID === 'collapse2' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>
            
                <Collapse id="collapse2" isOpen={collapseID}>
                    <CardBody className = "grey-text">
                        Yes, to enable remote cloud monitoring from your smartphone or web browser. Data and roaming charges may apply.
                    </CardBody>
                </Collapse>
            </Card>

            <Card className=" transparent border-0 border-light">
                <span onClick={this.toggleCollapse('collapse3')} className="click d-flex p-2 transparent blue-text border-bottom border-light"><h5>Can I upgrade my my setup with additional sensors?</h5>
                    <i className={collapseID === 'collapse3' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>
            
                <Collapse id="collapse3" isOpen={collapseID}>
                    <CardBody>
                        Yes, our modular design allows sensors to be added and removed with ease.
                    </CardBody>
                </Collapse>
            </Card>

            
            <Card className=" transparent border-0 border-light">
                <span onClick={this.toggleCollapse('collapse4')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>Can I give other members of my farm access to my remote monitor?</h5>
                    <i className={collapseID === 'collapse4' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>
            
                <Collapse id="collapse4" isOpen={collapseID}>
                    <CardBody>
                        Yes, they may create accounts using our service and you may authenticate their accounts to your farm.
                    </CardBody>
                </Collapse>
            </Card>

            <Card className=" transparent border-0 border-light"> 
                <span onClick={this.toggleCollapse('collapse5')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>Will I receive updates and improvements that are released? Will my Raspberry Pi also receive updates?</h5>
                    <i className={collapseID === 'collapse5' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>
            
                <Collapse id="collapse5" isOpen={collapseID}>
                    <CardBody>
                        Yes, improvements to our database will be received live and great care has been taken to ensure updates can be made to the Raspberry Pi server without disrupting service.
                    </CardBody>
                </Collapse>
            </Card>

            <Card className=" transparent border-0 border-light">
                <span onClick={this.toggleCollapse('collapse6')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>My area is prone to power outages. How will this affect the performance of my monitoring system?</h5>
                    <i className={collapseID === 'collapse6' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>
            
                <Collapse id="collapse6" isOpen={collapseID}>
                    <CardBody>
                        Our system is designed to restart autonomously and resume data capture and pushing once power has been restores. However, keep in mind that a consistent internet connection is required and disruptions to internet connectivity will affect remote monitoring. Data is still captured and logged during this time.
                    </CardBody>
                </Collapse>
            </Card>

            <Card className=" transparent border-0 border-light">
                <span onClick={this.toggleCollapse('collapse7')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>Am I liable for any damages to the system? </h5>
                    <i className={collapseID === 'collapse7' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>
            
                <Collapse id="collapse7" isOpen={collapseID}>
                    <CardBody>
                        As per the contract signed before installation, the equipment (Raspberry Pi, sensors and any relevant housing and connections) are the sole property of PiSynthesis, and are on loan as such. Any damages caused by incorrect handling, storage or negligence will incur costs for replacement and/or repairs.
                    </CardBody>
                </Collapse>
            </Card>

            <Card className=" transparent border-0 border-light">
                <span onClick={this.toggleCollapse('collapse8')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>What is included in my PiDronics package?</h5>
                    <i className={collapseID === 'collapse8' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>
            
                <Collapse id="collapse8" isOpen={collapseID}>
                    <CardBody>
                        Packages include basic, mid-tier and deluxe. The basic package assumes you already have your own sensors and simply require the Raspberry Pi server to connect to, and begin remote monitoring. The mid-tier package includes the Raspberry Pi server, two sensors and includes on-site installation. The deluxe package includes everything found in the mid-tier package, in addition to every relevant sensors to fully monitor and analyse your farm. Every package allows access to our mobile and web app as well as onsite installation.
                    </CardBody>
                </Collapse>
            </Card>

            <Card className=" transparent border-0 border-light">
                <span onClick={this.toggleCollapse('collapse9')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>I don't know how to use my system or how to install it.</h5>
                    <i className={collapseID === 'collapse9' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>
            
                <Collapse id="collapse9" isOpen={collapseID}>
                    <CardBody>
                        No need to worry, on-site installation and training is available for free with the mid-tier and above packages. The basic package will be subject to additional fees for these services.
                    </CardBody>
                </Collapse>
            </Card>
        </div>

        <div id = "account">
            <h2 style={{marginBottom: "30px", marginTop: "30px"}}>
                Account
            </h2>
            <Card className=" transparent border-0 border-light">
                <span onClick={this.toggleCollapse('collapse10')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>How do I change my password?</h5>
                <i className={collapseID === 'collapse10' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>

                <Collapse id="collapse10" isOpen={collapseID}>
                    <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis earum autem consectetur labore eius tenetur esse, in temporibus sequi cum voluptatem vitae repellat nostrum odio perspiciatis dolores recusandae necessitatibus, unde, deserunt voluptas possimus veniam magni soluta deleniti! Architecto, quidem, totam. Fugit minus odit unde ea cupiditate ab aperiam sed dolore facere nihil laboriosam dolorum repellat deleniti aliquam fugiat laudantium delectus sint iure odio, necessitatibus rem quisquam! Ipsum praesentium quam nisi sint, impedit sapiente facilis laudantium mollitia quae fugiat similique. Dolor maiores aliquid incidunt commodi doloremque rem! Quaerat, debitis voluptatem vero qui enim, sunt reiciendis tempore inventore maxime quasi fugiat accusamus beatae modi voluptates iste officia esse soluta tempora labore quisquam fuga, cum. Sint nemo iste nulla accusamus quam qui quos, vero, minus id. Eius mollitia consequatur fugit nam consequuntur nesciunt illo id quis reprehenderit obcaecati voluptates corrupti, minus! Possimus, perspiciatis!
                    </CardBody>
                </Collapse>
            </Card>

            <Card className=" transparent border-0 border-light">
                <span onClick={this.toggleCollapse('collapse11')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>How do I delete my account?</h5>
                <i className={collapseID === 'collapse11' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>

                <Collapse id="collapse11" isOpen={collapseID}>
                    <CardBody>
                        If you would like to delete your account, you would need to de-register all systems. After you've de-registered you systems, send an email to <a href = "mailto:support@pisynthesis.com?Subject=Delete%20Account" target = "_top">  support@pisynthesis.com </a> for begin the deregistration process. It will necessate an onsite visit to retrieve loan equipment and to correct arrears. 
                    </CardBody>
                </Collapse>
            </Card>

            <Card className=" transparent border-0 border-light">
                <span onClick={this.toggleCollapse('collapse12')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>How do I change my account settings?</h5>
                <i className={collapseID === 'collapse12' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>

                <Collapse id="collapse12" isOpen={collapseID}>
                    <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero quaerat distinctio velit.arrears. 
                    </CardBody>
                </Collapse>
            </Card>

            <Card className=" transparent border-0 border-light">
                <span onClick={this.toggleCollapse('collapse13')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>I forgot my password. How do I reset it?</h5>
                <i className={collapseID === 'collapse13' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>

                <Collapse id="collapse13" isOpen={collapseID}>
                    <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum at aspernatur iure facere ab a corporis mollitia molestiae quod omnis minima, est labore quidem nobis accusantium ad totam sunt doloremque laudantium impedit similique iste quasi cum! Libero fugit at praesentium vero. Maiores non consequuntur rerum, nemo a qui repellat quibusdam architecto voluptatem? Sequi, possimus, cupiditate autem soluta ipsa rerum officiis cum libero delectus explicabo facilis, odit ullam aperiam reprehenderit! Vero ad non harum veritatis tempore beatae possimus, ex odio quo.
                    </CardBody>
                </Collapse>
            </Card>
        </div>

        <div id = "payments">
            <h2 style={{marginBottom: "30px", marginTop: "30px"}}>
                Payments
            </h2>
            <Card className=" transparent border-0 border-light">
                <span onClick={this.toggleCollapse('collapse14')} className="click d-flex p-2 blue-text border-bottom border-light"> <h5>Coming Soon</h5>
                <i className={collapseID === 'collapse14' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>

                <Collapse id="collapse14" isOpen={collapseID}>
                    <CardBody>
                    <h4> Coming Soon </h4>
                    </CardBody>
                </Collapse>
            </Card>
        </div>

        <div id = "privacy">
            <h2 style={{marginBottom: "30px", marginTop: "30px"}}>
                Privacy and Security
            </h2>
            <Card className=" transparent border-0 border-light">
                <span onClick={this.toggleCollapse('collapse15')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>Can anyone access my information?</h5>
                <i className={collapseID === 'collapse15' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>

                <Collapse id="collapse15" isOpen={collapseID}>
                    <CardBody>
                        No, your information is accessible only to you using your login credentials, unless authorised by you.
                    </CardBody>
                </Collapse>
            </Card>

            <Card className=" transparent border-0 border-light">
                <span onClick={this.toggleCollapse('collapse16')} className="click d-flex p-2 blue-text border-bottom border-light"><h5>If I lose or have my smartphone stolen, how is my data protected?</h5>
                <i className={collapseID === 'collapse16' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </span>

                <Collapse id="collapse16" isOpen={collapseID}>
                    <CardBody>
                        Our app is capable of using biometric authentication, in addition to email and password, it can also require fingerprint authentication.
                    </CardBody>
                </Collapse>
            </Card>
        </div>
    </Container>
    </Container>


    <Container>
        <Row className="align-items-center mt-5">
            <h2 className="grey-text" style={{margin: "0px"}}>
                Product Manual
            </h2>
            <span className="click border grey-text px-1 border-light rounded ml-2"><Fa icon="question-circle" className="mr-2"/></span>
        </Row>
        <hr className="mb-5" />
        <h5>Click on the link to view our Product Manual: <a href = "https://docs.google.com/document/d/1FWLsea7MBdXaazkmk156T1Quhn5-B72oxn0frQKcgs8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Our Product Manual</a></h5>
    </Container>
    </div>
    );
  }
}
export default Support;