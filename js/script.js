// Карта попап

var map = document.querySelector(".map");
var popupMap = document.querySelector(".popup-map");
var closeMap = popupMap.querySelector(".close");

map.addEventListener("click", function(event) {
  event.preventDefault();
  popupMap.classList.remove("visually-hidden");
});

closeMap.addEventListener("click", function(event) {
  event.preventDefault();
  popupMap.classList.add("visually-hidden");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (!popupMap.classList.contains("visually-hidden")) {
      popupMap.classList.add("visually-hidden");
    }
  }
});

var popupBtn = document.querySelector(".btn-feedback");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".close");

popupBtn.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("visually-hidden");

  if (storageUserName) {
    userName.value = storageUserName;
    userEmail.focus();
  } else if (storageUserEmail) {
    userEmail.value = storageUserEmail;
    userLetter.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("visually-hidden");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (!popup.classList.contains("visually-hidden")) {
      popup.classList.add("visually-hidden");
    }
  }
});

var form = popup.querySelector("form");
var userName = popup.querySelector("[name=fullname]");
var userEmail = popup.querySelector("[name=email]");
var userLetter = popup.querySelector("[name=letter]");

var storageUserName = localStorage.getItem("userName");
var storageUserEmail = localStorage.getItem("userEmail");

form.addEventListener("submit", function(event) {
  if (!userName.value || !userEmail.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    form.classList.add("modal-error");
  } else {
    localStorage.setItem("userName", userName.value);
    localStorage.setItem("userEmail", userEmail.value);
  }
});

// Слайдер и меню сервисов


$(document).ready(function() {

  $(".slider-switch i:nth-child(1)").click(function() {

    $('i:nth-child(1)').addClass('active');
    $('i:nth-child(2)').removeClass('active');
    $('i:nth-child(3)').removeClass('active');

    $(".slide-first").css({
      "display" : "flex"
    });

    $(".slide-second").css({
      "display" : "none"
    });

    $(".slide-third").css({
      "display" : "none"
    });

  });

  $(".slider-switch i:nth-child(2)").click(function() {

    $('i:nth-child(2)').addClass('active');
    $('i:nth-child(1)').removeClass('active');
    $('i:nth-child(3)').removeClass('active');

    $(".slide-first").css({
      "display" : "none"
    });

    $(".slide-second").css({
      "display" : "flex"
    });

    $(".slide-third").css({
      "display" : "none"
    });

  });

  $(".slider-switch i:nth-child(3)").click(function() {

    $('i:nth-child(3)').addClass('active');
    $('i:nth-child(1)').removeClass('active');
    $('i:nth-child(2)').removeClass('active');

    $(".slide-first").css({
      "display" : "none"
    });

    $(".slide-second").css({
      "display" : "none"
    });

    $(".slide-third").css({
      "display" : "flex"
    });

  });

});


$(document).ready(function() {

  $(".service-nav li:nth-child(1)").click(function() {

    $('li:nth-child(1) a').addClass('active');
    $('li:nth-child(2) a').removeClass('active');
    $('li:nth-child(3) a').removeClass('active');

    $(".service-delivery").css({
      "display" : "flex"
    });

    $(".service-warranty").css({
      "display" : "none"
    });

    $(".service-credit").css({
      "display" : "none"
    });

  });

  $(".service-nav li:nth-child(2)").click(function() {

    $('li:nth-child(1) a').removeClass('active');
    $('li:nth-child(2) a').addClass('active');
    $('li:nth-child(3) a').removeClass('active');

    $(".service-delivery").css({
      "display" : "none"
    });

    $(".service-warranty").css({
      "display" : "flex"
    });

    $(".service-credit").css({
      "display" : "none"
    });

  });

  $(".service-nav li:nth-child(3)").click(function() {

    $('li:nth-child(1) a').removeClass('active');
    $('li:nth-child(2) a').removeClass('active');
    $('li:nth-child(3) a').addClass('active');

    $(".service-delivery").css({
      "display" : "none"
    });

    $(".service-warranty").css({
      "display" : "none"
    });

    $(".service-credit").css({
      "display" : "flex"
    });

  });

});
