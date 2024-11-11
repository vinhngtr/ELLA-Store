document.querySelectorAll(".btnHover-inner").forEach((button) => {
  let isMouseOver = false;
  button.addEventListener("mouseover", function (e) {
    if (!isMouseOver) {
      e.currentTarget.textContent = "SUBMIT";
      const btnHover = e.currentTarget.closest(".btnHover");
      btnHover.querySelector(".pickSize").style.display = "flex";
      btnHover.querySelector(".closePick").style.display = "flex";
      isMouseOver = true;
    }
  });
  button.addEventListener("mouseout", function (e) {
    console.log(e.currentTarget);
    isMouseOver = false;
  });
});

document.querySelectorAll(".closePick").forEach((closeButton) => {
  closeButton.addEventListener("click", function (e) {
    const btnHover = e.currentTarget.closest(".btnHover");
    btnHover.querySelector(".pickSize").style.display = "none";
    btnHover.querySelector(".closePick").style.display = "none";
    btnHover.querySelector(".showPick .showSize").textContent = "";
    btnHover.querySelector(".btnHover-inner").textContent = "ADD TO CART";
  });
});

document.querySelectorAll(".listSize li").forEach((sizeOption) => {
  sizeOption.addEventListener("click", function (e) {
    const btnHover = e.currentTarget.closest(".btnHover");
    btnHover.querySelector(".showSize").textContent =
      e.currentTarget.textContent;
  });
});

document.querySelectorAll(".btnHover-inner").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.currentTarget.textContent = "ADD TO CART";
    e.currentTarget
      .closest(".btnHover")
      .querySelector(".showPick .showSize").textContent = "";
    e.currentTarget
      .closest(".btnHover")
      .querySelector(".closePick").style.display = "none";
    e.currentTarget
      .closest(".btnHover")
      .querySelector(".pickSize").style.display = "none";
  });
});

const slideContainer = document.querySelector('.carousel-items');
const slides = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.left');
const nextButton = document.querySelector('.carousel-button.right');

let currentIndex = 0;
const slidesToShow = 5;
const totalSlides = slides.length;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalSlides - slidesToShow) {
        currentIndex++;
        updateSlidePosition();
    }
});

function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    slideContainer.style.transform = `translateX(-${currentIndex * (slideWidth + 5)}px)`;

    // Reset all margins
    slides.forEach(slide => {
        slide.style.marginRight = '5px';
    });

    // Remove margin-right for the last visible slide
    const lastVisibleIndex = currentIndex + slidesToShow - 1;
    if (lastVisibleIndex < totalSlides) {
        slides[lastVisibleIndex].style.marginRight = '0';
    }
}

// Initialize the carousel
updateSlidePosition();

