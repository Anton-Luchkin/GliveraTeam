
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const menuItems = document.querySelectorAll('.menu__item');
const paginationBtns = document.querySelectorAll('.btn');
const statusBtns = document.querySelectorAll('.customers__btn');

sidebarToggle.addEventListener('click', () => {
	sidebar.classList.toggle('sidebar--active');
	sidebarToggle.classList.toggle('sidebar-toggle--active');
});

function toggleMenu(event) {
	menuItems.forEach(menuItem => menuItem.classList.remove('menu__item--active'));
	event.currentTarget.classList.add('menu__item--active');
}
menuItems.forEach(menuItem => menuItem.addEventListener('click', toggleMenu));

function togglePagination(event) {
	paginationBtns.forEach(paginationBtn => paginationBtn.classList.remove('pagination__button--active'));
	event.currentTarget.classList.add('pagination__button--active');
}
paginationBtns.forEach(paginationBtn => paginationBtn.addEventListener('click', togglePagination));

statusBtns.forEach(statusBtn => statusBtn.addEventListener('click', function () {
	this.classList.toggle('customers__btn--inactive');
	this.textContent = this.classList.contains('customers__btn--inactive') ? 'Inactive' : 'Active';
}));
