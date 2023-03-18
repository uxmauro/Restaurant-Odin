import { mainContent, createHtmlElement } from "./index";

const menu = [
  {
    name: "BBQ Chicken",
    ingredients:
      "olive oil, cornmeal, chicken, barbecue sauce, mozzarella cheese, gorgonzola cheese, onions, bacon",
  },
  {
    name: "Pepperoni",
    ingredients:
      "pizza sauce, mozzarella cheese, pepperoni",
  },
  {
    name: "Prosciutto",
    ingredients:
      "pizza sauce, mozzarella cheese, prosciutto",
  },
  {
    name: "Margherita",
    ingredients:
      "pizza sauce, mozzarella cheese, basil leaves, and extra virgin olive oil",
  },
  {
    name: "Vegetariana",
    ingredients:
      "pizza sauce, mozzarella cheese, mushrooms, bell peppers, onions, olives",
  },
  {
    name: "Napoletana",
    ingredients:
      "pizza sauce, mozzarella cheese, anchovies, capers, oregano, and extra virgin olive oil",
  },
  {
    name: "Capricciosa",
    ingredients:
      "pizza sauce, mozzarella cheese, Italian baked ham, mushroom, artichoke, and tomato",
  },
];


function render() {
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

  const DisplayImage = createHtmlElement("div", null, ["menuImage"], null)

  const columnOne = createHtmlElement("div", null, ["menuCol1"], null)
  const columnTwo = createHtmlElement("div", null, ["menuCol2"], null)
  const fullColumn = createHtmlElement("div", null, ["menuFull"], null)

  Main.appendChild(Left)
  Main.appendChild(Right)
  Left.appendChild(DisplayImage);

  menu.slice(0,4).forEach((item) => {
    const Div = createHtmlElement("div", null, ["menu-item"], null);
    const $name = createHtmlElement("h2", null, ["text-left"], item.name);
    const $description = createHtmlElement(
      "p",
      null,
      ["gray", "text-left"],
      item.ingredients
    );

    Div.appendChild($name);
    Div.appendChild($description)
    columnOne.appendChild(Div);
    fullColumn.appendChild(columnOne);
  });

  menu.slice(4, 8).forEach((item) => {
    const Div = createHtmlElement("div", null, ["menu-item"], null);
    const $name = createHtmlElement("h2", null, ["text-left"], item.name);
    const $description = createHtmlElement(
      "p",
      null,
      ["gray", "text-left"],
      item.ingredients
    );

    Div.appendChild($name);
    Div.appendChild($description)
    columnTwo.appendChild(Div);
    fullColumn.appendChild(columnTwo);
  });


  Right.appendChild(fullColumn);

  mainContent.appendChild(Main);
}

export { render as renderMenu };