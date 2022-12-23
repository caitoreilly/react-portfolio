import React from "react";
import resumePDF from "../../assets/downloads/caitlinresume.pdf";
import resumePic from "../../assets/images/resume-pic.png";

function Resume() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Resume</h1>
      <a href={resumePDF} download>
        <img src={resumePic} width="800px"></img>
      </a>
    </div>
  );
}

export default Resume;
