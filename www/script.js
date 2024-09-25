document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    const header = document.querySelector('header');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            const targetId = this.getAttribute('href');

            // Kontrola, zda je cílová sekce interní (začíná s "#")
            if (targetId.startsWith('#')) {
                event.preventDefault(); // Zamezení výchozí akce kliknutí
                const targetSection = document.querySelector(targetId); // Výběr cílové sekce

                // Odebere "active" třídu ze všech položek
                navLinks.forEach(navLink => navLink.parentElement.classList.remove('active'));
                this.parentElement.classList.add('active'); // Přidá "active" třídu k aktuální položce

                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth' // Plynulý efekt scrollování
                    });

                    // Zavření menu po kliknutí
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            } else {
                // Pokud není interní odkaz, přesměrujte na stránku
                window.location.href = targetId;
            }
        });
    });

    // Toggle burger menu
    burger.addEventListener('click', function () {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
});
