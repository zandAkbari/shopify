   document.addEventListener('DOMContentLoaded', function() {
        const menuItems = document.querySelectorAll('.menu-item > a');

        menuItems.forEach(menuItem => {
            menuItem.addEventListener('click', function(event) {
                event.preventDefault();

                // Close all other submenus
                menuItems.forEach(otherMenuItem => {
                    if (otherMenuItem !== menuItem) {
                        otherMenuItem.nextElementSibling.style.display = 'none';
                    }
                });

                const submenu = event.currentTarget.nextElementSibling;
                const isSubmenuVisible = getComputedStyle(submenu).display !== 'none';
                submenu.style.display = isSubmenuVisible ? 'none' : 'flex';
            });
        });

        document.addEventListener('click', function(event) {
            if (!event.target.closest('.menu-item')) {
                const submenus = document.querySelectorAll('.submenu');
                submenus.forEach(submenu => {
                    submenu.style.display = 'none';
                });
            }
        });
    });