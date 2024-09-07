document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    const header = document.querySelector('header');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    // Smooth scroll and close menu for smaller screens
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Odebere "active" třídu ze všech položek
            navLinks.forEach(navLink => navLink.parentElement.classList.remove('active'));

            // Přidá "active" třídu k aktuální položce
            this.parentElement.classList.add('active');

            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close menu after click
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });

    // Toggle burger menu
    burger.addEventListener('click', function () {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a'); // Výběr všech odkazů v navigaci
    const header = document.querySelector('header'); // Výběr pevného menu

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Zamezení výchozí akce kliknutí

            const targetId = this.getAttribute('href'); // Získání ID cílové sekce
            const targetSection = document.querySelector(targetId); // Výběr cílové sekce

            if (targetSection) {
                const headerHeight = header.offsetHeight; // Získání výšky pevného menu
                const targetPosition = targetSection.offsetTop - headerHeight; // Výpočet cílové pozice posunu

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' // Plynulý efekt scrollování
                });
            }
        });
    });
});
