const slides = document.querySelectorAll(".slider-pannel");
const nav_bar = document.querySelector("header .navigation-pannel");
const prev_slide_button = document.querySelector(
  ".slide-changer-button.prev-button",
);
const next_slide_button = document.querySelector(
  ".slide-changer-button.next-button",
);
let active_index = 0;
const slides_length = slides.length;

prev_slide_button.addEventListener("click", decrement);
next_slide_button.addEventListener("click", increment);

function render_screen() {
  slides.forEach((e, i) => {
    if (i === active_index) {
      e.classList.add("active");
      if (e.classList.contains("--light-theme")) {
        nav_bar.classList.add("light-font");
      } else {
        nav_bar.classList.remove("light-font");
      }
    } else {
      e.classList.remove("active");
    }
  });
}

function increment() {
  if (active_index + 1 > slides_length - 1) {
    active_index = 0;
  } else {
    active_index++;
  }
  render_screen();
}

function decrement() {
  if (active_index - 1 < 0) {
    active_index = slides_length - 1;
  } else {
    active_index--;
  }
  render_screen();
}

render_screen();
