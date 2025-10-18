const content = document.getElementById('content');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('site-nav');
const menuIcon = document.getElementById('menu-icon');


menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

  if (isOpen) {
    menuIcon.src = 'assets/images/icon-menu-close.svg';
    menuIcon.alt = 'Close menu';
    content.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    menuIcon.src = 'assets/images/icon-menu.svg';
    menuIcon.alt = 'Open menu';
    content.style.backgroundColor = 'rgb(255,255,255)';
  }
})