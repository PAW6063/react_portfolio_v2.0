import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./About.css";

export default function About() {
  return (
    <div className="about">
      <img
        src="./assets/images/me.jpg"
        className="about-picture"
        alt="This is me."
      />

      <h1 className="main-header">{"<About Me/>"}</h1>
      <p className="about-p p-1">
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

      <h2 className="about-h h-2">Things I know...</h2>
      <p className="about-p p-2">
        Through completing the UT Austin coding bootcamp course I gain the
        knowledge of Full-Stack development with skills such as, ( HTML, CSS,
        Javascript, Node.js, Express.js, React.js, MongoDB, mySQL, GraphQL)
        giving me all the knowledge to build full stack web applications. From
        all the{" "}
        <a
          className="about-github-projects"
          href="https://github.com/PAW6063?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          projects
        </a>{" "}
        experience I gained in the course I have begun to favor back-end over
        front-end development. An earlier educational experience, I attended UT
        Arlington pursuing computer engineering where I learned C , C++, along
        with object-oriented programming practices. Giving me a solid foundation
        in programming, and a new perspective on how to solve problems.
        <br></br>
        <br></br>
        Now I am currently working on expanding my skill set by learning new
        programming languages and technologies in my free time.
      </p>

      <h2 className="about-h h-3">What my interest are...</h2>
      <p className="about-p p-3">
        I love learning new technologies to be able to apply to projects, but my
        passion is virtual reality with all of the potiental it has! Virtual
        Reality ( VR ) is what lead me down the path of programming and
        development that I have taken with the goal of developmenting VR.
      </p>
    </div>
  );
}
