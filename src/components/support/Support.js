import React, { Component } from 'react';
import { Button, Collapse, Card, CardBody, MDBBtn, Container, Badge } from 'mdbreact';

class Example extends Component {
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
    <header>
        <h1>FAQ</h1>
    </header>

    <ul >
        <li><a href="#basics">Basics</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#account">Account</a></li>
        <li><a href="#payments">Payments</a></li>
        <li><a href="#privacy">Privacy and Security</a></li>
    </ul> 
    </Container>
    <Container className="md-accordion mt-5">
    <style>{'Badge.h4 { color: #000000 !important;'}</style>
        <div id = "basics">
        <h2>Basics</h2>
            <Card >
            <a onClick={this.toggleCollapse('collapse1')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light "><h5>How do I sign up? </h5><i className={collapseID === 'collapse2' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> </a>

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
        <h2>Product - PiDronics</h2>
            <Card>
                <a onClick={this.toggleCollapse('collapse2')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"><h5>Do I require an internet connection for PiDronics?</h5>
                    <i className={collapseID === 'collapse2' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>
            
                <Collapse id="collapse2" isOpen={collapseID}>
                    <CardBody>
                        Yes, to enable remote cloud monitoring from your smartphone or web browser. Data and roaming charges may apply.
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <a onClick={this.toggleCollapse('collapse3')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"><h5>Can I upgrade my my setup with additional sensors?</h5>
                    <i className={collapseID === 'collapse3' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>
            
                <Collapse id="collapse3" isOpen={collapseID}>
                    <CardBody>
                        Yes, our modular design allows sensors to be added and removed with ease.
                    </CardBody>
                </Collapse>
            </Card>

            
            <Card>
                <a onClick={this.toggleCollapse('collapse4')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"><h5>Can I give other members of my farm access to my remote monitor?</h5>
                    <i className={collapseID === 'collapse4' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>
            
                <Collapse id="collapse4" isOpen={collapseID}>
                    <CardBody>
                        Yes, they may create accounts using our service and you may authenticate their accounts to your farm.
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <a onClick={this.toggleCollapse('collapse5')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"><h5>Will I receive updates and improvements that are released? Will my Raspberry Pi also receive updates?</h5>
                    <i className={collapseID === 'collapse5' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>
            
                <Collapse id="collapse5" isOpen={collapseID}>
                    <CardBody>
                        Yes, improvements to our database will be received live and great care has been taken to ensure updates can be made to the Raspberry Pi server without disrupting service.
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <a onClick={this.toggleCollapse('collapse6')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"><h5>My area is prone to power outages. How will this affect the performance of my monitoring system?</h5>
                    <i className={collapseID === 'collapse6' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>
            
                <Collapse id="collapse6" isOpen={collapseID}>
                    <CardBody>
                        Our system is designed to restart autonomously and resume data capture and pushing once power has been restores. However, keep in mind that a consistent internet connection is required and disruptions to internet connectivity will affect remote monitoring. Data is still captured and logged during this time.
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <a onClick={this.toggleCollapse('collapse7')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"><h5>Am I liable for any damages to the system? </h5>
                    <i className={collapseID === 'collapse7' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>
            
                <Collapse id="collapse7" isOpen={collapseID}>
                    <CardBody>
                        As per the contract signed before installation, the equipment (Raspberry Pi, sensors and any relevant housing and connections) are the sole property of PiSynthesis, and are on loan as such. Any damages caused by incorrect handling, storage or negligence will incur costs for replacement and/or repairs.
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <a onClick={this.toggleCollapse('collapse8')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"><h5>What is included in my PiDronics package?</h5>
                    <i className={collapseID === 'collapse8' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>
            
                <Collapse id="collapse8" isOpen={collapseID}>
                    <CardBody>
                        Packages include basic, mid-tier and deluxe. The basic package assumes you already have your own sensors and simply require the Raspberry Pi server to connect to, and begin remote monitoring. The mid-tier package includes the Raspberry Pi server, two sensors and includes on-site installation. The deluxe package includes everything found in the mid-tier package, in addition to every relevant sensors to fully monitor and analyse your farm. Every package allows access to our mobile and web app as well as onsite installation.
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <a onClick={this.toggleCollapse('collapse9')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"><h5>I don't know how to use my system or how to install it.</h5>
                    <i className={collapseID === 'collapse9' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>
            
                <Collapse id="collapse9" isOpen={collapseID}>
                    <CardBody>
                        No need to worry, on-site installation and training is available for free with the mid-tier and above packages. The basic package will be subject to additional fees for these services.
                    </CardBody>
                </Collapse>
            </Card>
        </div>

        <div id = "account">
        <h2>Account</h2>
            <Card>
                <a onClick={this.toggleCollapse('collapse10')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"><h5>How do I change my password?</h5>
                <i className={collapseID === 'collapse10' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>

                <Collapse id="collapse10" isOpen={collapseID}>
                    <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis earum autem consectetur labore eius tenetur esse, in temporibus sequi cum voluptatem vitae repellat nostrum odio perspiciatis dolores recusandae necessitatibus, unde, deserunt voluptas possimus veniam magni soluta deleniti! Architecto, quidem, totam. Fugit minus odit unde ea cupiditate ab aperiam sed dolore facere nihil laboriosam dolorum repellat deleniti aliquam fugiat laudantium delectus sint iure odio, necessitatibus rem quisquam! Ipsum praesentium quam nisi sint, impedit sapiente facilis laudantium mollitia quae fugiat similique. Dolor maiores aliquid incidunt commodi doloremque rem! Quaerat, debitis voluptatem vero qui enim, sunt reiciendis tempore inventore maxime quasi fugiat accusamus beatae modi voluptates iste officia esse soluta tempora labore quisquam fuga, cum. Sint nemo iste nulla accusamus quam qui quos, vero, minus id. Eius mollitia consequatur fugit nam consequuntur nesciunt illo id quis reprehenderit obcaecati voluptates corrupti, minus! Possimus, perspiciatis!
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <a onClick={this.toggleCollapse('collapse11')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"><h5>How do I delete my account?</h5>
                <i className={collapseID === 'collapse11' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>

                <Collapse id="collapse11" isOpen={collapseID}>
                    <CardBody>
                        If you would like to delete your account, you would need to de-register all systems. After you've de-registered you systems, send an email to <a href = "mailto:support@pisynthesis.com?Subject=Delete%20Account" target = "_top">  support@pisynthesis.com </a> for begin the deregistration process. It will necessate an onsite visit to retrieve loan equipment and to correct arrears. 
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <a onClick={this.toggleCollapse('collapse12')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"><h5>How do I change my account settings?</h5>
                <i className={collapseID === 'collapse12' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>

                <Collapse id="collapse12" isOpen={collapseID}>
                    <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero quaerat distinctio velit.arrears. 
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <a onClick={this.toggleCollapse('collapse13')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"><h5>I forgot my password. How do I reset it?</h5>
                <i className={collapseID === 'collapse13' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>

                <Collapse id="collapse13" isOpen={collapseID}>
                    <CardBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum at aspernatur iure facere ab a corporis mollitia molestiae quod omnis minima, est labore quidem nobis accusantium ad totam sunt doloremque laudantium impedit similique iste quasi cum! Libero fugit at praesentium vero. Maiores non consequuntur rerum, nemo a qui repellat quibusdam architecto voluptatem? Sequi, possimus, cupiditate autem soluta ipsa rerum officiis cum libero delectus explicabo facilis, odit ullam aperiam reprehenderit! Vero ad non harum veritatis tempore beatae possimus, ex odio quo.
                    </CardBody>
                </Collapse>
            </Card>
        </div>

        <div id = "payments">
        <h2>Payments</h2>
            <Card>
                <a onClick={this.toggleCollapse('collapse14')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"> <h5>Coming Soon</h5>
                <i className={collapseID === 'collapse14' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>

                <Collapse id="collapse14" isOpen={collapseID}>
                    <CardBody>
                    <h4> Coming Soon </h4>
                    </CardBody>
                </Collapse>
            </Card>
        </div>

        <div id = "privacy">
        <h2>Privacy and Security</h2>
            <Card>
                <a onClick={this.toggleCollapse('collapse15')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"><h5>Can anyone access my information?</h5>
                <i className={collapseID === 'collapse15' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>

                <Collapse id="collapse15" isOpen={collapseID}>
                    <CardBody>
                        No, your information is accessible only to you using your login credentials, unless authorised by you.
                    </CardBody>
                </Collapse>
            </Card>

            <Card>
                <a onClick={this.toggleCollapse('collapse16')} className="d-flex p-2 grey lighten-4 blue-text border-bottom border-light"><h5>If I lose or have my smartphone stolen, how is my data protected?</h5>
                <i className={collapseID === 'collapse16' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i> 
                </a>

                <Collapse id="collapse16" isOpen={collapseID}>
                    <CardBody>
                        Our app is capable of using biometric authentication, in addition to email and password, it can also require fingerprint authentication.
                    </CardBody>
                </Collapse>
            </Card>
        </div>
        </Container>


     </div>
    );
  }
}
export default Example;

// import React, { Component } from 'react';
// import { Button, Collapse } from 'mdbreact';
// import 'bootstrap-css-only/css/bootstrap.min.css';

// class Example extends Component {

//   render() {
//     return (
//         <div className = "container-fluid">
//         <header>
//             <h1>FAQ</h1>
//         </header>

//         <ul>
//             <li><a href="#basics">Basics</a></li>
//             <li><a href="#product">Product</a></li>
//             <li><a href="#account">Account</a></li>
//             <li><a href="#payments">Payments</a></li>
//             <li><a href="#privacy">Privacy and Security</a></li>
//         </ul> 

//         <div className="accordion" id="faq">  
//             <div id = "basics">
//                 <h2>Basics</h2>
//                 <div className="card">
//                     <div className="card-header" id="headingOne">
//                         <h5 className="mb-0">
//                         <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#basicinfo" aria-expanded="true" aria-controls="basicinfo">
//                         How do I sign up?
//                         </button>
//                         </h5>
//                     </div>
                
//                     <div id="basicinfo" className="collapse show" aria-labelledby="headingOne" data-parent="#faq">
//                         <div className="card-body">
//                             The sign up button the appears after the welcome screen will take you to the sign up page where you enter the required information.
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div id = "product">
//                 <h2>Product - Pidronics</h2>
//                 <div className="card">
//                     <div className="card-header" id="headingOne">
//                         <h5 className="mb-0">
//                         <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#internet" aria-expanded="true" aria-controls="internet">
//                         Do I require an internet connection for PiDronics?
//                         </button>
//                         </h5>
//                     </div>
                
//                     <div id="internet" className="collapse show" aria-labelledby="headingOne" data-parent="#faq">
//                         <div className="card-body">
//                             Yes, to enable remote cloud monitoring from your smartphone or web browser. Data and roaming charges may apply.
//                         </div>
//                     </div>
//                 </div>

//                 <div className="card">
//                     <div className="card-header" id="headingOne">
//                         <h5 className="mb-0">
//                         <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#sensors" aria-expanded="true" aria-controls="sensors">
//                         Can I upgrade my my setup with additional sensors?
//                         </button>
//                         </h5>
//                     </div>
                
//                     <div id="sensors" className="collapse show" aria-labelledby="headingOne" data-parent="#faq">
//                         <div className="card-body">
//                             Yes, our modular design allows sensors to be added and removed with ease.
//                         </div>
//                     </div>
//                 </div>

//                 <div className="card">
//                     <div className="card-header" id="headingOne">
//                         <h5 className="mb-0">
//                         <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#remote" aria-expanded="true" aria-controls="remote">
//                         Can I give other members of my farm access to my remote monitor? 
//                         </button>
//                         </h5>
//                     </div>
                
//                     <div id="remote" className="collapse show" aria-labelledby="headingOne" data-parent="#faq">
//                         <div className="card-body">
//                             Yes, they may create accounts using our service and you may authenticate their accounts to your farm.
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         <div className="card">
//           <div className="card-header" id="headingTwo">
//             <h5 className="mb-0">
//               <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                 Collapsible Group Item #2
//               </button>
//             </h5>
//           </div>
//           <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
//             <div className="card-body">
//               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//             </div>
//           </div>
//         </div>
//         <div className="card">
//           <div className="card-header" id="headingThree">
//             <h5 className="mb-0">
//               <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//                 Collapsible Group Item #3
//               </button>
//             </h5>
//           </div>
//           <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
//             <div className="card-body">
//               Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//             </div>
//           </div>
//         </div>
//       </div>

//       </div>
      
//     );
//   }
// }
// export default Example;


//                 {<header>
//                     <h1>FAQ</h1>
//                 </header>
//                 <section>
//                     <ul >
//                         <li><a href="#basics">Basics</a></li>
//                         <li><a href="#mobile">Product</a></li>
//                         <li><a href="#account">Account</a></li>
//                         <li><a href="#payments">Payments</a></li>
//                         <li><a href="#privacy">Privacy and Security</a></li>
//                     </ul> 

//                     <div >
//                         <ul id="basics">
//                             <h2>Basics</h2>

//                             <li>
//                                 <span onClick={this.toggle} className="blue-text">How do I sign up?</span>
//                                 <div>
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>The sign up button the appears after the welcome screen will take you to the sign up page where you enter the required information.</span>
//                                 </Collapse>
//                                 </div> 
//                             </li>
//                         </ul> 

//                         <ul id="mobile" >
//                             <h2>Product - PiDronics</h2>
//                             <li>
//                                 <span onClick={this.toggle} className="blue-text">Do I require an internet connection for PiDronics?</span>
//                                 <div >
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>Yes, to enable remote cloud monitoring from your smartphone or web browser. Data and roaming charges may apply.</span>
//                                     </Collapse>
//                                 </div> 
//                             </li>

//                             <li>
//                                 <span onClick={this.toggle} className="blue-text">Can I upgrade my my setup with additional sensors?</span>
//                                 <div>
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>Yes, our modular design allows sensors to be added and removed with ease.</span>
//                                     </Collapse>
//                                 </div> 
//                             </li>

//                             <li>
//                                 <span onClick={this.toggle} className="blue-text">Can I give other members of my farm access to my remote monitor? </span>
//                                 <div>
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>Yes, they may create accounts using our service and you may authenticate their accounts to your farm.</span>
//                                     </Collapse>
//                                 </div> 
//                             </li>

//                             <li>
//                                 <span onClick={this.toggle} className="blue-text">Will I receive updates and improvements that are released? Will my Raspberry Pi also receive updates? </span>
//                                 <div>
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>Yes, improvements to our database will be received live and great care has been taken to ensure updates can be made to the Raspberry Pi server without disrupting service.</span>
//                                     </Collapse>
//                                 </div> 
//                             </li>

//                             <li>
//                                 <span onClick={this.toggle} className="blue-text">My area is prone to power outages. How will this affect the performance of my monitoring system?</span>
//                                 <div>
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>Our system is designed to restart autonomously and resume data capture and pushing once power has been restores. However, keep in mind that a consistent internet connection is required and disruptions to internet connectivity will affect remote monitoring. Data is still captured and logged during this time.</span>
//                                     </Collapse>
//                                 </div> 
//                             </li>

//                             <li>
//                                 <span onClick={this.toggle} className="blue-text">Am I liable for any damages to the system?  </span>
//                                 <div>
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>As per the contract signed before installation, the equipment (Raspberry Pi, sensors and any relevant housing and connections) are the sole property of PiSynthesis, and are on loan as such. Any damages caused by incorrect handling, storage or negligence will incur costs for replacement and/or repairs.</span>
//                                     </Collapse>
//                                 </div> 
//                             </li>

//                             <li>
//                                 <span onClick={this.toggle} className="blue-text">What is included in my PiDronics package?  </span>
//                                 <div>
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>Packages include basic, mid-tier and deluxe. The basic package assumes you already have your own sensors and simply require the Raspberry Pi server to connect to, and begin remote monitoring. The mid-tier package includes the Raspberry Pi server, two sensors and includes on-site installation. The deluxe package includes everything found in the mid-tier package, in addition to every relevant sensors to fully monitor and analyse your farm. Every package allows access to our mobile and web app as well as onsite installation.</span>
//                                     </Collapse>
//                                 </div> 
//                             </li>

//                             <li>
//                                 <span onClick={this.toggle} className="blue-text">I don't know how to use my system or how to install it.</span>
//                                 <div>
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>No need to worry, on-site installation and training is available for free with the mid-tier and above packages. The basic package will be subject to additional fees for these services.</span>
//                                     </Collapse>
//                                 </div> 
//                             </li>
//                         </ul>

//                         <ul id="account">
//                             <h2>Account</h2>
//                             <li>
//                                 <span onClick={this.toggle}  className="blue-text">How do I change my password?</span>
//                                 <div>
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis earum autem consectetur labore eius tenetur esse, in temporibus sequi cum voluptatem vitae repellat nostrum odio perspiciatis dolores recusandae necessitatibus, unde, deserunt voluptas possimus veniam magni soluta deleniti! Architecto, quidem, totam. Fugit minus odit unde ea cupiditate ab aperiam sed dolore facere nihil laboriosam dolorum repellat deleniti aliquam fugiat laudantium delectus sint iure odio, necessitatibus rem quisquam! Ipsum praesentium quam nisi sint, impedit sapiente facilis laudantium mollitia quae fugiat similique. Dolor maiores aliquid incidunt commodi doloremque rem! Quaerat, debitis voluptatem vero qui enim, sunt reiciendis tempore inventore maxime quasi fugiat accusamus beatae modi voluptates iste officia esse soluta tempora labore quisquam fuga, cum. Sint nemo iste nulla accusamus quam qui quos, vero, minus id. Eius mollitia consequatur fugit nam consequuntur nesciunt illo id quis reprehenderit obcaecati voluptates corrupti, minus! Possimus, perspiciatis!</span>
//                                     </Collapse>
//                                 </div> 
//                             </li>

//                             <li>
//                                 <span onClick={this.toggle}  className="blue-text">How do I delete my account?</span>
//                                 <div>
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>If you would like to delete your account, you would need to de-register all systems. After you've de-registered you systems, send an email to <a href = "mailto:support@pisynthesis.com?Subject=Delete%20Account" target = "_top">  support@pisynthesis.com </a> for begin the deregistration process. It will necessate an onsite visit to retrieve loan equipment and to correct arrears. 
//                                     </span>
//                                     </Collapse>
//                                 </div> 
//                             </li>

//                             <li>
//                                 <span onClick={this.toggle}  className="blue-text">How do I change my account settings?</span>
//                                 <div>
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero quaerat distinctio velit.</span>
//                                     </Collapse>
//                                 </div> 
//                             </li>

//                             <li>
//                                 <span onClick={this.toggle}  className="blue-text">I forgot my password. How do I reset it?</span>
//                                 <div>
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum at aspernatur iure facere ab a corporis mollitia molestiae quod omnis minima, est labore quidem nobis accusantium ad totam sunt doloremque laudantium impedit similique iste quasi cum! Libero fugit at praesentium vero. Maiores non consequuntur rerum, nemo a qui repellat quibusdam architecto voluptatem? Sequi, possimus, cupiditate autem soluta ipsa rerum officiis cum libero delectus explicabo facilis, odit ullam aperiam reprehenderit! Vero ad non harum veritatis tempore beatae possimus, ex odio quo.</span>
//                                     </Collapse>
//                                 </div> 
//                             </li>
//                         </ul> 

//                         <ul id="payments">
//                             <h2>Payments</h2>
//                             <li> <h4> Coming Soon </h4> </li>
//                         </ul> 

//                         <ul id="privacy">
//                             <h2>Privacy and Security</h2>
//                             <li>
//                                 <span onClick={this.toggle}  className="blue-text">Can anyone access my information?</span>
//                                 <div>
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>No, your information is accessible only to you using your login credentials, unless authorised by you.</span>
//                                     </Collapse>
//                                 </div> 
//                             </li>

//                             <li>
//                                 <span onClick={this.toggle}  className="blue-text">If I lose or have my smartphone stolen, how is my data protected?</span>
//                                 <div>
//                                 <Collapse isOpen={this.state.collapse}>
//                                     <span>Our app is capable of using biometric authentication, in addition to email and password, it can also require fingerprint authentication.</span>
//                                     </Collapse>
//                                 </div> 
//                             </li>
//                         </ul> 
//                     </div> 
//                     <span className="blue-text">Close</span>
//                 </section>  }
//              </div> 

//          );
//      }
//  }

//  export default Support;
