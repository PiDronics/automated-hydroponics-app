import React, { Component } from 'react';

class Support extends Component{

    render(){
        return (
            <div className="container-fluid">
                <header>
                    <h1>FAQ</h1>
                </header>
                <section>
                    <ul >
                        <li><a href="#basics">Basics</a></li>
                        <li><a href="#mobile">Product</a></li>
                        <li><a href="#account">Account</a></li>
                        <li><a href="#payments">Payments</a></li>
                        <li><a href="#privacy">Privacy and Security</a></li>
                    </ul> 

                    <div >
                        <ul id="basics">
                            <h2>Basics</h2>

                            <li>
                                <span className="blue-text">How do I sign up?</span>
                                <div>
                                    <span>The sign up button the appears after the welcome screen will take you to the sign up page where you enter the required information.</span>
                                </div> 
                            </li>
                        </ul> 

                        <ul id="mobile" >
                            <h2>Product - PiDronics</h2>
                            <li>
                                <span className="blue-text">Do I require an internet connection for PiDronics?</span>
                                <div >
                                    <span>Yes, to enable remote cloud monitoring from your smartphone or web browser. Data and roaming charges may apply.</span>
                                </div> 
                            </li>

                            <li>
                                <span className="blue-text">Can I upgrade my my setup with additional sensors?</span>
                                <div>
                                    <span>Yes, our modular design allows sensors to be added and removed with ease.</span>
                                </div> 
                            </li>

                            <li>
                                <span className="blue-text">Can I give other members of my farm access to my remote monitor? </span>
                                <div>
                                    <span>Yes, they may create accounts using our service and you may authenticate their accounts to your farm.</span>
                                </div> 
                            </li>

                            <li>
                                <span className="blue-text">Will I receive updates and improvements that are released? Will my Raspberry Pi also receive updates? </span>
                                <div>
                                    <span>Yes, improvements to our database will be received live and great care has been taken to ensure updates can be made to the Raspberry Pi server without disrupting service.</span>
                                </div> 
                            </li>

                            <li>
                                <span className="blue-text">My area is prone to power outages. How will this affect the performance of my monitoring system?</span>
                                <div>
                                    <span>Our system is designed to restart autonomously and resume data capture and pushing once power has been restores. However, keep in mind that a consistent internet connection is required and disruptions to internet connectivity will affect remote monitoring. Data is still captured and logged during this time.</span>
                                </div> 
                            </li>

                            <li>
                                <span className="blue-text">Am I liable for any damages to the system?  </span>
                                <div>
                                    <span>As per the contract signed before installation, the equipment (Raspberry Pi, sensors and any relevant housing and connections) are the sole property of PiSynthesis, and are on loan as such. Any damages caused by incorrect handling, storage or negligence will incur costs for replacement and/or repairs.</span>
                                </div> 
                            </li>

                            <li>
                                <span className="blue-text">What is included in my PiDronics package?  </span>
                                <div>
                                    <span>Packages include basic, mid-tier and deluxe. The basic package assumes you already have your own sensors and simply require the Raspberry Pi server to connect to, and begin remote monitoring. The mid-tier package includes the Raspberry Pi server, two sensors and includes on-site installation. The deluxe package includes everything found in the mid-tier package, in addition to every relevant sensors to fully monitor and analyse your farm. Every package allows access to our mobile and web app as well as onsite installation.</span>
                                </div> 
                            </li>

                            <li>
                                <span className="blue-text">I don't know how to use my system or how to install it.</span>
                                <div>
                                    <span>No need to worry, on-site installation and training is available for free with the mid-tier and above packages. The basic package will be subject to additional fees for these services.</span>
                                </div> 
                            </li>
                        </ul>

                        <ul id="account">
                            <h2>Account</h2>
                            <li>
                                <span className="blue-text">How do I change my password?</span>
                                <div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis earum autem consectetur labore eius tenetur esse, in temporibus sequi cum voluptatem vitae repellat nostrum odio perspiciatis dolores recusandae necessitatibus, unde, deserunt voluptas possimus veniam magni soluta deleniti! Architecto, quidem, totam. Fugit minus odit unde ea cupiditate ab aperiam sed dolore facere nihil laboriosam dolorum repellat deleniti aliquam fugiat laudantium delectus sint iure odio, necessitatibus rem quisquam! Ipsum praesentium quam nisi sint, impedit sapiente facilis laudantium mollitia quae fugiat similique. Dolor maiores aliquid incidunt commodi doloremque rem! Quaerat, debitis voluptatem vero qui enim, sunt reiciendis tempore inventore maxime quasi fugiat accusamus beatae modi voluptates iste officia esse soluta tempora labore quisquam fuga, cum. Sint nemo iste nulla accusamus quam qui quos, vero, minus id. Eius mollitia consequatur fugit nam consequuntur nesciunt illo id quis reprehenderit obcaecati voluptates corrupti, minus! Possimus, perspiciatis!</span>
                                </div> 
                            </li>

                            <li>
                                <span className="blue-text">How do I delete my account?</span>
                                <div>
                                    <span>If you would like to delete your account, you would need to de-register all systems. After you've de-registered you systems, send an email to <a href = "mailto:support@pisynthesis.com?Subject=Delete%20Account" target = "_top">  support@pisynthesis.com </a> for begin the deregistration process. It will necessate an onsite visit to retrieve loan equipment and to correct arrears. </span>
                                </div> 
                            </li>

                            <li>
                                <span className="blue-text">How do I change my account settings?</span>
                                <div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident officiis, reprehenderit numquam. Praesentium veritatis eos tenetur magni debitis inventore fugit, magnam, reiciendis, saepe obcaecati ex vero quaerat distinctio velit.</span>
                                </div> 
                            </li>

                            <li>
                                <span className="blue-text">I forgot my password. How do I reset it?</span>
                                <div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum at aspernatur iure facere ab a corporis mollitia molestiae quod omnis minima, est labore quidem nobis accusantium ad totam sunt doloremque laudantium impedit similique iste quasi cum! Libero fugit at praesentium vero. Maiores non consequuntur rerum, nemo a qui repellat quibusdam architecto voluptatem? Sequi, possimus, cupiditate autem soluta ipsa rerum officiis cum libero delectus explicabo facilis, odit ullam aperiam reprehenderit! Vero ad non harum veritatis tempore beatae possimus, ex odio quo.</span>
                                </div> 
                            </li>
                        </ul> 

                        <ul id="payments">
                            <h2>Payments</h2>
                            <li> <h4> Coming Soon </h4> </li>
                        </ul> 

                        <ul id="privacy">
                            <h2>Privacy and Security</h2>
                            <li>
                                <span className="blue-text">Can anyone access my information?</span>
                                <div>
                                    <span>No, your information is accessible only to you using your login credentials, unless authorised by you.</span>
                                </div> 
                            </li>

                            <li>
                                <span className="blue-text">If I lose or have my smartphone stolen, how is my data protected?</span>
                                <div>
                                    <span>Our app is capable of using biometric authentication, in addition to email and password, it can also require fingerprint authentication.</span>
                                </div> 
                            </li>
                        </ul> 
                    </div> 
                    <span className="blue-text">Close</span>
                </section> 
                {/* <script src="js/jquery-2.1.1.js"></script>
                <script src="js/jquery.mobile.custom.min.js"></script>
                <script src="js/main.js"></script>  */}
            </div> 

        );
    }
}

export default Support;
// ReactDOM.render(
//     <Support/>,
//     mountNode
//   );