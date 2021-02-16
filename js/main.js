(function () {
  const data = [
    {
      imageDesc: "desktop-image-hero-1",
      imageMob: "mobile-image-hero-1",
      main: "Discover innovative ways to decorate",
      content: `We provide unmatched quality, comfort, and style for property owners 
                     across the country. Our experts combine form and function in bringing 
                     your vision to life. Create a room in your own style with our collection
                     and make your property a reflection of you and what you love.`,
    },
    {
      imageDesc: "desktop-image-hero-2",
      imageMob: "mobile-image-hero-2",
      main: "We are available all across the globe",
      content: `With stores all over the world, it's easy for you to find furniture for your home
                or place of business. Locally, we’re in most major cities throughout the country.
                Find the branch nearest you using our store locator. Any questions? 
                Don't hesitate to contact us today.`,
    },
    {
      imageDesc: "desktop-image-hero-3",
      imageMob: "mobile-image-hero-3",
      main: "Manufactured with the best materials",
      content: `Our modern furniture store provide a high level of quality.
                Our company has invested in advanced technology to ensure that every product 
                is made as perfect and as consistent as possible. With three decades of experience
                in this industry, we understand what customers want for their home and office.`,
    },
  ];

  const buttons = document.querySelectorAll(".btn");
  const imageDiv = document.querySelector(".header");
  const main = document.querySelector(".main");
  const content = document.querySelector(".content");
  const toggle = document.querySelector(".hamburger");
  const navbar = document.querySelector(".nav");
  const close = document.querySelector(".close");
  let counter = 0;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.classList.contains("left-button")) {
        counter--;
        if (counter < 0) {
          counter = data.length - 1;
        }
        main.textContent = data[counter].main;
        content.textContent = data[counter].content;
        if (window.innerWidth > 870) {
          imageDiv.style.backgroundImage = `url('../images/${data[counter].imageDesc}.jpg')`;
        } else {
          imageDiv.style.backgroundImage = `url('../images/${data[counter].imageMob}.jpg')`;
        }
      }
      if (button.classList.contains("right-button")) {
        counter++;
        if (counter > data.length - 1) {
          counter = 0;
        }

        if (window.innerWidth > 870) {
          imageDiv.style.backgroundImage = `url('../images/${data[counter].imageDesc}.jpg')`;
        } else {
          imageDiv.style.backgroundImage = `url('../images/${data[counter].imageMob}.jpg')`;
        }
        main.textContent = data[counter].main;
        content.textContent = data[counter].content;
      }
    });
  });

  toggle.addEventListener("click", () => {
    if (navbar.classList.contains("hide") && window.innerWidth < 870) {
      navbar.classList.remove("hide");
      document.body.style.overflow = "hidden";
    }
  });
  close.addEventListener("click", () => {
    if (navbar.classList.contains("hide") && window.innerWidth < 870) {
      navbar.classList.remove("hide");
      document.body.style.overflow = "hidden";
    } else {
      if (window.innerWidth < 870) {
        navbar.classList.add("hide");
        document.body.style.overflow = "visible";
      }
    }
  });
})();
