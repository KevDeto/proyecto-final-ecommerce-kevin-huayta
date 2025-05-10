const swiper = new Swiper('.swiper-descuentos', {
  slidesPerView: 1,/* si coloco 4 se desabilita el swiper, podria usar esto para responsive */
  direction: 'horizontal',
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 4500,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
});

const swiper2 = new Swiper('.swiper-marcas', {
  slidesPerView: 1,/* si coloco 4 se desabilita el swiper, podria usar esto para responsive */
  direction: 'horizontal',
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 4500,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }
});

/*
const swiper = new Swiper('.swiper-descuentos', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});*/



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