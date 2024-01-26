const headerEL = document.getElementById("header");

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY;

  if (scrollPos > 100) {
    headerEL.classList.add("header_active");
  } else {
    headerEL.classList.remove("header_active");
  }
});

// burger handler

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuCloseItem = document.querySelector(".header__nav-close");

  burgerItem.addEventListener("click", () => {
    console.log('here is OK');
    menu.classList.add("header__nav_active");
    console.log("here is OK");
  });

  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
})();

// (function () {
//   const header = document.querySelector(".header");
//   window.onscroll = () => {
//     if (window.scrollY >= section.offsetTop -100) {
//       header.classList.add("header_active");
//     }
//   };
// });
