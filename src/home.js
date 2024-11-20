import martyPng from "./images/marty-grah.png";

export function home() {
  const homeDiv = document.createElement("div");

  homeDiv.id = "home-content";

  homeDiv.appendChild(makeHero());
  homeDiv.appendChild(makeOffers());

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
  hero.className = "flex home-div";

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

function makeOffers(){
  const offerDiv = document.createElement("div");
  const offerHeading = document.createElement("h2");
  const offerWrapper = document.createElement("div");
  const meal = document.createElement("div");
  const mealHeading = document.createElement("h2");
  const mealText = document.createElement("p");
  const junior = document.createElement("div");
  const juniorHeading = document.createElement("h2");
  const juniorText = document.createElement("p");
  const handshake = document.createElement("h2");

  offerDiv.id = "offers";
  offerDiv.className = "home-div";

  offerWrapper.id = "offer-wrapper";
  offerWrapper.className = "flex";

  offerHeading.id = "offer-heading";
  offerHeading.textContent = "Special offers";

  offerDiv.appendChild(offerHeading);

  meal.id = "meal";

  mealHeading.id = "meal-heading";
  mealHeading.textContent = "Marty Meal";
  meal.appendChild(mealHeading);

  mealText.id = "meal-text";
  mealText.textContent = "Upgrade to a Marty Meal and get 2 sides and a drink or gravy!"
  meal.appendChild(mealText);

  offerWrapper.appendChild(meal);

  junior.id = "junior";

  juniorHeading.id = "junior-heading";
  juniorHeading.textContent = "Marty Junior";
  junior.appendChild(juniorHeading);

  juniorText.id = "junior-text";
  juniorText.textContent = "Perfect for the little ones! Comes with a Marty Barbie, Marty Transformer, or extra chicken tender!";
  junior.appendChild(juniorText);

  offerWrapper.appendChild(junior);

  offerDiv.appendChild(offerWrapper);

  handshake.id = "handshake";
  handshake.textContent = "Every purchase comes with a handshake from the man himself!";

  offerDiv.appendChild(handshake);

  return offerDiv;
}