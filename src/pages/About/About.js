import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "../../logo.png";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <img />
      <h1>{"<About Me/>"}</h1>
      <p>
        Full stack web developer recently completed UT Austin coding bootcamp to
        receive my certificate. Through completing this bootcamp, I have become
        familiar with technologies such as MongoDB, React.js, JavaScript, CSS,
        and MySQL. Also, with previous knowledge in C, and C++ I have the
        foundation to start on a path of success for achieving my future career.
        While working on projects with different groups I have realized I have
        the willingness to step outside my comfort from backend development to
        strengthen my skill in something I struggled with such as CSS giving me
        new insights. I look forward to honing my skills through new projects as
        my post bootcamp journey begins.
      </p>
      <h2>Things I know...</h2>
      <p>
        Through completing the UT Austin coding bootcamp course I gain the
        knowledge of Full-Stack development. Skills such as ( HTML, CSS,
        Javascript, Node.js, Express.js, React.js, MongoDB, mySQL, GraphQL, ex.
        ) giving me all the knowledge to build full stack web applications. From
        all the{" "}
        <a
          className="github-projects"
          href="https://github.com/PAW6063?tab=repositories"
          target="_blank"
        >
          projects
        </a>{" "}
        complete in the course I have began to favor back-end development.
        <br></br>
        <br></br>I also took computer engineering classes at UT Arlington where
        I learned C , C++, along with object-oriented programming practices.
        Giving me a solid foundation in programming before I entered the coding
        bootcamp.
        <br></br>
        <br></br>
        Now I am currently working on expanding my skill set by learning C# and
        .NET on my own through online resources.
      </p>
      <h2>What my interest are...</h2>
      <p>
        I love learning to technologies to be able to apply to new projects, but
        my passion is virtual reality with all of the potiental it has! Virtual
        Reality ( VR ) is what lead me down the path of programming and
        development that I have taken with the goal of developmenting VR.
      </p>
    </div>
  );
}
