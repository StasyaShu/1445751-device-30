const headerWrapper = document.querySelector('.main-links-wrapper');
const catalogMenu = document.querySelector('.header-offers-list');
const catalogToggle = document.querySelector('.header-offers-link');

catalogMenu.classList.add('header-offers-list-hidden');
headerWrapper.classList.remove('overflow');

catalogToggle.addEventListener('click', (evt) => {
  evt.preventDefault();
  catalogMenu.classList.toggle('header-offers-list-open');
  headerWrapper.classList.add('overflow');
  catalogMenu.classList.toggle('header-offers-list-hidden');

  if (catalogMenu.classList.contains('header-offers-list-hidden')) {
    headerWrapper.classList.remove('overflow');
  }
})
