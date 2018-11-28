import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact, WorkIcon } from 'react-icons/fa';
 
class timeline extends Component{
  render(){
    return (
      <div className="container-fluid"> <style>{'body { background-color: #D3D3D3; }'}</style>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date ="NOW 30/11/2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
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
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={ <FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
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
          date="NOW 30/11/2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
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
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>
            <li>Plant Disease Detected and Diagnosis Developed</li>
            <li>Upload Plant Disease Diagnoser to the cloud</li>
            <li>Live camera feed viewable in app</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>
            <li>Hydroponics system will be automated to maintain a homeostatic environment</li>
            <li>This involves the use of sun lamps, misting, ventilation fans, arduino to release a controlled amount of the nutrient chemical for controlled EC and alkaline solution for pH.</li>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          // icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
          <p>
          <li>Beta test</li>
            <li>Start building anticipation</li>
            <li>Finalize launch content</li>
            <li>Gather reviews from beta testers</li>
          </p>
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