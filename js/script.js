var mainSwiper = new Swiper(".js-main-swiper", {
	nested: true,
	// grabCursor: true,
  mousewheel: true,
	effect: "cube",
  cubeEffect: {
    shadow: false,
    slideShadows: false,
  },
	direction: "vertical",
	pagination: {
		el: ".p-swiper__pagination",
	},
	navigation: {
		nextEl: ".p-swiper__next",
		prevEl: ".p-swiper__prev",
	},
	// 	768: {
	// 		effect: "slide", // 効かない（公式でも
	// 	},
	// },
});

var subSwiper = new Swiper(".js-sub-swiper", {
	pagination: {
		el: ".p-swiper__sub-pagination",
	},
	navigation: {
		nextEl: ".p-swiper__sub-next",
		prevEl: ".p-swiper__sub-prev",
	},
});

// document.addEventListener('DOMContentLoaded', function () {
//   var mql = window.matchMedia('(max-width: 767px)');

//   var mainSwiper = new Swiper(".js-main-swiper", {
//     nested: true,
//     direction: "vertical",
//     pagination: {
//       el: ".p-swiper__pagination",
//     },
//     navigation: {
//       nextEl: ".p-swiper__next",
//       prevEl: ".p-swiper__prev",
//     },
//   });

//   var subSwiper = new Swiper(".js-sub-swiper", {
//     pagination: {
//       el: ".p-swiper__sub-pagination",
//     },
//     navigation: {
//       nextEl: ".p-swiper__sub-next",
//       prevEl: ".p-swiper__sub-prev",
//     },
//   });

//   function checkViewport(mql) {
//     if (mql.matches) {
//       // If viewport width is 767px or less
//       mainSwiper.params.effect = "cube";
//     } else {
//       // If viewport width is more than 767px
//       mainSwiper.params.effect = "slide";
//     }

//     // Reinitialize swiper with new parameters
//     mainSwiper.destroy(true, true);
//     mainSwiper = new Swiper('.js-main-swiper', mainSwiper.params);
//   }

//   mql.addListener(checkViewport);
//   checkViewport(mql);
// });
