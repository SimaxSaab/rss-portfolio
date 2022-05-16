console.log('Оцениваю себя на скорую руку в максимум\nВозможно снижение баллов на 5)');

// local storage with lang and theme
let lis = 'en'; // lang in storage
let tis = 'dark'; // theme in storage

function setLocalStorage() {
  localStorage.setItem('lang', lis);
}

function setLocalTheme() {
  localStorage.setItem('theme', tis);
}

function getLocalStorage() {
  if(localStorage.getItem('theme')) {
    const tis = localStorage.getItem('theme');
    if(tis == 'light') toggleTheme();
  }
  if(localStorage.getItem('lang')) {
    const lis = localStorage.getItem('lang');
    getTranslate(lis);
  }
}
window.addEventListener('load', getLocalStorage);

// translate
const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'en': 'en',
    'ru': 'ru',
    'switch-theme': {'light': 'Dark', 'dark': 'Light'},
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Retouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'en': 'анг',
    'ru': 'ру',
    'switch-theme': {'light': 'Темная тема', 'dark': 'Светлая тема'},
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}

// adaptive menu
let h = document.querySelector('.hamburger');
let nav = document.querySelector('nav');
h.addEventListener('click', open);
nav.addEventListener('click', closeMenu);

function open(e) {
  console.log(e.target);
  h.classList.toggle('is-active');
  nav.classList.toggle('is-active');
}

function closeMenu(e) {
  if (e.target.classList.contains('link')) {
    h.classList.remove('is-active');
    nav.classList.remove('is-active');
  }
}

// change portfolio images
const portfolioBtns = document.querySelector('.portfolio-buttons');
const portfolioAllBtns = document.querySelectorAll('.btn-zero');
const portfolioImages = document.querySelectorAll('.portfolio-image');

portfolioBtns.addEventListener('click', changeImage);

function changeImage(event) {
  if(event.target.classList.contains('btn-zero')) {
    console.log(event.target.dataset.season);
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    portfolioAllBtns.forEach((item, index) => item.classList.add('btn'));
    event.target.classList.remove('btn');
  }
}

// translate code
const lang = document.querySelector('.switch');
const langBtns = document.querySelectorAll('.lang');

lang.addEventListener('click', () => {
  getTranslate(event.target.dataset.lang);
  langBtns.forEach((item, index) => item.classList.remove('gold'));
  event.target.classList.add('gold');
  lis = event.target.dataset.lang;
  setLocalStorage();
  console.log(lis);
});

function getTranslate(lang) {
  const itemsOfPage = document.querySelectorAll('[data-i18n]');
  itemsOfPage.forEach((item, index) => {
    if(item.textContent != i18Obj[lang][item.dataset.i18n]) {
      if(typeof i18Obj[lang][item.dataset.i18n] != 'object') {
        item.textContent = i18Obj[lang][item.dataset.i18n];
      } else {
        item.textContent = i18Obj[lang][item.dataset.i18n][tis];
      }
    }
  });
}

// switch theme
let itemsForSwitcher = ['.switch-theme', ".skills", '.skills-heading', '.skills-heading-wrapper', '.portfolio', '.video', '.price', '.l1', '.l2', '.l3', '.portfolio-heading', '.video-heading', '.price-heading'];

const themeSwitcher = document.querySelector('.switch-theme');
const btnSwither = document.querySelectorAll('.btn-zero');

themeSwitcher.addEventListener('click', toggleTheme);

function toggleTheme() {
  itemsForSwitcher.forEach((item) => document.querySelector(item).classList.toggle('light-theme'));
  btnSwither.forEach((item) => item.classList.toggle('ltForPortButs'));
  if(themeSwitcher.classList.contains('light-theme')) {
    tis = 'light';
  } else {
    tis = 'dark';
  }
  setLocalTheme();
  themeSwitcher.textContent = i18Obj[lis]['switch-theme'][tis];
};