export function about(){
  const aboutDiv = document.createElement("div");

  aboutDiv.id = "about-content";
  // contact info div
    // tel p
    // hours p
    // location p

  aboutDiv.appendChild(makeStory());
  aboutDiv.appendChild(makeMission());
  aboutDiv.appendChild(makeContact());
  return aboutDiv;
}

function makeStory() {
  const story = document.createElement("div");
  const heading = document.createElement("h2");
  const text = document.createElement("p");

  story.id = "story";
  story.className = "about-div";

  heading.id = "story-heading";
  heading.className = "about-heading";
  heading.textContent = "Our Story";

  text.id = "story-text";
  text.className = "";
  text.textContent = "For decades, Marty Grah's Chicken has been delighting kids and adults alike as one of Dallas's staple eateries. After their opening in 1972, their $8 64-piece combo became not only their best seller but a cultural landmark of Dallas locals and tourism.";

  // Our competitor may be closed on Sundays, but Marty Grah's is open, open, open. That's right folks, we're open on Sundays to serve you the mouth-watering fried chicken you've known and loved for generations. All purchases come with a free handshake from Marty. That's right, Marty is here and ready to say hello to all of his mouth-watering fans. So come on down and say hello to me and the missus, and bring the kids to play in our state-of-the-art fun fun funland playground. Looking for a hot date night? Bring your special sweet to enjoy a Marty meal for two. There's no craving that can't be cured with Marty's Chicken, but don't forget to hit your spot with one of our Marty sides.

  story.appendChild(heading);
  story.appendChild(text);

  return story;
}

function makeMission() {
  const mission = document.createElement("div");
  const missionHeading = document.createElement("h2");
  const missionText = document.createElement("p");

  mission.id = "mission";
  mission.className = "about-div";

  missionHeading.id = "mission-heading";
  missionHeading.className = "about-heading";
  missionHeading.textContent = "Our Mission";

  missionText.id = "mission-text";
  missionText.className = "";
  missionText.textContent = "Here at Marty Grah's chicken, we believe in the American dream and the American way. That's why we make sure to use every part of the chicken in our kitchens, and pass the savings on to you. We're serving mouth-watering chicken at mouth-watering prices, because we care.";

  mission.appendChild(missionHeading);
  mission.appendChild(missionText);

  return mission;
}

function makeContact() {
  const contact = document.createElement("div");
  const contactHeading = document.createElement("h2");
  const phone = document.createElement("p");
  const hours = document.createElement("p");
  const address = document.createElement("p");

  contact.id = "contact";
  contact.className = "about-div";

  contactHeading.id = "contact-heading";
  contactHeading.className = "about-heading";
  contactHeading.textContent = "Contact Us";

  phone.id = "contact-phone";
  phone.className = "";
  phone.textContent = "(555) 555-5555";

  hours.id = "contact-hours";
  hours.className = "";
  hours.textContent = "Mon-Sun: 6am - 10pm";

  address.id = "contact-address";
  address.className = "";
  address.textContent = "1837 Shrove Road Street";

  contact.appendChild(contactHeading);
  contact.appendChild(phone);
  contact.appendChild(hours);
  contact.appendChild(address);

  return contact;
}
