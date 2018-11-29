import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact, FaMobileAlt, FaMagic, FaThermometer } from 'react-icons/fa';
 
class timeline extends Component{
  render(){
    return (
      <div className="container-fluid">
       <style>{'body { background-color: #D3D3D3; }'}</style>
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
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Plant Disease Diagnoser</h3>
          <h4 className="vertical-timeline-element-subtitle">2 Month</h4>
          <p>
            <li>Plant Disease Detected and Diagnosis Developed</li>
            <li>Upload Plant Disease Diagnoser to the cloud</li>
            <li>Live camera feed viewable in app</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="NOW 31/05/2019"
          style={{ paddingRight: '78px' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaReact />}
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
          // icon={<SchoolIcon />}
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
          // icon={<SchoolIcon />}
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
          // icon={<SchoolIcon />}
        >
        <div className="vertical-timeline-context">
        {/* <style>{'.vertical-timeline-context { marginLeft: -630px; }'}</style> */}
          <h3 className="vertical-timeline-element-title">Perfecting PiDronics</h3>
          <h4 className="vertical-timeline-element-subtitle">AFTER LAUNCH</h4>
          <p>
          <li>Celebrate :D</li>
            <li>Follow up testimonials</li>
            <li>Take feedback and make your product even better</li>
          </p>
        </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          // icon={<StarIcon />}
        />
      </VerticalTimeline>
      </div>
    );
  }
}

export default timeline;