import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

const nav = document.querySelector("nav");
const content = document.querySelector("#content");

nav.addEventListener("click", navClick);

content.appendChild(home());

function navClick(event) {
  content.removeChild(content.firstChild);

  switch (event.target.id) {
    case "home": {
      content.appendChild(home());
      break;
    }
    case "menu": {
      content.appendChild(menu());
      break;
    }
    case "about": {
      content.appendChild(about());
      break;
    }
    default:
      break;
  }
}