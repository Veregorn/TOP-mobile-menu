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

// Adding content to innerSquareRight
const raceName = createElementWithClass("h3","subtitle");
raceName.innerHTML = "Iberika Trail Torrelaguna";

const distance = createElementWithClass("p","bolded");
distance.innerHTML = "26,5 Km";

innerSquareRight.appendChild(raceName);
innerSquareRight.appendChild(distance);

innerSquare.appendChild(innerSquareLeft);
innerSquare.appendChild(innerSquareRight);

summary.appendChild(innerSquare);

// Details
const raceDetails = createElementWithClass("h3","bolded");
raceDetails.innerHTML = "Race Details";

details.appendChild(raceDetails);

const dataDiv = createElementWithId("div","dataDiv");
const keysDiv = createElementWithId("div","keysDiv");
const valuesDiv = createElementWithId("div","valuesDiv");

dataDiv.appendChild(keysDiv);
dataDiv.appendChild(valuesDiv);

details.appendChild(dataDiv);

// Keys
const locationKey = createElementWithClass("p","key");
locationKey.innerHTML = "Location: ";

const dateKey = createElementWithClass("p","key");
dateKey.innerHTML = "Date: ";

const timeKey = createElementWithClass("p","key");
timeKey.innerHTML = "Time: ";

const distKey = createElementWithClass("p","key");
distKey.innerHTML = "Distance: ";

const ascentElevKey = createElementWithClass("p","key");
ascentElevKey.innerHTML = "A. Elevation: ";

const descentElevKey = createElementWithClass("p","key");
descentElevKey.innerHTML = "D. Elevation: ";

keysDiv.appendChild(locationKey);
keysDiv.appendChild(dateKey);
keysDiv.appendChild(timeKey);
keysDiv.appendChild(distKey);
keysDiv.appendChild(ascentElevKey);
keysDiv.appendChild(descentElevKey);

// Values
const locationValue = createElementWithClass("p","value");
locationValue.innerHTML = "Torrelaguna - Madrid - España";

const dateValue = createElementWithClass("p","value");
dateValue.innerHTML = "13-11-2022";

const timeValue = createElementWithClass("p","value");
timeValue.innerHTML = "10:30h";

const distValue = createElementWithClass("p","value");
distValue.innerHTML = "26,50 Km";

const ascentElevValue = createElementWithClass("p","value");
ascentElevValue.innerHTML = "+1200 m";

const descentElevValue = createElementWithClass("p","value");
descentElevValue.innerHTML = "-850 m";

valuesDiv.appendChild(locationValue);
valuesDiv.appendChild(dateValue);
valuesDiv.appendChild(timeValue);
valuesDiv.appendChild(distValue);
valuesDiv.appendChild(ascentElevValue);
valuesDiv.appendChild(descentElevValue);