import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact, FaThermometer, FaRobot, FaStar } from 'react-icons/fa';
import { GoTasklist, GoRocket, GoAlert, GoTools } from "react-icons/go";

const containerStyle = {
  paddingRight: "0 !important", 
  paddingLeft: "0 !important", 
  marginRight: "auto !important", 
  marginLeft: "auto !important",
  maxWidth:"300% !important",
  width: "1200%"
};

class timeline extends Component{
  render(){
    return (
  
      <div className = "container-fluid p-0">
        <div className = "test container-fluid p-0  grey lighten-1">
        <style>{'div.container mt-5, div.row mt-4 { background-color: #D3D3D3; padding-right: 0px !important; padding-left: 0 !important; margin-right: auto !important; margin-left: auto !important; width: 1200px; display: block !important; '}</style>
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
            <p>
              <li>Fully authenticated front-end Web App</li>
              <li>Multiple sensors can connect to a resilient Raspberry Pi server</li>
              <li>Data can be pushed to Firebase in realtime</li>
              <li>Sensor data visualization</li>
              <li>End of the day summary report of sensor data</li>
              <li>Notifies user if sensor values are too low/high</li>
            </p>
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
            <p>
              <li>Obtain EC and Dissolved Oxygen Probes</li>
              <li>Ensure New probes work with our app</li>
              <li>Test Monitoring system fully</li>
              <li>Develop go-to-market strategy</li>
              <li>Find promoters/affiliates</li>
              <li>Launch initial mobile app as a monitoring system</li>
            </p>
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
            <p>
              <li>Plant Disease Detecter and Diagnoser Developed</li>
              <li>Upload Plant Disease Diagnoser to the cloud</li>
              <li>Live camera feed viewable in app</li>
            </p>
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
            <p>
              <li>Hydroponics system will be automated to maintain a homeostatic environment</li>
              <li>This involves the use of sun lamps, misting, ventilation fans, arduino to release a controlled amount of the nutrient chemical for controlled EC and alkaline solution for pH.</li>
            </p>
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
            <p>
              <li>Beta test</li>
              <li>Start building anticipation</li>
              <li>Finalize launch content</li>
              <li>Gather reviews from beta testers</li>
            </p>
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
            <p>
              <li>Make launch a special event</li>
              <li>Keep sharing on social media and email list</li>
              <li>Continue contact with stakeholders</li>
            </p>
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
            <p>
            <li>Celebrate :D</li>
              <li>Follow up testimonials</li>
              <li>Take feedback and make your product even better</li>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaStar />}
          />
        </VerticalTimeline>
        </div>
      </div>
    );
  }
}

export default timeline;