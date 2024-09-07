const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
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
