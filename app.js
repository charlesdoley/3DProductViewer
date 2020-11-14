const containerList = document.querySelectorAll(".container");

Array.from(containerList).map((container)=> {
  
  //Items
  const card = container.querySelector(".card");
  const title = container.querySelector(".title");
  const sneaker = container.querySelector(".sneaker img");
  const purchase = container.querySelector(".purchase");
  const description = container.querySelector(".info h3");
  const sizes = container.querySelector(".sizes");

  const containerObject = {
    card,
    title,
    sneaker,
    purchase,
    description,
    sizes
  }

  container.addEventListener("mousemove", (e) => mouseMove(containerObject));
  container.addEventListener("mouseenter", (e) => mouseEnter(containerObject));
  container.addEventListener("mouseleave", () => mouseLeave(containerObject));
})

//Animate Out
const mouseMove = ({card}) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}
//Popout
const mouseEnter = ({card,title,sneaker,description,sizes,purchase}) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
}
//Popback
const mouseLeave = ({card,title,sneaker,description,sizes,purchase}) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0px)";
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
}

var mySwiper = new Swiper('.cardSwiper', {
  direction: 'horizontal',
  keyboard: true,
  speed: 800,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})