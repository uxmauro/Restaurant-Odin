import { mainContent, createHtmlElement } from "./index";

let render = () => {
    const Main = document.createElement("main");
     
    const fields = ["Name", "Phone", "Email"]
  
    const Left  = createHtmlElement(
      "div",
      "left",
      null,
     null
    );
    const Right = createHtmlElement(
      "div",
      "right",
      null,
     null
    );
  
    const DisplayImage = createHtmlElement("div", null, ["contactImage"], null)

    const headerText = createHtmlElement("h1", null,null, "Contact Us")

    Right.appendChild(headerText)

    const inputDiv = createHtmlElement("div", null, ["inputs-holder"], null)
    
    fields.forEach((item) =>
    inputDiv.appendChild(createHtmlElement("input", item, ["text-left"], item)).setAttribute("placeholder", item)

  );


  const Button = createHtmlElement("button", null, null, "Message Us");

  const message = createHtmlElement("textarea", "message", ["text-left"], null)
  message.setAttribute("placeholder", "Message")
      inputDiv.appendChild(message)
      inputDiv.appendChild(Button)
      Right.appendChild(inputDiv)

    Main.appendChild(Left);
    Main.appendChild(Right);
    Left.appendChild(DisplayImage);
  
    mainContent.appendChild(Main);
  }

export { render as contactPage };