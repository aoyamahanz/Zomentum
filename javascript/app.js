const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll(" nav li");

  //hamburger toggle map
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //animation links (li)
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
  });
};

const app = () => {
  navSlide();
};
// navSlide(); //use this little function
app(); //use this if many function
