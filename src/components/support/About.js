import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Table, TableBody } from 'mdbreact';

class About extends Component{

    render(){
        return (
            <div className="container-fluid">I NEED SOMETHING TO SHOW UP
            
                <section class="banner-area relative" id="home">
                    <div class="overlay overlay-bg"></div>	
                    <div class="container">
                        <div class="row fullscreen d-flex align-items-center justify-content-center">
                            <div class="banner-content col-lg-8">
                                <h1 class="text-white">
                                    Ease your Education with QuickRental				
                                </h1>
                                <p class="pt-20 pb-20 text-white">
                                    Quickly find the perfect place within your budget, without all the hustle and bustle.
                                </p>
                            </div>											
                        </div>
                    </div>					
                </section>
            
                <section class="feature-area pb-100" id="service">
                    <div class="container">
                        <div class="row mockup-container">
                            <img class="mx-auto d-block img-fluid" src="img/laptop.png" alt=""/>
                        </div>
                        <div class="row d-flex justify-content-center">
                            <div class="menu-content pt-100 pb-60 col-lg-10">
                                <div class="title text-center">
                                    <h1 class="mb-10">The Problem</h1>
                                    <p>At the University of the West Indies, finding the right apartment is extremely difficult and time-consuming since many apartments are not advertised, outside of walking distance and not secure. Additionally, landlords are difficult to contact and featured landlords are simply unpleasant . Students must take great care and effort to locate an apartment that fits within their budget and level of comfort.</p>
                                </div>
                            </div>
                        </div>						
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="single-feature">
                                    <span class="lnr lnr-smile"></span>
                                    <h4>
                                        Our Stakeholders. Who Benefits?
                                    </h4>
                                    <p>
                                        Our target audience for the apartment rental application would be anyone that rents an apartment at or nearby University of the West Indies (UWI); students, parents, staff and employees. Furthermore, the landlords will also be a target audience as they will be the ones advertising their apartments within the mobile application.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-feature">
                                    <span class="lnr lnr-code"></span>
                                    <h4>
                                        Solution. 
                                        What can we do?
                                    </h4>
                                    <p>
                                        The project our team intends to embark on will serve as an all-in-one mobile app solution for students of the University of the West Indies (UWI) who are seeking rental accommodation near to campus called QuickRental. This project endeavors to enhance the lives of students at the UWI by making it easier to decide on which housing would be best for them to rent.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="single-feature">
                                    <span class="lnr lnr-smartphone"></span>
                                    <h4>
                                        Usage. 
                                        How does it work?
                                    </h4>
                                    <p>
                                        The user interface would enable users to find apartments, townhouses and homes for rent using GPS location and mapping, check real-time availability, price ranges, type of apartment, be it double room or studio etc. and read reviews submitted by other renters to gain insights about properties as well as view a virtual tour of the complex and neighborhood information for each listing. The app will enable live chat with the landlord for more details. In addition, it is key for landlords to be able to use out app to post their listings and updates.

                                    </p>
                                </div>
                            </div>												
                        </div>
                    </div>	
                </section>
                
                <section class="testimonial-area relative section-gap" id="testimonial">
                    <div class="container">
                        <div class="row d-flex justify-content-center">
                            <div class="menu-content pb-60 col-lg-8">
                                <div class="title text-center">
                                    <h1 class="mb-10">Meet the Team!</h1>
                                    <p>
                                        Careful, Committed, Charming <sub>(Coffee-Fueled)</sub>. 
                                        <i>Roles are dynamic, since we all possess the relevant experience 
                                        in designing and developing the application.</i>
                                    </p>
                                </div>
                            </div>
                        </div>						
                        <div class="row">
                            <div class="active-testimonial">
                                <div class="single-testimonial item d-flex flex-row">
                                    <div class="thumb">
                                        <img src="img/t1.jpeg" alt=""/>
                                    </div>
                                    <div class="desc">
                                        <p>
                                            Designer and backend software engineer, software tester.
                                        </p>
                                        <h4 mt-30> <a target="_blank" href="https://github.com/irontarkus95">Michael Ali</a></h4>
                                        <h5 mt-30> 814005475 </h5>
                                    </div>
                                </div>
                                <div class="single-testimonial item d-flex flex-row">
                                    <div class="thumb">
                                        <img src="img/t2.jpeg" alt=""/>
                                    </div>
                                    <div class="desc">
                                        <p>
                                            Designer and backend software engineer, software tester.
                                        </p>
                                        <h4 mt-30><a target="_blank" href="https://github.com/princesszelda94">Gabriela Sewdhan</a></h4>
                                        <h5 mt-30> 813001696 </h5>
                                    </div>
                                </div>	
                                <div class="single-testimonial item d-flex flex-row">
                                    <div class="thumb">
                                        <img src="img/t3.jpeg" alt=""/>
                                    </div>
                                    <div class="desc">
                                        <p>
                                            Designer, frontend software engineer, business analyst/project manager.
                                        </p>
                                        <h4 mt-30><a target="_blank" href="https://github.com/UserIsh">Ishmael Mohammed</a></h4>
                                        <h5 mt-30> 816002470 </h5>
                                    </div>
                                </div>
                                <div class="single-testimonial item d-flex flex-row">
                                    <div class="thumb">
                                            
                                        <img src="img/t4.jpeg" alt=""/>
                                    </div>
                                    <div class="desc">
                                        <p>
                                            Designer, frontend software engineer, business analyst/project manager.
                                        </p>
                                        <h4 mt-30><h4 mt-30><a target="_blank" href="https://github.com/kadyseecharan">Kady Seecharan</a></h4></h4>
                                        <h5 mt-30> 816002036 </h5>
                                    </div>
                                </div>															
                            </div>					
                        </div>
                    </div>	
                </section>
            
            </div>
        );
    }
}

export default About;

// render(
//     <About/>,
//     mountNode
//   );