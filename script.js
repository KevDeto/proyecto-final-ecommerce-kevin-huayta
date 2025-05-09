const swiper = new Swiper('.swiper-descuentos', {
  slidesPerView: 2,
  direction: 'horizontal',
  spaceBetween: 20,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});



/*
let infoSwiper;

function initSwiper() {
  if (window.innerWidth < 992) { // Ajusta el breakpoint según necesites
const swiper2 = infoSwiper = new Swiper('.swiper-informacion', {
  slidesPerView: 5,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    }
  }
});
  }
}

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', initSwiper);

// Revisar al cambiar tamaño
window.addEventListener('resize', function() {
  if (window.innerWidth >= 992 && infoSwiper) {
    infoSwiper.destroy();
    infoSwiper = undefined;
  } else if (window.innerWidth < 992 && !infoSwiper) {
    initSwiper();
  }
});
*/