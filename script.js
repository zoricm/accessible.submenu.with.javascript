const submenuToggle = document.querySelectorAll('.submenu-link');
const submenu = document.querySelectorAll('.submenu');

submenuToggle.forEach(el => {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        const submenu = el.nextElementSibling;

        if (submenu.style.display === 'none' || submenu.style.display === '') {
            submenu.style.display = 'flex';
            el.setAttribute('aria-expanded', 'true');
        } else {
            submenu.style.display = 'none';
            el.setAttribute('aria-expanded', 'false');
        }
    });

    el.addEventListener('focusout', function() {
        setTimeout(function() {
            const submenu = el.nextElementSibling;

            if (!submenu.contains(document.activeElement)) {
                submenu.style.display = 'none';
                el.setAttribute('aria-expanded', 'false');
            }
        }, 0);
    });
});

submenu.forEach(submenu => {
    submenu.addEventListener('focusout', function() {

        setTimeout(function() {
            if (!submenu.contains(document.activeElement)) {
                submenu.style.display = 'none';
                const submenuParent = submenu.parentElement.querySelector('.submenu-link');
                if (submenuParent) {
                    submenuParent.setAttribute('aria-expanded', 'false');
                }
            }
        }, 0);
    });

    submenu.addEventListener('focusin', function() {
        submenu.style.display = 'flex';
        const submenuParent = submenu.parentElement.querySelector('.submenu-link');
        if (submenuParent) {
            submenuParent.setAttribute('aria-expanded', 'true');
        }
    });
});
