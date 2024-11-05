import React from 'react'
import '../App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Header() {
  return (
        <div className="firstHeader">
            <div className="headerText">
                <h1>JOHN BRENNAN</h1>
                <h4>fullstack developer</h4>
            </div>
            <div id="icons">
                <a href={"https://github.com/jbrennan414"}><GitHubIcon /></a>
                <a href={"https://twitter.com/jbrennan414"}><TwitterIcon /></a>
                <br />
                <a href={"https://www.linkedin.com/in/jbrennan414/"}><LinkedInIcon /></a>
                <a href="mailto:brennanj414@gmail.com"><EmailIcon /></a>
            </div>
        </div>  
    )
}
