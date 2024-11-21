export function menu() {
  const menuDiv = document.createElement("div");
  const mains = makeMenuSection("Mains", "menu-mains");
  const sides = makeMenuSection("Sides", "menu-sides");
  const drinks = makeMenuSection("Drinks", "menu-drinks");
  const desserts = makeMenuSection("Desserts", "menu-desserts");

  menuDiv.id = "menu-content";

  mains.appendChild(makeMenuItem("Chicken", "$8", "chicken", "Your choice of 4, 8, 12, 16, 24, 32, or 64 pieces."));
  mains.appendChild(makeMenuItem("Marty Meal", "$8", "meal", "Includes your choice of chicken count, plus two sides and your choice of a drink or gravy."))

  sides.appendChild(makeMenuItem("Mash Taters", "$1", "taters"));
  sides.appendChild(makeMenuItem("Coleslaw", "$1", "slaw"));
  sides.appendChild(makeMenuItem("Corn Corns", "$1", "corns"));
  sides.appendChild(makeMenuItem("Buttered Hamburger Buns", "$1", "buns"));
  sides.appendChild(makeMenuItem("Breaded French Fries", "$1", "fries"));
  sides.appendChild(makeMenuItem("Honeyed Onions", "$1", "onions"));
  sides.appendChild(makeMenuItem("Deep-Fried Toast", "$1", "toast"));
  sides.appendChild(makeMenuItem("Hushies w/ Crans", "$1", "hushies"));
  sides.appendChild(makeMenuItem("Banana Pudding w/ Corn", "$1", "pudding"));
  sides.appendChild(makeMenuItem("Marty's Signature 17-Flavor Gravy", "$1", "gravy"));

  drinks.appendChild(makeMenuItem("Sweet Tea", "$1", "tea"));
  drinks.appendChild(makeMenuItem("Diet Coke", "$1", "coke"));

  desserts.appendChild(makeMenuItem("Milkshake", "$1.50", "shake", "Chicken flavor!"));

  menuDiv.appendChild(mains);
  menuDiv.appendChild(sides);
  menuDiv.appendChild(drinks);
  menuDiv.appendChild(desserts);
  return menuDiv;
}

/**
 * Creates and returns a div with class="menu-section" and id={id}
 * @param {string} id Section id
 * @returns {HTMLElement}
 */
function makeMenuSection(name, id) {
  const section = document.createElement("div");
  const heading = document.createElement("h2");

  section.id = id;
  section.className = "menu-section";

  heading.id = id + "-heading";
  heading.className = "menu-heading"
  heading.textContent = name;

  section.appendChild(heading);

  return section;
}

function makeMenuItem(name, price, id, desc) {
  const item = document.createElement("div");
  const itemName = document.createElement("span");
  const itemLine = document.createElement("span");
  const itemPrice = document.createElement("span");
  const itemDesc = document.createElement("p");

  id = id + "-menu-item";

  item.id = id;
  item.className = "menu-item flex";

  itemName.id = id + "-name";
  itemName.className = "menu-item-name";
  itemName.textContent = name;

  itemLine.id = id + "-line";
  itemLine.className = "menu-item-line";

  itemPrice.id = id + "-price";
  itemPrice.className = "menu-item-price";
  itemPrice.textContent = price;

  item.appendChild(itemName);
  item.appendChild(itemLine);
  item.appendChild(itemPrice);

  if (typeof desc != "undefined") {
    itemDesc.id = id + "-description";
    itemDesc.className = "menu-item-description";
    itemDesc.textContent = desc;
    item.appendChild(itemDesc);
  }
  else itemDesc.remove();

  return item;
}