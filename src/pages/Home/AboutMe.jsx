import { Link, useNavigate } from "react-router-dom";
import { Section } from "../../components/container";
import lam from "../../assets/img/lam.jpg";
export default function AboutMe() {
  return (
    <Section className="lam-bg-secondary" id="about-me">
      <div className="global-max-width">
        <div className="row text-justify ">
          {/* === About Me === */}
          <div className=" col-md-4">
            <div className="text-center text-sm-start">
              <h1 className=" fw-semibold d-inline d-md-none">
                About <span className="lam-text-accent">Me</span>
              </h1>
              <img
                src={lam}
                loading="lazy"
                alt="Leoanrdo Antonio Mamaril"
                className="img-fluid my-3 rounded-5"
              />
            </div>
            {/* === Email // Behance // LinkedIn === */}
          </div>
          <div className=" col-md-8  d-flex flex-column justify-content-center">
            <div className="mx-0 mx-sm-3 my-auto">
              <h2 className="">Leonardo Antonio Mamaril</h2>
              <h4 className="lam-text-accent">
                Frontend Developer | React Specialist in Training
              </h4>
              <p className="">
                Dynamic web developer currently mastering modern React
                ecosystems through *"React - The Complete Guide 2025 (incl.
                Next.js, Redux)"* on Udemy. Passionate about building
                interactive interfaces while expanding my full-stack
                capabilities.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <h5>Core Competencies:</h5>
                  <ul>
                    <li>
                      <span className="fw-bold me-1">Frontend:</span> HTML5,
                      CSS3, JavaScript (ES6+), React.js
                    </li>
                    <li>
                      <span className="fw-bold me-1">Backend:</span> PHP,
                      Node.js (Express)
                    </li>
                    <li>
                      <span className="fw-bold me-1">Databases:</span> MySQL,
                      Firebase
                    </li>
                    <li>
                      <span className="fw-bold me-1">Currently Learning:</span>{" "}
                      Next.js, Redux, Advanced React Patterns
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <h5>What I Offer:</h5>
                  <ul>
                    <li>Pixel-perfect responsive UIs</li>
                    <li>Interactive React applications </li>
                    <li>RESTful API integrations </li>
                    <li>Progressive enhancement strategies </li>
                    <li>Collaborative development approach </li>
                  </ul>
                </div>
              </div>
              <div className="row gy-2 ">
                <p align="left">
                  {" "}
                  <a
                    href="https://getbootstrap.com"
                    target="_blank"
                    rel="noreferrer"
                    className="me-2"
                  >
                    {" "}
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                      alt="bootstrap"
                      width="40"
                      height="40"
                      className="mt-3"
                    />{" "}
                  </a>{" "}
                  <a
                    href="https://www.w3schools.com/css/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 "
                  >
                    {" "}
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                      alt="css3"
                      width="40"
                      height="40"
                      className="mt-3"
                    />{" "}
                  </a>{" "}
                  <a
                    href="https://expressjs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 "
                  >
                    {" "}
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                      alt="express"
                      width="40"
                      height="40"
                      className="mt-3"
                    />{" "}
                  </a>{" "}
                  <a
                    href="https://www.w3.org/html/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 "
                  >
                    {" "}
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                      alt="html5"
                      width="40"
                      height="40"
                      className="mt-3"
                    />{" "}
                  </a>{" "}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 "
                  >
                    {" "}
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                      alt="javascript"
                      width="40"
                      height="40"
                      className="mt-3"
                    />{" "}
                  </a>{" "}
                  <a
                    href="https://www.mongodb.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 "
                  >
                    {" "}
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                      alt="mongodb"
                      width="40"
                      height="40"
                      className="mt-3"
                    />{" "}
                  </a>{" "}
                  <a
                    href="https://www.mysql.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 "
                  >
                    {" "}
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                      alt="mysql"
                      width="40"
                      height="40"
                      className="mt-3"
                    />{" "}
                  </a>{" "}
                  <a
                    href="https://nodejs.org"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 "
                  >
                    {" "}
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                      alt="nodejs"
                      width="40"
                      height="40"
                      className="mt-3"
                    />{" "}
                  </a>{" "}
                  <a
                    href="https://www.php.net"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 "
                  >
                    {" "}
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                      alt="php"
                      width="40"
                      height="40"
                      className="mt-3"
                    />{" "}
                  </a>{" "}
                  <a
                    href="https://www.postgresql.org"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 "
                  >
                    {" "}
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                      alt="postgresql"
                      width="40"
                      height="40"
                      className="mt-3"
                    />{" "}
                  </a>{" "}
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 "
                  >
                    {" "}
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                      alt="react"
                      width="40"
                      height="40"
                      className="mt-3"
                    />{" "}
                  </a>{" "}
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 "
                  >
                    {" "}
                    <img
                      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                      alt="tailwind"
                      width="40"
                      height="40"
                      className="mt-3"
                    />{" "}
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
