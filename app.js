const containerList = document.querySelectorAll(".container");
Array.from(containerList).map((container)=> {
  
  //Items
  const card = container.querySelector(".card");
  const title = container.querySelector(".title");
  const sneaker = container.querySelector(".sneaker img");
  const purchase = container.querySelector(".purchase");
  const description = container.querySelector(".info h3");
  const sizes = container.querySelector(".sizes");

  //Moving Animation Event
  container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
  //Animate In
  container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
  });
  //Animate Out
  container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
  });
})


var mySwiper = new Swiper('.cardSwiper', {
  direction: 'horizontal',
  keyboard: true,
  speed: 800,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})