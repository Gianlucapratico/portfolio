import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub } from "react-icons/fa";
import "../App.css";

const projectsData = [
  {
    id: 1,
    title: "Capstone Project",
    description:
      "Questo è il mio capstone project per epicode ovvero un progetto full stack per la prenotazione e la recensione dei viaggi.",
    githubLink: "https://github.com/Gianlucapratico/CapstoneProject",
    imageSrc: process.env.PUBLIC_URL + "./assets/capstone.png",
  },

  {
    id: 2,
    title: "Bergamotto R.C.",
    description:
      "Consiste in un semplice sito incentrato su un tipico prodotto di Reggio Calabria, il bergamotto, che illustra questa specialità calabrese in tutti i suoi aspetti.",

    githubLink: "https://github.com/Gianlucapratico/bergamotto",
    imageSrc: process.env.PUBLIC_URL + "./assets/bergamotto.png",
  },
  {
    id: 3,
    title: "Weather-app",
    description:
      "Un applicazione per il meteo che ti consente di rimanere aggiornato per le condizioni meteorologiche di tutto il mondo.",
    githubLink: "https://github.com/Gianlucapratico/weather-app",
    imageSrc: process.env.PUBLIC_URL + "./assets/weatherapp.png",
  },
  {
    id: 4,
    title: "Calcolatrice",
    description:
      "Una semplice calcolatrice che permette di effettuare le 4 operazioni fondamentali",
    githubLink: "https://github.com/Gianlucapratico/Calcolatrice",
    imageSrc: process.env.PUBLIC_URL + "./assets/calcolatrice.png",
  },
  {
    id: 5,
    title: "Reactflix",
    description:
      "Reactflix è il clone della nota piattaforma Netflix. Realizzato appunto con react e bootstrap.",
    githubLink: "https://github.com/Gianlucapratico/reactflixpt2",
    imageSrc: process.env.PUBLIC_URL + "./assets/reactflix.png",
  },
];

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <div className="arrow-container"></div>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <div className="arrow-container"></div>
  </div>
);

const ProjectItem = ({ project }) => (
  <div className="project-item">
    <h3>{project.title}</h3>
    <p>{project.description}</p>

    {project.imageSrc ? (
      <img src={project.imageSrc} alt={project.title} />
    ) : project.videoSrc ? (
      // Se il progetto ha un video, usa l'elemento video
      <video width="100%" height="auto" controls>
        <source src={project.videoSrc} type="video/mp4" />
        Il tuo browser non supporta il tag video.
      </video>
    ) : null}

    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
      <FaGithub /> View on GitHub
    </a>
  </div>
);

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div id="projects" className="projects-container">
      <h2>Projects</h2>
      <Slider {...settings}>
        {projectsData.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
