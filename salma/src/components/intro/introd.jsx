import React from "react";
import "./introd.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
/* import boy from "../../img/boy.png" */
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Salma Saidi</span>
          <span>Computer Science Engineer And Junior Full Stack Developer</span>
        </div>

        <button className="button i-button">Hire</button>
        <div className="i-cons">
          <a href="https://github.com/salma594">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/salma-saidi-312a71249/">
            <img src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/ssaidik1/?hl=fr">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        {/* <img src={boy} alt="" /> */}
        <img src={glassesimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer " />
        </div>
        <div style={{ top: "23.3rem", left: "0.5rem" }}>
          <FloatingDiv image={thumbup} txt1="CS" txt2="Engineer" />
        </div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            backgroud: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
