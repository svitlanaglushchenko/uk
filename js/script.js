
// Випадаюче меню
let isMobile = {
   Android: function () { return navigator.userAgent.match(/Android/i); },
   BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
   iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
   Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
   Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
   any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
   body.classList.add('touch');
   let arrow = document.querySelectorAll('.arrow');
   for (i = 0; i < arrow.length; i++) {
      let thisLink = arrow[i].previousElementSibling;
      let subMenu = arrow[i].nextElementSibling;
      let thisArrow = arrow[i];

      thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function () {
         subMenu.classList.toggle('open');
         thisArrow.classList.toggle('active');
      });
   }
} else {
   body.classList.add('mouse');
};

"use strict"
// Ініціалізація Swiper
new Swiper('.image-slider', {
   // Стрілки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   //Навігація
   //Булети, поточна позиція, прогресбар
   pagination: {
      el: '.swiper-pagination',
      //Булети
      clickable: true,
      //Динамічні булети
      dynamicBullets: true,
      //Кастомні булети
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
   },
   //Скролл
   //scrollbar {
   //el: '.swiper-scrollbar',
   //Можливість перетягувати скролл
   //draggable: true
   //},
   //Вмикання-вимикання
   //перетягування фото на ПК
   simulateTouch: true,
   //Чуттєвість свайпа
   touchRatio: 1,
   //Кут спрацьовування свайпа-перетягування
   touchAngle: 45,
   //Курсор перетягування
   grabCursor: true,

   //Перемикання при кліку на слайд
   slideToClickedSlide: true,

   //Навігація по хешу
   hashNavigation: {
      //Відслідковувати стан
      watchState: true,
   },
   // Керування клавіатурою
   keyboard: {
      // Увімкнути - вимкнути
      enabled: true,
      // Увімкнути - вимнтути
      // тільки коли слайдер
      // в межах вьюпорта
      onlyInViewport: true,
      // Увімкнути - вимкнути
      // керування клавішами
      //pageUp, pageDown
      pageUpDown: true,
   },
   //Керування колесом миші
   mousewheel: {
      //Чуттєвість колеса миші
      sensitivity: 1,
      //Клас об'єкта на якому
      //буде спрацьовувати прокрутка мишою
      EventTarget: ".image-slider"
   },
   //Автовисота
   autoHeight: true,
   //Кількість слайдів для показу
   slidesPerView: 3,
   //Відключення функціонала
   //якщо слайдів менше, ніж потрібно
   watchOverflow: true,
   //Отступ между слайдами
   spaceBetween: 30,
   //Кількість слайдів, що пролистується
   slidePerGroup: 1,
   //Активний слайд по центру
   centeredSlides: true,
   //Стартовий слайд
   initialSlide: 1,
   //Мультирядність
   slidePerColumn: 1,
   //Безкінечний слайдер
   loop: true,
   //Вільний режим
   freeMode: true,
   //Автопрокрутка
   autoplay: {
      //Пауза між прокруткою
      delay: 2000,
      //Закінчити на останньому слайді
      stopOnLastSlide: true,
      //Вимкнути після ручного перемикання
      disableOnInteraction: false,
   },
   //Швидкість
   speed: 800,
   //Ефекти перемикання слайдів
   //Зміна прозорості
   //effect: 'fade',
   //
   //fadeEffect: {
   //Паралельна
   //зміна прозорості
   //crossFade: true

   //},
   //Ефекти перемикання слайдів - 2
   //Переворот
   /*effect: 'flip',
   //Додаток до flip
   flipEffect: {
      //Тінь
      slideShadows: true,
      //Показ тільки активного слайду
      limitRotation: true
   },*/
   //Ефекти перемикання слайдів - 3
   //Куб
   /*
   effect: 'cube',
   //
   cubeEffect: {
      //
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
   },
   */

   // Ефекти перемикання слайдів
   // Ефект потока
   /*
   effect: 'coverflow',
   // Додатки до coverflow
   coverflowEffect: {
      // Кут
      rotate: 20,
      // Накладення
      stretch: 50,
      // Тінь
      slideShadows: true,
   },
*/

   // Брейк пойнти (адаптив)
   // Ширина екрану
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      }
   },

   // Вимкнути передзавантаження малюнків
   preloadImages: false,
   // Lazy loading
   //(підзавантаження малюнків)
   lazy: {
      //Підзавантажувати при старті
      // перемикання слайда
      loadOnTransitionStart: false,
      // Підвантажити попередній
      // і наступний малюнок
      loasPrevNext: false,
   },
   // Спостерігання за видимими слайдами
   watchSlideProgress: true,
   // Додавання класу видимим слайдам
   watchSlidesVisibility: true,

});
// Ініціалізація Swiper
new Swiper('.image-slider_tematich', {
   // Стрілки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   //Навігація
   //Булети, поточна позиція, прогресбар
   pagination: {
      el: '.swiper-pagination',
      //Булети
      clickable: true,
      //Динамічні булети
      dynamicBullets: true,
      //Кастомні булети
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
   },
   //Вмикання-вимикання
   //перетягування фото на ПК
   simulateTouch: true,
   //Чуттєвість свайпа
   touchRatio: 1,
   //Кут спрацьовування свайпа-перетягування
   touchAngle: 45,
   //Курсор перетягування
   grabCursor: true,

   //Перемикання при кліку на слайд
   slideToClickedSlide: true,

   //Навігація по хешу
   hashNavigation: {
      //Відслідковувати стан
      watchState: true,
   },
   // Керування клавіатурою
   keyboard: {
      // Увімкнути - вимкнути
      enabled: true,
      // Увімкнути - вимнтути
      // тільки коли слайдер
      // в межах вьюпорта
      onlyInViewport: true,
      // Увімкнути - вимкнути
      // керування клавішами
      //pageUp, pageDown
      pageUpDown: true,
   },
   //Керування колесом миші
   mousewheel: {
      //Чуттєвість колеса миші
      sensitivity: 1,
      //Клас об'єкта на якому
      //буде спрацьовувати прокрутка мишою
      EventTarget: ".image-slider_tematich"
   },
   //Автовисота
   autoHeight: true,
   //Кількість слайдів для показу
   slidesPerView: 1,
   //Відключення функціонала
   //якщо слайдів менше, ніж потрібно
   watchOverflow: true,
   //Отступ между слайдами
   spaceBetween: 30,
   //Кількість слайдів, що пролистується
   slidePerGroup: 1,
   //Активний слайд по центру
   centeredSlides: true,
   //Стартовий слайд
   initialSlide: 1,
   //Мультирядність
   slidePerColumn: 1,
   //Безкінечний слайдер
   loop: true,
   //Вільний режим
   freeMode: true,
   //Автопрокрутка
   autoplay: {
      //Пауза між прокруткою
      delay: 2000,
      //Закінчити на останньому слайді
      stopOnLastSlide: true,
      //Вимкнути після ручного перемикання
      disableOnInteraction: false,
   },
   //Швидкість
   speed: 800,
   // Вимкнути передзавантаження малюнків
   preloadImages: true,
   // Lazy loading
   //(підзавантаження малюнків)
   //lazy: {
   //Підзавантажувати при старті
   // перемикання слайда
   //   loadOnTransitionStart: false,
   // Підвантажити попередній
   // і наступний малюнок
   // loasPrevNext: false,
   //},
   // Спостерігання за видимими слайдами
   //watchSlideProgress: true,
   // Додавання класу видимим слайдам
   //watchSlidesVisibility: true,

});
