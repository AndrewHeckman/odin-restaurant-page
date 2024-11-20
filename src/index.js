import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

const nav = document.querySelector("nav");
const content = document.querySelector("#content");

nav.addEventListener("click", navClick);

content.appendChild(home());

function navClick(event) {
  if (content.childElementCount > 0)  content.removeChild(content.firstChild);

  switch (event.target.id) {
    case "home-button": {
      content.appendChild(home());
      break;
    }
    case "menu-button": {
      content.appendChild(menu());
      break;
    }
    case "about-button": {
      content.appendChild(about());
      break;
    }
    default:
      break;
  }
}