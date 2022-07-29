const sliders = document.querySelectorAll(".swiper-container");
let mySwipers = [] // Масив со слайдерами
function sliderinit() {
  // Создаем все слайдеры
  sliders.forEach((slider, index) => {
    console.log(slider)
    if (!slider.swiper) {
      mySwipers[index] = new Swiper(slider, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 20,
      });
    } else {
      return
    }
  })
}
function sliderDestroy() {
  // удаляем все слайдеры
  sliders.forEach((slider, index) => {
    if (slider.classList.contains("swiper-initialized")) mySwipers[index].destroy(true, true)
  })
}
function checker() {
  // >600 удаялем, в другом случа инициализируем, если до этого не инициализировали
  if (window.matchMedia("(min-width: 321px)").matches) {
    // >600 удаляем слайдеры если такие есть
    sliderDestroy()
  } else {
    sliderinit()
  }
}
checker();
window.addEventListener("resize", () => {
  checker();
});


let aboutButton = document.querySelector('.about__read-more');
let aboutArticle = document.querySelector('.hidden__article');
let isAboutShown = false;

let brandsButton = document.querySelector('.brands__show-more');
let brandsGrid = document.querySelector('.brands__grid');
let brandsSlider = document.querySelector('.brands__image-slider');
let isBrandsShown = true;

let devicesButton = document.querySelector('.devices__show-more');
let devicesGrid = document.querySelector('.devices__grid');
let devicesSlider = document.querySelector('.devices__image-slider');
let isDevicesShown = true;

let mql_768 = window.matchMedia('(max-width: 767.98px)');
let mql_1120 = window.matchMedia('(max-width: 1119.98px)');
let mql_320 = window.matchMedia('(max-width: 320.98px)');
let mql = window.matchMedia('(min-width: 1440px)');


aboutButton.addEventListener("click", function() {
  if (isAboutShown)
{
  isAboutShown = false;
  if (mql_768.matches) {
    aboutArticle.style.height = '0';
  } else if (mql_1120.matches){
    aboutArticle.style.height = '120px';
  } else {
    aboutArticle.style.height = '100px';
  }
  transform = 'rotate(45deg)';
  aboutButton.style.setProperty('--sq-transform', transform);
  aboutButton.innerText = "Читать далее";
}
else
{
  isAboutShown = true;
  aboutArticle.style.height = aboutArticle.scrollHeight + "px";
  transform = 'rotate(225deg)';
  aboutButton.style.setProperty('--sq-transform', transform);
  aboutButton.innerText = "Скрыть";
}
});

brandsButton.addEventListener("click", function() {
  if (isBrandsShown) {
  isBrandsShown = false;
  transform = 'rotate(225deg)';
  brandsButton.style.setProperty('--sq-transform', transform);
  brandsButton.innerText = "Скрыть";
  brandsGrid.style.height =  brandsGrid.scrollHeight + "px";
} else {
  isBrandsShown = true;
  transform = 'rotate(45deg)';
  brandsButton.style.setProperty('--sq-transform', transform);
  brandsButton.innerText = "Показать все";
  brandsGrid.style.height =  "160px";
}
});

devicesButton.addEventListener("click", function() {
  if (isDevicesShown) {
  isDevicesShown = false;
  transform = 'rotate(225deg)';
  devicesButton.style.setProperty('--sq-transform', transform);
  devicesButton.innerText = "Скрыть";
  devicesGrid.style.height =  devicesGrid.scrollHeight + "px";
} else {
  isDevicesShown = true;
  transform = 'rotate(45deg)';
  devicesButton.style.setProperty('--sq-transform', transform);
  devicesButton.innerText = "Показать все";
  devicesGrid.style.height =  "170px";
}
});









let headerMenuBtn = document.querySelector('.header__button');
let asideBackBtn = document.querySelector('.mobile-menu__button');
let asideFeedbackBtn = document.querySelector('.footer__button--feedback');
let asideCallbackBtn = document.querySelector('.footer__button--callback');

let callback = document.querySelector('.modals__callback');
let callbackBackBtn = document.querySelector('.modals__back--callback');

let feedback = document.querySelector('.modals__feedback');
let feedbackBackBtn = document.querySelector('.modals__back--feedback');

let mobileMenu = document.querySelector('.mobile-menu');
let overlay = document.querySelector('.modals__overlay');

headerMenuBtn.addEventListener ('click', function () {
  mobileMenu.style.left = 0;
  overlay.style.left = 0;
});

asideFeedbackBtn.addEventListener ('click', function () {
  feedback.style.left = 0;
  callback.style.left = "-500px";
  if (window.matchMedia('(min-width: 1300px)').matches) {
    overlay.style.left = 0;
    feedback.style.left = "auto";
    feedback.style.right = 0;
  }
});

asideCallbackBtn.addEventListener ('click', function () {
  callback.style.left = 0;
  feedback.style.left = "-500px";
  if (window.matchMedia('(min-width: 1300px)').matches) {
    overlay.style.left = 0;
    callback.style.left = "auto";
    callback.style.right = 0;
  }
});

asideBackBtn.addEventListener ('click', function () {
  mobileMenu.style.left = "-350px";
  overlay.style.left = "-2000px";
});

callbackBackBtn.addEventListener ('click', function () {
  callback.style.left = "-500px";
  feedback.style.left = "-500px";
  overlay.style.left = "-2000px";

});

feedbackBackBtn.addEventListener ('click', function () {
  feedback.style.left = "-500px";
  callback.style.left = "-500px";
  overlay.style.left = "-2000px";
});

overlay.addEventListener ('click', function () {
  feedback.style.left = "-500px";
  callback.style.left = "-500px";
  overlay.style.left = "-2000px";
  if (mql_1120.matches) {
  mobileMenu.style.left = "-350px";
  }
});




