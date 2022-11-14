import "./styles.css";
import Logo from "./logo-iberika-trail.png";
import Profile from "./iberika-trail-torrelaguna-profile.jpg";

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
const header = createElementWithId("div", "header");
const summary = createElementWithId("div", "summary");
const details = createElementWithId("div", "details");
const profile = createElementWithId("div", "profile");

const label = createElementWithClass("label");

const input = createElementWithClass("input");
input.setAttribute("type","checkbox");

const menu = createElementWithClass("span","menu");
const hamburger = createElementWithClass("span","hamburger");
menu.appendChild(hamburger);

const ul = createElementWithClass("ul");

const li1 = createElementWithClass("li");
const li2 = createElementWithClass("li");
const li3 = createElementWithClass("li");
const li4 = createElementWithClass("li");
const li5 = createElementWithClass("li");
const li6 = createElementWithClass("li");
const li7 = createElementWithClass("li");

const a1 = createElementWithClass("a");
a1.setAttribute("href","#");
a1.innerHTML = "Home";

const a2 = createElementWithClass("a");
a2.setAttribute("href","#");
a2.innerHTML = "My Races";

const a3 = createElementWithClass("a");
a3.setAttribute("href","#");
a3.innerHTML = "Race Summary";

const a4 = createElementWithClass("a");
a4.setAttribute("href","#");
a4.innerHTML = "Wallet";

const a5 = createElementWithClass("a");
a5.setAttribute("href","#");
a5.innerHTML = "Settings";

const a6 = createElementWithClass("a");
a6.setAttribute("href","#");
a6.innerHTML = "Feedback";

const a7 = createElementWithClass("a");
a7.setAttribute("href","#");
a7.innerHTML = "Logout";

li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(a4);
li5.appendChild(a5);
li6.appendChild(a6);
li7.appendChild(a7);

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);
ul.appendChild(li7);

label.appendChild(input);
label.appendChild(menu);
label.appendChild(ul);

container.appendChild(label);
container.appendChild(header);
container.appendChild(summary);
container.appendChild(details);
container.appendChild(profile);

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

// Profile
const raceProfile = createElementWithClass("h3","bolded");
raceProfile.innerHTML = "Race Profile";

profile.appendChild(raceProfile);

// Adding logo race
const iberikaProfile = new Image();
iberikaProfile.src = Profile;
profile.appendChild(iberikaProfile);