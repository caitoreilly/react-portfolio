import React from "react";
import Project from "../Project";
import noteTaker from "../../assets/images/note-taker-pic.png";

function Portfolio() {
  const myProjects = [
    { id: 1, title: "Project 1", img: noteTaker},
    { id: 2, title: "Project 2" },
    { id: 3, title: "Project 3" },
    { id: 4, title: "Project 4" },
    { id: 5, title: "Project 5" },
    { id: 6, title: "Project 6" },
  ];

  return (
    <div className="d-flex">
      {myProjects.map((project) => (
        <Project title={project.title} key={project.id} image={project.img} />
      ))}
    </div>
  );
}

export default Portfolio;
