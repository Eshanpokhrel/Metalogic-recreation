import React from "react";
import "./Marquee.scss";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faAws,
  faMdb,
  faSketch,
  faDocker,
  faCloudflare,
  faNodeJs,
  faSass,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Marquee = () => {
  return (
    <div className="marquee_container">
      <div className="text-area">
        <div className="red-text">
          <h4>Tech stack</h4>
        </div>
        <div className="heading">
          <h1>Technology we behold</h1>
        </div>
        <div className="desc">
          Discover how we personalize your experience with customized features
          and effortlessly scale your system to match your growing needs.
        </div>
      </div>
      <div className="logos">
        <div className="logos-slide">
          <div><FontAwesomeIcon icon={faCss3} color="#28a4d9" /> CSS</div>
          <div><FontAwesomeIcon icon={faGitAlt} color="#ec4828" /> GIT</div>
          <div><FontAwesomeIcon icon={faHtml5} color="#f06529" /> HTML</div>
          <div><FontAwesomeIcon icon={faJsSquare} color="#efd81d" /> JS</div>
          <div><FontAwesomeIcon icon={faReact} color="#5ed4f4" /> React</div>
          <div><FontAwesomeIcon icon={faAws} color="orange" /> AWS</div>
          <div><FontAwesomeIcon icon={faMdb} color="green" /> MongoDB</div>
          <div><FontAwesomeIcon icon={faSketch} color="#111111" /> Sketch</div>
          <div><FontAwesomeIcon icon={faDocker} color="#60a5fa" /> Docker</div>
          <div><FontAwesomeIcon icon={faCloudflare} color="orange" /> CLoudflare</div>
          <div><FontAwesomeIcon icon={faNodeJs} color="green" /> NodeJS</div>
          <div><FontAwesomeIcon icon={faSass} color="#f47cbb" /> SASS</div>
          <div><FontAwesomeIcon icon={faVuejs} color="#16a34a" /> Vue</div>
        </div>

        <div className="logos-slide">
          <div><FontAwesomeIcon icon={faCss3} color="#28a4d9" /> CSS</div>
          <div><FontAwesomeIcon icon={faGitAlt} color="#ec4828" /> GIT</div>
          <div><FontAwesomeIcon icon={faHtml5} color="#f06529" /> HTML</div>
          <div><FontAwesomeIcon icon={faJsSquare} color="#efd81d" /> JS</div>
          <div><FontAwesomeIcon icon={faReact} color="#5ed4f4" /> React</div>
          <div><FontAwesomeIcon icon={faAws} color="orange" /> AWS</div>
          <div><FontAwesomeIcon icon={faMdb} color="green" /> MongoDB</div>
          <div><FontAwesomeIcon icon={faSketch} color="#111111" /> Sketch</div>
          <div><FontAwesomeIcon icon={faDocker} color="#60a5fa" /> Docker</div>
          <div><FontAwesomeIcon icon={faCloudflare} color="orange" /> CLoudflare</div>
          <div><FontAwesomeIcon icon={faNodeJs} color="green" /> NodeJS</div>
          <div><FontAwesomeIcon icon={faSass} color="#f47cbb" /> SASS</div>
          <div><FontAwesomeIcon icon={faVuejs} color="#16a34a" /> Vue</div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
