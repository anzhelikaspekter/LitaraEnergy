document.addEventListener('DOMContentLoaded', function() {
    const btnMenu = document.querySelector('.btnMenu');
    const adminMobile = document.querySelector('.admin__mobile');
    let lastOpenedInner = null;

    // Показать/скрыть меню на мобильных устройствах
    btnMenu.addEventListener('click', function() {
        adminMobile.classList.toggle('hide');
    });

    // Скрыть меню при клике вне его области
    document.addEventListener('click', function(event) {
        if (!adminMobile.contains(event.target) && !btnMenu.contains(event.target)) {
            adminMobile.classList.add('hide');
        }
    });

    // Найти все кнопки внутри admin__mobile--item
    const adminMobileItems = document.querySelectorAll('.admin__mobile--item');

    adminMobileItems.forEach(function(item) {
        const btnAdminMobile = item.querySelector('.btn--admin-mobile');
        const adminMobileInner = item.querySelector('.admin__mobile--inner');

        if (btnAdminMobile && adminMobileInner) {
            btnAdminMobile.addEventListener('click', function(event) {
                event.stopPropagation(); // Остановить всплытие события

                // Скрыть предыдущий открытый блок, если он не совпадает с текущим
                if (lastOpenedInner && lastOpenedInner !== adminMobileInner) {
                    lastOpenedInner.classList.add('hide');
                }

                // Переключить класс hide у текущего блока
                adminMobileInner.classList.toggle('hide');

                // Обновить ссылку на последний открытый блок
                if (!adminMobileInner.classList.contains('hide')) {
                    lastOpenedInner = adminMobileInner;
                } else {
                    lastOpenedInner = null;
                }
            });
        }
    });
});