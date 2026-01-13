document.addEventListener('DOMContentLoaded', function () {
    let currentOpenMenu = null;

    document.addEventListener('click', function (event) {
        const isAdminMenuButton = event.target.closest('.btn--admin-menu');
        const isMenuItem = event.target.closest('.admin__desktop--inner');
        const isInsideOpenMenu = currentOpenMenu && currentOpenMenu.contains(event.target);

        // Handle click on admin menu button
        if (isAdminMenuButton) {
            event.preventDefault();
            const menu = isAdminMenuButton.closest('li')?.querySelector('.admin__desktop--inner') ||
                isAdminMenuButton.closest('.nav__header--main')?.querySelector('.admin__desktop--inner');

            if (menu) {
                // Close the currently open menu if it's different
                if (currentOpenMenu && currentOpenMenu !== menu) {
                    currentOpenMenu.classList.add('hide');
                }
                // Toggle the current menu
                menu.classList.toggle('hide');
                currentOpenMenu = menu.classList.contains('hide') ? null : menu;
            }
        } else if (!isInsideOpenMenu) {
            // Close the currently open menu if clicked outside
            if (currentOpenMenu) {
                currentOpenMenu.classList.add('hide');
                currentOpenMenu = null;
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const registerButtons = document.querySelectorAll('.btnRegister');

    const popup = document.querySelector('.popupRegister');

    registerButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Убираем класс hide у попапа
            popup.classList.remove('hide');
        });
    });
});