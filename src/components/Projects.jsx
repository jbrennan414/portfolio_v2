import './Projects.css'
import skiBunksLogo from '../assets/img/ski-bunks.jpg'; 
import skiScraperLogo from '../assets/img/skiscraper.jpg';
import wildRydesLogo from '../assets/img/wildrydes.png';
import findMyFourteenerLogo from '../assets/img/findmyfourteener.png';


function Projects() {

    const handleClick = (project) => {
        window.open(project.link, "_blank");
    }

    const projects = [
        {
            id: "skibunks",
            title: "SkiBunks 🏔️",
            description: `SkiBunks is a rental reservation system I built for my buddies 
                and I, in our ski house during the winter of 2023/24`,
            image: skiBunksLogo,
            link: "https://www.youtube.com/watch?v=qRyWRSH-Dkk"
        },
        {
            id: "skiscraper",
            title: "SkiScraper ⛷️", 
            description: `This was a passion project I worked on with a colleague after my ski 
                pass began requiring reservations to ski. This bot scraped reservation sites 
                and would send me a Telegram message if I had an available spot`,
            image: skiScraperLogo,
            link: "https://www.youtube.com/watch?v=4CnmTISvu3A"
        }, 
        {
            id: "currensee",
            title: "CurrenSee 💰",
            description: "CurrenSee is an iOS currency exchange rate app I built in 2018",
            link: "https://www.youtube.com/watch?v=y9hC8f9dm_U"
        },
        {
            id: "findmyfourteener",
            title: "FindMyFourteener 🏔️",
            description: "Do you live in Denver and need to hike a 14'er? This is the site for you!",
            image: findMyFourteenerLogo,
            link: "https://findmyfourteener.com"
        },
    ]

    return (
        <div>
            {projects.map((project, i) => (
                <div key={i} className="side-projects" onClick={() => handleClick(project)} >
                    <img src={project.image} />
                    <div>
                        <p className="job-title">{project.title}</p>
                        <p className="job-description">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default Projects;
