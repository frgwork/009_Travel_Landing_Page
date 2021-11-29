const menuIcon = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu__body');


menuIcon.addEventListener('click', () => {
	if (!menuIcon.classList.contains('menu-icon-active')) {
		menuIcon.classList.add('menu-icon-active');
		menuBody.classList.add('menu__body--active');
	} else {
		menuIcon.classList.remove('menu-icon-active');
		menuBody.classList.remove('menu__body--active');
	}
});