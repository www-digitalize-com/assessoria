$(document).ready(function() {
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height() - 104;

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  // $(window).scroll(function (event) {
  //   toggleMenuActive();
  // });
});


AOS.init({
  offset: -50,
});

function toggleMenuActive() {
  $('.header-menu li').removeClass("active");
  if ($('.banner').isInViewport() === true) {
    $('.header-menu li[data-target="#inicio"').addClass("active");
  } else if ($('.sobre').isInViewport() === true && $('.banner').isInViewport() === false) {
    $('.header-menu li[data-target="#solucoes"').addClass("active");
  } else if ($('.portfolio').isInViewport() === true) {
    $('.header-menu li[data-target="#portfolio"').addClass("active");
  } else if ($('.clientes').isInViewport() === true) {
    $('.header-menu li[data-target="#clientes"').addClass("active");
  }
};

$("body").on("click", ".header-menu li", function() {
  var _this = this;

  if (window.innerWidth < 768) {
    $(".header-menu").fadeOut();
  }

  $("html, body").animate({
    scrollTop: $($(_this).attr("data-target")).offset().top - 104
  });
});

$("body").on("click", ".header-menu-mobile-btn", function() {
  if ($(".header-menu").is(":visible")) {
    $(".header-menu").fadeOut();
  } else {
    $(".header-menu").fadeIn();
  }
})

$("body").on("click", ".sobre-tipo.website", function() {
  $(".modal-service.website").fadeIn();
});

$("body").on("click", ".sobre-tipo.ecommerce", function() {
  $(".modal-service.ecommerce").fadeIn();
});

$("body").on("click", ".sobre-tipo.aplicativo", function() {
  $(".modal-service.aplicativo").fadeIn();
});

$("body").on("click", ".sobre-tipo.sistemas", function() {
  $(".modal-service.sistemas").fadeIn();
});

$("body").on("click", ".sobre-tipo.integracoes", function() {
  $(".modal-service.integracoes").fadeIn();
});

$("body").on("click", ".sobre-tipo.seo", function() {
  $(".modal-service.seo").fadeIn();
});

$("body").on("click", ".sobre-tipo.uxui", function() {
  $(".modal-service.uxui").fadeIn();
});

$("body").on("click", ".sobre-tipo.identidade-visual", function() {
  $(".modal-service.identidade-visual").fadeIn();
});

$("body").on("click", ".sobre-tipo.midias-sociais", function() {
  $(".modal-service.midias-sociais").fadeIn();
});

$("body").on("click", ".modal-service-header-close", function() {
  $(".modal-service").fadeOut();
});

$("body").on("click", ".header-content, .banner, .sobre, .portfolio, .clientes, .contato, .footer", function(e) {
  // if ($(".header-menu").is(":visible")) {
  //   $(".header-menu").fadeOut();
  //   e.preventDefault();
  // }
});
