import "./styles.css";

// Create an element with an optional CSS id
function createElementWithId(tag, id) {
  const element = document.createElement(tag);
  if (id) {
    element.setAttribute("id", id);
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
