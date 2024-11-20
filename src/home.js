import martyPng from "./images/marty-grah.png";

export function home() {
  const homeDiv = document.createElement("div");

  homeDiv.id = "home-content";

  homeDiv.appendChild(makeHero());
  homeDiv.appendChild(makeOffers());
  homeDiv.appendChild(makeTestimony());

  return homeDiv;
}

function makeHero() {
  const hero = document.createElement("div");
  const logo = document.createElement("img");
  const heroText = document.createElement("div");
  const headline1 = document.createElement("h2");
  const headline2 = document.createElement("h2");
  const headline3 = document.createElement("h2");

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

  heroText.appendChild(headline1);
  heroText.appendChild(headline2);
  heroText.appendChild(headline3);

  hero.appendChild(logo);
  hero.appendChild(heroText);

  return hero;
}

function makeOffers() {
  const offerDiv = document.createElement("div");
  const offerHeading = document.createElement("h2");
  const offerWrapper = document.createElement("div");
  const meal = document.createElement("div");
  const mealHeading = document.createElement("h3");
  const mealText = document.createElement("p");
  const junior = document.createElement("div");
  const juniorHeading = document.createElement("h3");
  const juniorText = document.createElement("p");
  const handshake = document.createElement("h3");

  offerDiv.id = "offers";
  offerDiv.className = "home-div";

  offerHeading.id = "offer-heading";
  offerHeading.textContent = "Special offers";

  offerDiv.appendChild(offerHeading);

  offerWrapper.id = "offer-wrapper";
  offerWrapper.className = "flex home-wrapper";

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

function makeTestimony() {
  const testimony = document.createElement("div");
  const testimonyHeading = document.createElement("h2");
  const testimonyWrapper = document.createElement("div");
  const testimony1 = document.createElement("div");
  const quote1 = document.createElement("q");
  const quoted1 = document.createElement("p");
  const testimony2 = document.createElement("div");
  const quote2 = document.createElement("q");
  const quoted2 = document.createElement("p");
  const etc = document.createElement("h3");

  testimony.id = "testimony";
  testimony.className = "home-div";

  testimonyHeading.id = "testimony-heading";
  testimonyHeading.textContent = "Hear from our satisfied customers:";

  testimonyWrapper.id = "testimony-wrapper";
  testimonyWrapper.className = "flex home-wrapper";

  testimony1.id = "testimony-1";

  quote1.id = "quote-1";
  quote1.textContent = "It's food!";

  quoted1.id = "quoted-1";
  quoted1.textContent = "— A satisfied customer";

  testimony2.id = "testimony-2";

  quote2.id = "quote-2";
  quote2.textContent = "They tried their best!";

  quoted2.id = "quoted-2";
  quoted2.textContent = "— A different satisfied customer";

  etc.id = "etc";
  etc.textContent = "Et cetera!";

  testimony1.appendChild(quote1);
  testimony1.appendChild(quoted1);

  testimony2.appendChild(quote2);
  testimony2.appendChild(quoted2);

  testimonyWrapper.appendChild(testimony1);
  testimonyWrapper.appendChild(testimony2);

  testimony.appendChild(testimonyHeading);
  testimony.appendChild(testimonyWrapper);
  testimony.appendChild(etc);

  return testimony;
}