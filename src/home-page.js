import { mainContent, createHtmlElement } from "./index";

let render = () => {
  const Main = document.createElement("main");

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

  const DisplayImage = createHtmlElement("div", null, ["homeImage"], null)

  const Subtitle = createHtmlElement(
    "h1",
    null,
    ["text-left", "black", "homeTitle"],
    "Get your favorite pizza in a slice."
  );
  const Button = createHtmlElement("button", null, null, "Order now");

  Main.appendChild(Left);
  Main.appendChild(Right);
  Right.appendChild(Subtitle);
  Right.appendChild(Button);
  Left.appendChild(DisplayImage);

  mainContent.appendChild(Main);
}

export { render as homePage };