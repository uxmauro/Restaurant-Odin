import { mainContent, createHtmlElement } from "./index";

function navBar(page) {
  const navItems = ["home", "menu", "about", "contact"];
  const ul =  createHtmlElement("div", "nav-parent" , null, null);
  const logoElement = createHtmlElement("div", "li-logo", null, null)
  const logo = document.createElement("div");

  logo.classList.add("logo")
  logo.style.backgroundImage = 'url(./assets/logo.svg)'
  
  logoElement.appendChild(logo)
  ul.appendChild(logoElement)
  
  const Divider = () => {
    return createHtmlElement("div", null, ["divider"], null)

    };

  

    const NavOptions = createHtmlElement("ul", "navOptions", null, null)
    
    const Home = createHtmlElement("li", null, null, navItems[0]) 
    const Menu = createHtmlElement("li", null, null, navItems[1])
    const About = createHtmlElement("li", null, null, navItems[2])
    const Contact = createHtmlElement("li", null, null, navItems[3])
    
    Home.prepend(createHtmlElement("div", null, ["topnav"], null))
    Home.appendChild(createHtmlElement("div", null, ["nav-active"], null))
 
    Menu.prepend(createHtmlElement("div", null, ["topnav"], null))
    Menu.appendChild(createHtmlElement("div", null, ["nav-active"], null))

    About.prepend(createHtmlElement("div", null, ["topnav"], null))
    About.appendChild(createHtmlElement("div", null, ["nav-active"], null))

    Contact.prepend(createHtmlElement("div", null, ["topnav"], null))
    Contact.appendChild(createHtmlElement("div", null, ["nav-active"], null))

   if (page === 'home') {
   let element =  Home.lastChild
   element.style.opacity = 1
   }
   if (page === 'menu') {
   let element =  Menu.lastChild
   element.style.opacity = 1
   }
   if (page === 'about') {
   let element =  About.lastChild
   element.style.opacity = 1
   }
    
   if (page === 'contact') {
   let element =  Contact.lastChild
   element.style.opacity = 1
   }
    
    
    ul.appendChild(NavOptions)


    NavOptions.appendChild(Home)
    NavOptions.appendChild (Divider())
    NavOptions.appendChild(Menu)
    NavOptions.appendChild(Divider())
    NavOptions.appendChild(About)
    NavOptions.appendChild(Divider())
    NavOptions.appendChild(Contact)
  
  const nav = document.createElement("nav");
  nav.appendChild(ul);

  mainContent.appendChild(nav);

}


export { navBar };