import { mainContent, createHtmlElement } from "./index";

let render = () => {
    const Main = document.createElement("main");



    const Left  = createHtmlElement(
      "div",
      "left",
      ["about-section"],
     null
    );
    const Right = createHtmlElement(
      "div",
      "right",
     null,
     null
    );
  


    const DisplayImage = createHtmlElement("div", null, ["aboutImage"], null)
  
    
    const $title = createHtmlElement("h1", null, ["black"], "Our Story");
  
    const $subtitle = createHtmlElement(
      "p",
      null,
      ["text-left", "white", "about-text"],
      "Pizza House started with the goal of making high-quality pizza accessible to everyone. We focused on using fresh, quality ingredients and creating unique flavor combinations on a thin, crispy crust. The restaurant quickly gained popularity and expanded to multiple locations, while staying true to their commitment to quality and authenticity. Today, Pizza House is a beloved local institution that continues to bring people together over delicious pizza."
    );
  


  Main.appendChild(Left);
  Main.appendChild(Right);
  Right.appendChild(DisplayImage);


    Left.appendChild($title);
    Left.appendChild($subtitle);
    mainContent.appendChild(Main);
  }

export { render as aboutPage };