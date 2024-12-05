import { useState } from 'react'
import './App.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import YoutubeIcon from '@mui/icons-material/YouTube'

function App() {
  const [count, setCount] = useState(0)

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

  const loremIpsum = `
    Lorem ipsum odor amet, consectetuer adipiscing elit. Diam augue viverra dictum non augue diam. Vulputate sodales aenean dui lacinia iaculis. Nunc volutpat duis consequat himenaeos magna sed auctor. Aliquam mus nullam id; viverra morbi id vel vulputate. Lacus ut scelerisque maximus lorem mattis ornare. Semper erat efficitur tristique justo vestibulum tortor ipsum potenti. Sed platea porta magnis nibh egestas class.=
Cursus phasellus cubilia, nisl penatibus arcu elementum fringilla aliquet. Praesent augue pharetra magnis pulvinar fringilla finibus fermentum. Malesuada libero aenean vivamus lobortis dolor lobortis aliquet maximus. Scelerisque leo per lectus lectus egestas. Rhoncus diam curae pulvinar semper auctor rhoncus iaculis sollicitudin orci. Suspendisse ultricies consequat tincidunt et ligula suscipit faucibus ridiculus.
Sagittis potenti etiam dis posuere eros fusce. Turpis curabitur sociosqu neque dis; consectetur efficitur blandit aliquet. Facilisi ridiculus suspendisse mauris commodo ut etiam posuere pellentesque proin. Risus tortor euismod libero elementum mattis pellentesque sit. Varius cubilia faucibus mi sed sodales libero ac conubia ullamcorper. Ligula litora ridiculus parturient turpis aenean bibendum quis ornare id. Nostra tortor pellentesque ridiculus ut, non tincidunt. Ultrices sem platea tincidunt sed penatibus condimentum ullamcorper sem.
Consectetur metus aliquet aptent cras volutpat. Tempor pulvinar lectus conubia dictum ut lacus per lacus. Gravida hendrerit adipiscing posuere senectus nulla. In dis quisque purus scelerisque sollicitudin. Laoreet netus est mollis vitae erat volutpat phasellus! Felis vivamus pulvinar risus lacus nascetur felis urna accumsan tellus. Et tortor sociosqu primis posuere placerat ligula sodales. Elit pretium ad sem porta justo. Eget eu torquent sit natoque tortor phasellus mus egestas. Nostra cursus tempor sapien libero fringilla.
Parturient rutrum cursus tempor quam risus facilisi quis? Penatibus pretium senectus viverra primis quam varius a. Eget metus luctus semper nullam finibus. Posuere ante leo mattis quam proin nam egestas rutrum. Mauris class morbi eu dis tempus. Primis convallis vitae ullamcorper tincidunt pretium adipiscing iaculis at. Cubilia habitasse parturient auctor duis libero parturient penatibus. Blandit natoque odio platea vitae; euismod etiam curabitur vehicula.
  `

  return (
    <div className="App">
      <div className="left-section">
        <div>
          <h1>John Brennan</h1>
          <h3>Senior Software Engineer</h3>
          <h5>Crafting innovative software solutions with a hacker's edge, 
              driven by passion for growth, creativity, 
              and excellence in development.</h5>
          <h6>ABOUT</h6>
          <h6>EXPERIENCE</h6>
          <h6>PROJECTS</h6>
        </div>
        <div className="contact-me">
          <a href={"https://github.com/jbrennan414"}><GitHubIcon color="white" /></a>
          <a href={"https://www.linkedin.com/in/jbrennan414/"}><LinkedInIcon /></a>
          <a href="https://www.youtube.com/@jbrennan414"><YoutubeIcon /></a>
          <a href="mailto:brennanj414@gmail.com"><EmailIcon /></a>
        </div>
        
      </div>
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
              <p className="my-title">GIS Specialist, </p>
              <p className="job-description">{fluentstreamSummary}</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default App
