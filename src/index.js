import "./styles.css";
import Logo from "./logo-iberika-trail.png";

// Create an element with an optional CSS id
function createElementWithId(tag, id) {
  const element = document.createElement(tag);
  if (id) {
    element.setAttribute("id", id);
  }

  return element;
}

// Create an element with an optional CSS class
function createElementWithClass(tag, className) {
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }

  return element;
}

// Create an HTML skeleton
const container = createElementWithId("div", "container");
const left = createElementWithId("div", "left");
const right = createElementWithId("div", "right");
const header = createElementWithId("div", "header");
const summary = createElementWithId("div", "summary");
const details = createElementWithId("div", "details");

// Create DOM architecture
right.appendChild(header);
right.appendChild(summary);
right.appendChild(details);

container.appendChild(left);
container.appendChild(right);

document.body.appendChild(container);

// Right 'div' elements creation
// Header
const title = createElementWithClass("h2", "title");
title.innerHTML = "Race Summary";

header.appendChild(title);

// Summary
const innerSquare = createElementWithId("div", "innerSquare");
const innerSquareLeft = createElementWithId("div", "innerSquareLeft");
const innerSquareRight = createElementWithId("div", "innerSquareRight");

// Adding logo race
const iberikaLogo = new Image();
iberikaLogo.src = Logo;
innerSquareLeft.appendChild(iberikaLogo);

innerSquare.appendChild(innerSquareLeft);
innerSquare.appendChild(innerSquareRight);

summary.appendChild(innerSquare);

// Details
