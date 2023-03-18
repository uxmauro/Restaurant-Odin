import { navBar, activeTab } from "./navbar";
import { homePage } from "./home-page";
import { renderMenu } from "./main-menu";
import { aboutPage } from "./about";
import { contactPage } from "./contact";

const mainContent = document.getElementById("content");


function createHtmlElement(type, id, arrayClasses, content) {
  const element = document.createElement(type);
  const text = document.createElement("p");
  if (id) element.id = id;
  if (arrayClasses)
    arrayClasses.forEach((myClass) => element.classList.add(myClass));
  if (content) {
    text.innerText = content;
    element.appendChild(text)
  }
   if (type === "h1" || type === "h2" || type === "p")
  element.innerText = content;

  return element;
}

function home() {
  mainContent.innerHTML = "";
  navBar('home');
  homePage();
}
function menu() {
  mainContent.innerHTML = "";
  navBar('menu');
  renderMenu();
}
function about() {
  mainContent.innerHTML = "";
  navBar('about');
  aboutPage();
}
function contact() {
  mainContent.innerHTML = "";
  navBar('contact');
  contactPage();
}

home();
document.addEventListener("click", (e) => {
  const target = e.target.innerText;
  const logo = e.target.classList;

  if (target == "HOME" || logo == "logo") home();
  if (target === "MENU" || target == "ORDER NOW") menu();
  if (target === "ABOUT") about();
  if (target === "CONTACT") contact();
});
export { createHtmlElement, mainContent };