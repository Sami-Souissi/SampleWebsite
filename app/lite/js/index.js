import { Showcase } from "./Showcase";
import { Slides } from "./Slides";
import { Cursor } from "./Cursor";

import day1 from "../images/Day/daytime (1).jpg";
import day2 from "../images/NIght/night (9).jpg";


import service1 from "../images/Services/services (12).jpg";
import service2 from "../images/Services/services (8).jpg";


import night1 from "../images/NIght/night (1).jpg";
import night2 from "../images/Day/daytime (7).jpg";


import contact1 from "../images/contact/contact (9).jpg";
import contact2 from "../images/contact/contact (5).jpg";

var currentTime = new Date().getHours();

const container = document.getElementById("app");
const cursor = new Cursor(document.querySelector(".cursor"));

const slidesData = [
  {
    image: day1,
    title: "ECJE +",
    meta: "Welcome to ",
    more: "https://sami-souissi.github.io/SampleWebsite/hireus.html",
    quotel1: "GO BIG OR",
    quotel2: "GO HOME",
    moretext: "Order Now",
  },
  {
    image: service1,
    title: "Services",
    meta: "Web / Mobile / & More",
    more: "./services/templates/app-studio-website/index.html",
    quotel1: "Tough times don't last",
    quotel2: "Tough teams DO",
    moretext: "Show Me More",
  },
  {
    image: night1,
    title: "Projects",
    meta: "",
    more: "./projects/templates/project-carousel/index.html",
    quotel1: "Creativity is ",
    quotel2: "intelligence having fun",
    moretext: "Show Me More",
  },
  {
    image: contact1,
    title: "Contact",
    meta: "",
    more: "./contactlinks/index.html",
    quotel1: "There is no substitute ",
    quotel2: "for hard work.",
    moretext: "Let's Goo ツ",
  },
  // {
  //   image: image5,
  //   title: "Bilbao",
  //   meta: "Spain / Biscay"
  // }
];
// slidesData[0].image=service1;
console.log(currentTime);

if (currentTime > 16) {
  slidesData[0].image=day2;
  slidesData[1].image=service2;
  slidesData[2].image=night2;
  slidesData[3].image=contact2;
}
else{
  slidesData[0].image=day1;
  slidesData[1].image=service1;
  slidesData[2].image=night1;
  slidesData[3].image=contact1;
}

const slides = new Slides(slidesData);
const showcase = new Showcase(slidesData, {
  onActiveIndexChange: (activeIndex) => {
    slides.onActiveIndexChange(activeIndex);
  },
  onIndexChange: (index) => {
    slides.onMove(index);
  },
  onZoomOutStart: ({ activeIndex }) => {
    cursor.enter();
    slides.appear();
  },
  onZoomOutFinish: ({ activeIndex }) => {},
  onFullscreenStart: ({ activeIndex }) => {
    cursor.leave();
    slides.disperse(activeIndex);
  },
  onFullscreenFinish: ({ activeIndex }) => {},
});

showcase.mount(container);
slides.mount(container);
showcase.render();

window.addEventListener("resize", function () {
  showcase.onResize();
});

window.addEventListener("mousemove", function (ev) {
  showcase.onMouseMove(ev);
});
