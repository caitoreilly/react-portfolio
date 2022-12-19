import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="https://www.github.com/caitoreilly" target="_blank">
          <img
            src={require("../../assets/images/github.png")}
            alt="Github"
            className="logoPic"
          ></img>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/caitlinoreilly" target="_blank">
          <img
            src={require("../../assets/images/linkedin.png")}
            alt="LinkedIn"
            className="logoPic"
          ></img>
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/caittoreilly/?hl=en" target="_blank">
          <img
            src={require("../../assets/images/insta.jpg")}
            alt="Insta"
            className="logoPic"
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
