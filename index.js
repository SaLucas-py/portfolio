const projectsSlider = () => {
  $(document).ready(function () {
      $(".regular").slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  
      $(".lazy").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
  })

}

const skillsSlider = () => {
  const arrowRight = document.querySelector('.arrow-right')
  const controls = document.querySelectorAll(".control");
  const items = document.querySelectorAll(".item");
  const maxItems = items.length;
  
  let currentItem = 0;
  controls.forEach((control) => {
    control.addEventListener("click", (e) => {
      isLeft = e.target.classList.contains("arrow-left");
  
      if (isLeft) {
        currentItem -= 1;
      } else {
        currentItem += 1;
      }
  
      if (currentItem >= maxItems) {
        currentItem = 0;
      }
  
      if (currentItem < 0) {
        currentItem = maxItems - 1;
      }
  
      items.forEach((item) => item.classList.remove("current-item"));
  
      items[currentItem].scrollIntoView({
        behavior: "smooth",
        inline: "center"
      });
      
      items[currentItem].classList.add("current-item");
    });
  });
}

const burguerMenu = () => {
  const hamburger = document.querySelector(".menu-mobile-button");
  const nav = document.querySelector(".navbar-wrapper");
  const navListItem = document.querySelectorAll('.nav-list li a')

  hamburger.addEventListener("click", () => nav.classList.toggle("active"));

  navListItem.forEach((e) => {
    e.addEventListener("click", () => {
      hamburger.click()
    })
  })
}

projectsSlider()
burguerMenu()
skillsSlider()