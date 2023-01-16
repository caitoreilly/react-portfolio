import React from "react";
import Project from "../Project";
import noteTaker from "../../assets/images/note-taker-pic.png";
import weatherDashboard from "../../assets/images/weather-dashboard.png";
import workDayScheduler from "../../assets/images/work-day-scheduler-image.png";
import concertCatalog from "../../assets/images/concertcatalog.png";
import pawPals from "../../assets/images/pawpals.png";
import codeQuiz from "../../assets/images/codequiz.png";
import deployedSkincare from "../../assets/images/deployed-skincare.png";

function Portfolio() {
  const myProjects = [
    {
      id: 1,
      title: "Note Taker",
      img: noteTaker,
      text: "This app was created to help a user take and save notes.",
      deployedUrl: "https://co-notetaker.herokuapp.com/",
      url: "https://github.com/caitoreilly/note-taker.git",
    },
    {
      id: 2,
      title: "Weather Dashboard",
      img: weatherDashboard,
      text: "This app allows users to search for daily forecasts and five day forecasts based on location.",
      deployedUrl: "https://caitoreilly.github.io/weather-dashboard/",
      url: "https://github.com/caitoreilly/weather-dashboard.git",
    },
    {
      id: 3,
      title: "Work Day Scheduler",
      img: workDayScheduler,
      text: "This app allows users to schedule and save events at each hour of the day.",
      deployedUrl: "https://caitoreilly.github.io/work-day-scheduler/",
      url: "https://github.com/caitoreilly/work-day-scheduler.git",
    },
    {
      id: 4,
      title: "Concert Catalog",
      img: concertCatalog,
      text: "Concert Catalog allows users to search for concerts near them and displays the concerts on a map.",
      deployedUrl: "https://amiller0806.github.io/java-near-me/",
      url: "https://github.com/amiller0806/java-near-me.git",
    },
    {
      id: 5,
      title: "Paw Pals",
      img: pawPals,
      text: "Paw Pals allows NYC residents to search for dog mates for their own dog based on borough, breed, age, and favorite activity.",
      deployedUrl: "https://pawpals22.herokuapp.com/",
      url: "https://github.com/caitoreilly/paw-pals.git",
    },
    {
      id: 6,
      title: "Code Quiz",
      img: codeQuiz,
      text: "This app is a timed quiz with coding questions. Scores are saved and recorded after the quiz is completed by each user.",
      deployedUrl: "https://caitoreilly.github.io/code-quiz/",
      url: "https://github.com/caitoreilly/code-quiz.git",
    },
    {
      id: 7,
      title: "Deployed Skincare",
      img: deployedSkincare,
      text: "This app is a search engine for skincare products. Users can search for and save products based on their individual skincare needs!",
      deployedUrl: "https://whispering-wildwood-03481.herokuapp.com/",
      url: "https://github.com/valkim55/project-three",
    },
  ];

  return (
    <section>
      <h1 style={{ textAlign: "center" }}>My Projects</h1>
      <div className="d-flex flex-wrap justify-content-between">
        {myProjects.map((project) => (
          <Project
            title={project.title}
            key={project.id}
            image={project.img}
            text={project.text}
            appLink={project.deployedUrl}
            repoLink={project.url}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
