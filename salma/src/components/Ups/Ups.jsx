import { Component } from "react";
import "./Ups.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-scroll'
export class Up extends Component {
  render() {
    return (
        <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
      <a id="up" href="#">
        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
      </a>
      </Link>
    );
  }
}
