import './Projects.css'
import logo from '../assets/img/ski-bunks.jpg'; // with import



function Projects() {

    const projects = [
        {
            title: "SkiBunks 🏔️",
            description: "This is a projesdjofdjwaofiewoaifje;waofijew;aoifjew;oajfew;aoijfew;oaijfewa;oijct",
            // image: skibunks,
            link: ""
        },
        {
            title: "SkiScraper ⛷️", 
            description: "This is a projesdjofdjwaofiewoaifje;waofijew;aoifjew;oajfew;aoijfew;oaijfewa;oijct",
            image: "",
            link: ""
        }, 
        {
            title: "WildRydes 🦄",
            description: "This was an AWS tutorial to learn the basics of a full stack app on AWS. If you need to book a unicorn reservation, this is the app for you.",
            image: "",
            link:""
        },
        {
            title: "FindMyFourteener 🏔️",
            description: "Do you live in Denver and need to hike a 14'er? This is the site for you!",
            image: "",
            link: ""
        },


    ]

    return (
        <div>
            {projects.map((project, i) => (
                <div key={i} className="side-projects">
                    <img src={logo} />
                    <div>
                        <p className="my-title">{project.title}</p>
                        <p className="job-description">{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default Projects;
