$(document).ready(function() {
  $("#js-btn").on("click", function(event) {
    event.preventDefault();
    var top = $("#js-plan").offset().top;
    $("html, body").animate(
      {
        scrollTop: top
      },
      1000
    );
  });

  $("#js-btn-2").on("click", function(event) {
    event.preventDefault();
    var topp = $("#js-plan").offset().top;
    $("html, body").animate(
      {
        scrollTop: topp
      },
      1000
    );
  });

  $("#js-btn-3").on("click", function(event) {
    event.preventDefault();
    var bottom = $("#js-main").offset().top;
    $("html, body").animate(
      {
        scrollTop: bottom
      },
      1000
    );
  });
});

//slider

let dots = document.getElementsByClassName("dot"),
  dotsArea = document.getElementById("dots-block"),
  slides = document.getElementsByClassName("slider-item"),
  prev = document.getElementById("prev-btn"),
  next = document.getElementById("next-btn"),
  slideIndex = 1;

showSlides(slideIndex);

function showSlides(n) {
  if (n < 1) {
    slideIndex = slides.length;
  } else if (n > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("dot-active");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("dot-active");
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

prev.onclick = function() {
  plusSlides(-1);
};
next.onclick = function() {
  plusSlides(1);
};
dotsArea.onclick = function(e) {
  for (let i = 0; i < dots.length + 1; i++) {
    if (e.target.classList.contains("dot") && e.target == dots[i - 1]) {
      currentSlide(i);
    }
  }
};
