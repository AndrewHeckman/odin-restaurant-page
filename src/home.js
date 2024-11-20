import martyPng from "./images/marty-grah.png";

export function home() {
  const homeDiv = document.createElement("div");

  homeDiv.id = "home-content";

  homeDiv.appendChild(makeHero());

  return homeDiv;
}

function makeHero(){
  const hero = document.createElement("div");
  const logo = document.createElement("img");
  const heroText = document.createElement("div");
  const headline1 = document.createElement("h2");
  const headline2 = document.createElement("h2");
  const headline3 = document.createElement("h2");
  const text = document.createElement("p");

  hero.id = "hero";
  hero.className = "flex";

  logo.id = "hero-logo";
  logo.src = martyPng;

  heroText.id = "hero-text";

  headline1.textContent = "♫When your hunger caws";
  headline1.id = "headline1";
  headline1.className = "headline";

  headline2.textContent = "Come to Marty Grah's";
  headline2.id = "headline2";
  headline2.className = "headline";

  headline3.textContent = "Chicken!♫";
  headline3.id = "headline3";
  headline3.className = "headline";

  text.textContent = "Get you some fried chicken!";
  text.id = "headline-text";

  heroText.appendChild(headline1);
  heroText.appendChild(headline2);
  heroText.appendChild(headline3);
  heroText.appendChild(text);

  hero.appendChild(logo);
  hero.appendChild(heroText);

  return hero;
}