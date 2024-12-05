import './LeftSection.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import YoutubeIcon from '@mui/icons-material/YouTube'

function LeftSection() {
  return (
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
    )
}

export default LeftSection;
