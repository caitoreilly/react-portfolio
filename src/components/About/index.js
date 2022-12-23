import React from "react";
import caitPic from "../../assets/images/profilepicture.jpg";

function About() {
  return (
    <section>
      <h1 style={{textAlign: "center"}}>About</h1>
      <div style={{display: "flex"}}>
        <img
          src={caitPic}
          style={{ width: "22%", margin: "1em", borderRadius: "5px" }}
          alt="profile pic"
        />
        <h3>
          Welcome! My name is Caitlin O'Reilly and I am a budding fullstack
          software developer. For the past seven years, I have taught third
          grade in a public elementary school in New Jersey. My goal is to use
          my vast experiences from the classroom and my deep knowledge of
          elementary school curriculum and learning standards to delve into the
          world of educational technology. I am particularly interested in
          creating educational apps and websites to meet the needs of K-4
          elementary school students in the area of mathematics.
        </h3>
      </div>
    </section>
  );
}

export default About;
