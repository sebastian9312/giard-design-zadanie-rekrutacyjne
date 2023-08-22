import "./style.css";

const masonry = new Macy({
  container: "#gallery",
  mobileFirst: true,
  columns: 1,
  breakAt: {
    640: 2,
    768: 3,
  },
  margin: {
    x: 20,
    y: 20,
  },
});

// hamburger menu

const hamburgerButton = document.querySelector("#hamburger-button");
const mobileMenu = document.querySelector("#mobile-menu");

const toggleMenu = () => {
  mobileMenu.classList.toggle("hidden");
};

hamburgerButton.addEventListener("click", toggleMenu);
mobileMenu.addEventListener("click", toggleMenu);

// navigation - loupe and input

const loupeButton = document.querySelector("#loupe-button");
const navInput = document.querySelector("#nav-input");

const toggleNavInput = () => {
  navInput.classList.toggle("hidden");
};

loupeButton.addEventListener("click", toggleNavInput);

// navigation - offer window

const offerButton = document.querySelector("#offer-button");
const offerWindow = document.querySelector("#offer-window");

const toggleOfferWindow = () => {
  offerWindow.classList.toggle("hidden");
};

offerButton.addEventListener("click", toggleOfferWindow);

const offerContainer = document.querySelectorAll("#offer-container a");

if (offerContainer.length) {
  offerContainer.forEach((el) => {
    el.addEventListener("click", () => {
      offerWindow.classList.add("hidden");
    });
  });
}

// expand gallery

const expandGalleryButton = document.querySelector("#expand-gallery-button");
const galleryContainer = document.querySelector("#gallery-container");
const galleryBackground = document.querySelector("#gallery-background");

const expandGallery = () => {
  galleryContainer.classList.remove("overflow-hidden");
  galleryContainer.classList.remove("h-screen");
  galleryBackground.classList.add("hidden");
};

expandGalleryButton.addEventListener("click", expandGallery);

// popup window

const imagesGalleryList = document.querySelectorAll("#gallery img");
const popupWindow = document.querySelector("#popup-window");
const selectedGalleryImage = document.querySelector("#selected-gallery-image");
const closePopupButton = document.querySelector("#close-popup-button");
const previousPopupButton = document.querySelector("#previous-popup-button");
const nextPopupButton = document.querySelector("#next-popup-button");

let currentPopupImageIndex;

const showNextPopupImage = () => {
  if (currentPopupImageIndex === imagesGalleryList.length - 1) {
    currentPopupImageIndex = 0;
  } else {
    currentPopupImageIndex++;
  }
  selectedGalleryImage.src = imagesGalleryList[currentPopupImageIndex].src;
};

const showPreviousPopupImage = () => {
  if (currentPopupImageIndex === 0) {
    currentPopupImageIndex = imagesGalleryList.length - 1;
  } else {
    currentPopupImageIndex--;
  }
  selectedGalleryImage.src = imagesGalleryList[currentPopupImageIndex].src;
};

const closePopup = () => {
  popupWindow.classList.add("hidden");
  imagesGalleryList.forEach((element) => {
    element.setAttribute("tabindex", 1);
  });
};

imagesGalleryList.forEach((image, index) => {
  const showPopup = (e) => {
    popupWindow.classList.remove("hidden");
    selectedGalleryImage.src = e.target.src;
    currentPopupImageIndex = index;
    imagesGalleryList.forEach((element) => {
      element.setAttribute("tabindex", -1);
    });
  };

  image.addEventListener("click", showPopup);

  image.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.keyCode === 13) {
      showPopup(e);
    }
  });
});

closePopupButton.addEventListener("click", closePopup);

nextPopupButton.addEventListener("click", showNextPopupImage);

previousPopupButton.addEventListener("click", showPreviousPopupImage);

document.addEventListener("keydown", (e) => {
  if (!popupWindow.classList.contains("hidden")) {
    if (e.code === "ArrowRight" || e.keyCode === 39) {
      showNextPopupImage();
    }

    if (e.code === "ArrowLeft" || e.keyCode === 37) {
      showPreviousPopupImage();
    }

    if (e.code === "Escape" || e.keyCode === 27) {
      closePopup();
    }
  }
});

popupWindow.addEventListener("click", (e) => {
  if (e.target === popupWindow) {
    closePopup();
  }
});

// hero - slider

const track = document.querySelector("#track");
const sliderImages = document.querySelectorAll("#track img");
const nextSliderButton = document.querySelector("#next-slider-button");
const previousSliderButton = document.querySelector("#previous-slider-button");
const slideWidth = sliderImages[0].getBoundingClientRect().width;

sliderImages.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px";
});

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

nextSliderButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;

  if (nextSlide === null) return;

  moveToSlide(track, currentSlide, nextSlide);
});

previousSliderButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const previousSlide = currentSlide.previousElementSibling;

  if (previousSlide === null) return;

  moveToSlide(track, currentSlide, previousSlide);
});
