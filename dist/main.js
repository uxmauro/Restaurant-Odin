(()=>{"use strict";var e={d:(l,n)=>{for(var i in n)e.o(n,i)&&!e.o(l,i)&&Object.defineProperty(l,i,{enumerable:!0,get:n[i]})},o:(e,l)=>Object.prototype.hasOwnProperty.call(e,l)};function l(e){const l=["home","menu","about","contact"],n=t("div","nav-parent",null,null),i=t("div","li-logo",null,null),d=document.createElement("div");d.classList.add("logo"),d.style.backgroundImage="url(./assets/logo.svg)",i.appendChild(d),n.appendChild(i);const p=()=>t("div",null,["divider"],null),o=t("ul","navOptions",null,null),u=t("li",null,null,l[0]),c=t("li",null,null,l[1]),s=t("li",null,null,l[2]),r=t("li",null,null,l[3]);u.prepend(t("div",null,["topnav"],null)),u.appendChild(t("div",null,["nav-active"],null)),c.prepend(t("div",null,["topnav"],null)),c.appendChild(t("div",null,["nav-active"],null)),s.prepend(t("div",null,["topnav"],null)),s.appendChild(t("div",null,["nav-active"],null)),r.prepend(t("div",null,["topnav"],null)),r.appendChild(t("div",null,["nav-active"],null)),"home"===e&&(u.lastChild.style.opacity=1),"menu"===e&&(c.lastChild.style.opacity=1),"about"===e&&(s.lastChild.style.opacity=1),"contact"===e&&(r.lastChild.style.opacity=1),n.appendChild(o),o.appendChild(u),o.appendChild(p()),o.appendChild(c),o.appendChild(p()),o.appendChild(s),o.appendChild(p()),o.appendChild(r);const h=document.createElement("nav");h.appendChild(n),a.appendChild(h)}e.d({},{U:()=>t,M:()=>a});let n=()=>{const e=document.createElement("main"),l=t("div","left",null,null),n=t("div","right",null,null),i=t("div",null,["homeImage"],null),d=t("h1",null,["text-left","black","homeTitle"],"Get your favorite pizza in a slice."),p=t("button",null,null,"Order now");e.appendChild(l),e.appendChild(n),n.appendChild(d),n.appendChild(p),l.appendChild(i),a.appendChild(e)};const i=[{name:"BBQ Chicken",ingredients:"olive oil, cornmeal, chicken, barbecue sauce, mozzarella cheese, gorgonzola cheese, onions, bacon"},{name:"Pepperoni",ingredients:"pizza sauce, mozzarella cheese, pepperoni"},{name:"Prosciutto",ingredients:"pizza sauce, mozzarella cheese, prosciutto"},{name:"Margherita",ingredients:"pizza sauce, mozzarella cheese, basil leaves, and extra virgin olive oil"},{name:"Vegetariana",ingredients:"pizza sauce, mozzarella cheese, mushrooms, bell peppers, onions, olives"},{name:"Napoletana",ingredients:"pizza sauce, mozzarella cheese, anchovies, capers, oregano, and extra virgin olive oil"},{name:"Capricciosa",ingredients:"pizza sauce, mozzarella cheese, Italian baked ham, mushroom, artichoke, and tomato"}];const a=document.getElementById("content");function t(e,l,n,i){const a=document.createElement(e),t=document.createElement("p");return l&&(a.id=l),n&&n.forEach((e=>a.classList.add(e))),i&&(t.innerText=i,a.appendChild(t)),"h1"!==e&&"h2"!==e&&"p"!==e||(a.innerText=i),a}function d(){a.innerHTML="",l("home"),n()}d(),document.addEventListener("click",(e=>{const n=e.target.innerText,p=e.target.classList;"HOME"!=n&&"logo"!=p||d(),"MENU"!==n&&"ORDER NOW"!=n||(a.innerHTML="",l("menu"),function(){const e=document.createElement("main"),l=t("div","left",null,null),n=t("div","right",null,null),d=t("div",null,["menuImage"],null),p=t("div",null,["menuCol1"],null),o=t("div",null,["menuCol2"],null),u=t("div",null,["menuFull"],null);e.appendChild(l),e.appendChild(n),l.appendChild(d),i.slice(0,4).forEach((e=>{const l=t("div",null,["menu-item"],null),n=t("h2",null,["text-left"],e.name),i=t("p",null,["gray","text-left"],e.ingredients);l.appendChild(n),l.appendChild(i),p.appendChild(l),u.appendChild(p)})),i.slice(4,8).forEach((e=>{const l=t("div",null,["menu-item"],null),n=t("h2",null,["text-left"],e.name),i=t("p",null,["gray","text-left"],e.ingredients);l.appendChild(n),l.appendChild(i),o.appendChild(l),u.appendChild(o)})),n.appendChild(u),a.appendChild(e)}()),"ABOUT"===n&&(a.innerHTML="",l("about"),(()=>{const e=document.createElement("main"),l=t("div","left",["about-section"],null),n=t("div","right",null,null),i=t("div",null,["aboutImage"],null),d=t("h1",null,["black"],"Our Story"),p=t("p",null,["text-left","white","about-text"],"Pizza House started with the goal of making high-quality pizza accessible to everyone. We focused on using fresh, quality ingredients and creating unique flavor combinations on a thin, crispy crust. The restaurant quickly gained popularity and expanded to multiple locations, while staying true to their commitment to quality and authenticity. Today, Pizza House is a beloved local institution that continues to bring people together over delicious pizza.");e.appendChild(l),e.appendChild(n),n.appendChild(i),l.appendChild(d),l.appendChild(p),a.appendChild(e)})()),"CONTACT"===n&&(a.innerHTML="",l("contact"),(()=>{const e=document.createElement("main"),l=t("div","left",null,null),n=t("div","right",null,null),i=t("div",null,["contactImage"],null),d=t("h1",null,null,"Contact Us");n.appendChild(d);const p=t("div",null,["inputs-holder"],null);["Name","Phone","Email"].forEach((e=>p.appendChild(t("input",e,["text-left"],e)).setAttribute("placeholder",e)));const o=t("button",null,null,"Message Us"),u=t("textarea","message",["text-left"],null);u.setAttribute("placeholder","Message"),p.appendChild(u),p.appendChild(o),n.appendChild(p),e.appendChild(l),e.appendChild(n),l.appendChild(i),a.appendChild(e)})())}))})();