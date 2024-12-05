import './RightSection.css';
import Projects from './Projects';


function RightSection() {

  const fluentstreamSummary = `
    Developed and maintained API integrations to streamline 
    tenant migration and Salesforce ticket management, 
    improving organizational efficiency. Built and supported 
    a nationwide VoIP platform serving over 100,000 devices with 
    99.99% uptime, while implementing Datadog for proactive 
    service health monitoring and alerts. Collaborated with 
    C-Suite leadership to design and deploy a robust Terms of 
    Service tracking system, ensuring comprehensive user approval
    records with detailed audit logs.
  `

  const gisDescription = `
    Collaborated with city councils across Nebraska and Colorado to 
    evaluate risks from spatial hazards such as flooding and dam or levee 
    failure. Co-authored 10 FEMA-approved Hazard Mitigation Plans, 
    securing 75% FEMA cost-share funding for future community resilience projects.
  `

  return (
    <div className="right-section">
        <h5>I’m a software engineer with 6+ years in the VoIP industry, 
        known for implementing impactful solutions, like cutting 
        call recording storage costs by 30% in three weeks. I thrive 
        on collaborating across teams and with C-suite leaders to 
        align technical projects with business goals.
        </h5>
        <h5>Skilled in monitoring system health with Datadog and 
        building efficient deployment pipelines, I ensure reliability
        and streamline software delivery. My focus is on creating 
        scalable, cost-effective solutions that drive measurable results.
        </h5>
        <div className="project">
            <h5 className="date"> 2018 - PRESENT</h5>
            <div>
                <p className="my-title">Senior Software Engineer, FluentStream</p>
                <p className="job-description">{fluentstreamSummary}</p>
            </div>
        </div>
        <div className="project">
            <h5 className="date"> 2014 - 2017</h5>
            <div>
                <p className="my-title">GIS Specialist, JEO Consulting Group</p>
                <p className="job-description">{gisDescription}</p>
            </div>
        </div>  
        <Projects />
    </div>
  )
}

export default RightSection;
