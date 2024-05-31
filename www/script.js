document.addEventListener("DOMContentLoaded", function() {
    const cookieConsent = document.getElementById('cookieConsent');
    const acceptCookiesBtn = document.getElementById('acceptCookies');
    const rejectCookiesBtn = document.getElementById('rejectCookies');
    const cookieNames = ['_ga', '_ga_PJ2BE', '_ga_PJ2BEFXR2R'];

    const hasAcceptedAllCookies = localStorage.getItem('hasAcceptedAllCookies');

    if (hasAcceptedAllCookies !== 'true') {
        cookieConsent.style.display = 'block'; // Zobrazí upozornění na cookies, pokud uživatel dosud nepřijal cookies
    }

    acceptCookiesBtn.addEventListener('click', function() {
        for (const cookieName of cookieNames) {
            localStorage.setItem(cookieName, 'true');
        }
        localStorage.setItem('hasAcceptedAllCookies', 'true');
        cookieConsent.style.display = 'none'; // Skryje upozornění na cookies po přijetí cookies
    });

    rejectCookiesBtn.addEventListener('click', function() {
        for (const cookieName of cookieNames) {
            localStorage.setItem(cookieName, 'false');
        }
        localStorage.setItem('hasAcceptedAllCookies', 'false');
        cookieConsent.style.display = 'none'; // Skryje upozornění na cookies po odmítnutí cookies
    });
});

