const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'standart': 'Standart',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'premium': 'Premium',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'gold': 'Gold',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
    'email': 'E-mail',
    'phone': 'Phone',
    'message': 'Message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
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
    'standart': 'Стандарт',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'premium': 'Премиум',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'gold': 'Золото',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
    'email': 'Электронный адрес',
    'phone': 'Телефон для связи',
    'message': 'Сообщение'
  }
}
function changePortfolioImage(event) {
  if(event.target.classList.contains('portfolio-button')) {
    changeClassActive('.portfolio-button.is-active');
    event.target.classList.toggle('is-active');
    portfolioImages.forEach((img, index) => img.src = `./assets/img/${event.target.name}/${index + 1}.jpg`);
  }
}

function getTranslate(Lng) {
  const lngArray = document.querySelectorAll('[data-i18n]');
  lngArray.forEach((currentElement) => {
    const elem = currentElement.dataset.i18n;
    if (Lng === 'ru') {
      currentElement.textContent = i18Obj.ru[`${elem}`];
      if (currentElement.placeholder)
        currentElement.placeholder = i18Obj.ru[`${elem}`];
    }
    else {
      currentElement.textContent = i18Obj.en[`${elem}`];
      if (currentElement.placeholder)
        currentElement.placeholder = i18Obj.en[`${elem}`];
    }
  });
}

function preloadImages() {
  for(let i = 1; i <= 6; i++) {
    const imgSummer = new Image();
    imgSummer.src = `./assets/img/summer/${i}.jpg`;
    const imgSpring = new Image();
    imgSpring.src = `./assets/img/spring/${i}.jpg`;
    const imgWinter = new Image();
    imgWinter.src = `./assets/img/winter/${i}.jpg`;
  }
}

function changeClassActive(className){
  const activeBtn = document.querySelector(className);
  activeBtn.classList.toggle('is-active');
  
}

function changeThemeActive(className){
  if(document.querySelector(className)){
    const activeTheme = document.querySelector(className);
    activeTheme.classList.toggle('light-theme');
  }
}

function setLocalStorage() {
  localStorage.setItem('lang', lang);
  localStorage.setItem('theme', theme);
}
function getLocalStorage() {
  if(localStorage.getItem('lang') == 'ru') 
    document.getElementById('ru').click();
  else
    document.getElementById('en').click();
  if(localStorage.getItem('theme') == 'light')
    document.getElementById('moon').click();
}

function updateVol(e){
  myVidVolume.value = e;
  myVid.volume = e / 100;
  myVidVolume.style.setProperty('background', `linear-gradient(to right,rgba(189,174,130,.8) 0%, rgba(189,174,130,.8) ${e}%, rgba(255,255,255,.5) ${e}%, rgba(255,255,255,.5) 100%)`);
  if(volumeIcon.classList.contains('mute')){
    volumeIcon.classList.toggle('mute');
  }
  if(myVid.volume == 0)
    if(!volumeIcon.classList.contains('mute'))
      volumeIcon.classList.toggle('mute');
}
function updateVid(e){
  myVid.currentTime = e * myVid.duration / 100;
}

function updateProgress(val){
  myVidProgress.value = val;
  if(val == 100){
    document.querySelector('.play-icon.play').classList.toggle('pause');
    updateVid(0);
  }  
}

function updateProgLineGrad(position){
  myVidProgress.style.setProperty('background', `linear-gradient(to right,rgba(189,174,130,.8) 0%, rgba(189,174,130,.8) ${position}%, rgba(255,255,255,.5) ${position}%, rgba(255,255,255,.5) 100%)`);
}

function startPlay(){
  myVid.play();
  if(!controlPlay.classList.contains('is-active')){
    changeClassActive('.play-icon.play');
  }
  if(!playBtn.classList.contains('is-active'))
    changeClassActive('.play-btn');
  myVid.style.setProperty('cursor', 'pointer');
}
function stopPlay(){
  myVid.pause();
  if(controlPlay.classList.contains('is-active')){
    changeClassActive('.play-icon.play');
  }
  if(playBtn.classList.contains('is-active'))
    changeClassActive('.play-btn');
  myVid.style.setProperty('cursor', 'default');
}

function changeFullScreen(){
  changeClassActive('.fullscreen');
  changeClassActive('.body');
  changeClassActive('.viewer');
  changeClassActive('.player');
  if (!document.fullscreenElement && fullscreen.classList.contains('is-active'))
    document.querySelector('.player').requestFullscreen();
  else if(document.fullscreenElement)
    document.exitFullscreen();
}

//Меню бургер
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const ul = document.querySelector('.ul-nav');
const mainBlock = document.querySelector('.main-container')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('visible');
  ul.classList.toggle('visible');
  mainBlock.classList.toggle('opacity');
});
ul.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('visible');
  ul.classList.toggle('visible');
  mainBlock.classList.toggle('opacity');
});

//Изменение картинок в портфолио по нажатию кнопки тематики
const portfolioImages = document.querySelectorAll('.image-portfolio');
const portfolioBtns = document.querySelector('.portfolio-btns')
portfolioBtns.addEventListener('click', (event) => {
  changePortfolioImage(event);
});
preloadImages();

//Выбор языка страницы
const switchLng = document.querySelector('.switch-lng');
switchLng.addEventListener('click', (event) => {
  if(event.target.classList.contains('lng')){
    changeClassActive('.lng.is-active'); 
    if(document.querySelector('.moon.is-active'))
      changeThemeActive('.lng.light-theme');
    event.target.classList.toggle('is-active');
    if(document.querySelector('.moon.is-active'))
      changeThemeActive('.lng.is-active');
    getTranslate(event.target.dataset.namelng);
    if (event.target.dataset.namelng == 'en')
      lang = 'en';
    else
      lang = 'ru';
  } 
});

//Смена темы
const moon = document.querySelector('.moon');
const contacts = document.querySelector('.contacts');
const lngIsActive = document.querySelector('.lng.is-active');
const btnLightTheme = document.querySelectorAll('.portfolio-button');
moon.addEventListener('click', (event) => {
  btnLightTheme.forEach(btn => btn.classList.toggle('light-theme'));
  document.querySelectorAll('.login').forEach(btn => btn.classList.toggle('light-theme'));
  changeThemeActive('.lng.is-active');
  changeThemeActive('.contacts-title');
  changeThemeActive('.message');
  event.target.classList.toggle('is-active');
  if(event.target.classList.contains('is-active')) { 
    document.documentElement.style.setProperty('--mainBlack', 'White');
    document.documentElement.style.setProperty('--mainWhite', 'Black');
    document.body.style.setProperty("background-image", "url('./assets/img/bg-sun.jpg')");
    contacts.style.setProperty("background-image", "url('./assets/img/contacts-sun.jpg')");
    document.querySelector('.logo').style.setProperty("background-image", "url('./assets/svg/logo-sun.svg')");
    document.querySelector('.social-list-inst').style.setProperty("background-image", "url('./assets/svg/inst-sun.svg')");
    document.querySelector('.social-list-fb').style.setProperty("background-image", "url('./assets/svg/fb-sun.svg')");
    document.querySelector('.social-list-tw').style.setProperty("background-image", "url('./assets/svg/tw-sun.svg')");
    document.querySelector('.social-list-pinterest').style.setProperty("background-image", "url('./assets/svg/pint-sun.svg')");
  }
  else {
    document.documentElement.style.setProperty('--mainBlack', 'Black');
    document.documentElement.style.setProperty('--mainWhite', 'White');
    document.body.style.setProperty("background-image", "url('./assets/img/bg.jpg')");
    contacts.style.setProperty("background-image", "url('./assets/img/contacts.jpg')");
    document.querySelector('.logo').style.setProperty("background-image", "url('./assets/svg/logo.svg')");
    document.querySelector('.social-list-inst').style.setProperty("background-image", "url('./assets/svg/inst.svg')");
    document.querySelector('.social-list-fb').style.setProperty("background-image", "url('./assets/svg/fb.svg')");
    document.querySelector('.social-list-tw').style.setProperty("background-image", "url('./assets/svg/tw.svg')");
    document.querySelector('.social-list-pinterest').style.setProperty("background-image", "url('./assets/svg/pint.svg')");
  } 
  if(theme == 'dark')
    theme = 'light';
  else  
    theme = 'dark';
});

//Video
const myVid = document.querySelector('.viewer');
const myVidVolume = document.querySelector('.volume');
const myVidProgress = document.querySelector('.progress');
const myVidControls = document.querySelector('.controls');
const volumeIcon = document.querySelector('.play-icon.volume-icon');
const fullscreen = document.querySelector('.play-icon.fullscreen');
const playBtn = document.querySelector('.play-btn');
const controlPlay = document.querySelector('.play-icon.play')
myVid.addEventListener('click', () => {
  if (playBtn.classList.contains('is-active'))
    stopPlay();
});
controlPlay.addEventListener('click', () => {
  if (myVid.paused)
    startPlay();
  else
    stopPlay();
});
playBtn.addEventListener('click', () => {
  if (myVid.paused)
    startPlay();
  else
    stopPlay();
});
volumeIcon.addEventListener('click', (event) => {
  event.target.classList.toggle('mute');
  if(event.target.classList.contains('mute'))
    updateVol(0);
  else
    updateVol(10); 
});
myVid.addEventListener('timeupdate', () => {
  let position = Math.floor(myVid.currentTime * 100 / myVid.duration);
  updateProgress(position);
  updateProgLineGrad(position);
});
fullscreen.addEventListener('click', () => {
  changeFullScreen();
});
document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement && fullscreen.classList.contains('is-active'))
    changeFullScreen();
});  

// Сохранение пользовательских настроек 
let lang = 'en';
let theme = 'dark'
window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', getLocalStorage);


