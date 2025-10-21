const content = document.getElementById('content');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('site-nav');
const menuIcon = document.getElementById('menu-icon');

let scrollPosition = 0;

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');

  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

  if (isOpen) {
    menuIcon.src = 'assets/images/icon-menu-close.svg';
    menuIcon.alt = 'Close menu';

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    scrollPosition = window.scrollY || window.pageYOffset || 0;

    content.style.top = `-${scrollPosition}px`;

    document.body.classList.add('menu-open');
  } else {
    const top = content.style.top;
    menuIcon.src = 'assets/images/icon-menu.svg';
    menuIcon.alt = 'Open menu';

    document.body.classList.remove('menu-open');
    document.body.style.paddingRight = '';
    content.style.top = '';
    const restoredScroll = Math.abs(parseInt(top || '0', 10)) || 0;
    window.scrollTo(0, restoredScroll);
  }
});
