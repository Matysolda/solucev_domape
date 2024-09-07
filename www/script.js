html {
    scroll-behavior: smooth;
}

/* General Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #000;
    color: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
}

.logo img {
    height: 40px;
}

.nav-links {
    list-style: none;
    display: flex;
    align-items: center;
}

.nav-links li {
    margin-left: 20px;
}

.nav-links a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #ECC7AC;
}

.burger {
    display: none;
    cursor: pointer;
}

.burger div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px;
    transition: all 0.3s ease;
}
@media (max-width: 768px) {
    .nav-links {
        flex-direction: column;
        width: 250px; /* Šířka menu */
        position: fixed;
        top: 0;
        right: -250px; /* Skryté mimo obrazovku napravo */
        height: 100vh;
        background-color: #000;
        padding-top: 60px;
        transition: transform 0.3s ease;
        z-index: 200;
    }

    .nav-links.nav-active {
        transform: translateX(-250px); /* Posune menu do pohledu */
    }

    .nav-links a {
        padding: 15px 20px;
        display: block;
    }

    .burger {
        display: block;
        z-index: 300;
    }

    .burger.toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .burger.toggle .line2 {
        opacity: 0;
    }

    .burger.toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
}




.hero {
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('img/matysoldax_realistic_business_office_group_of_people_working__64318472-5262-43e2-9bda-d7f95f12aba1_0.png'); /* Replace with your image path */
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    margin-top: 60px; /* To prevent content from hiding under fixed header */
    position: relative;
}

.hero-content {
    position: relative;
    z-index: 1; /* Ensure text is above the overlay */
}

.hero-content h1 {
    font-family: "Racing Sans One", sans-serif;
    font-size: 60px;
}
.hero-content p {
    font-family: "Open Sans";
    color: #ECC7AC;
    font-size: 34px;
    margin: 10px 0;
}

.button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
}

.button:hover {
    background-color: darkblue;
}


.about-us {
    padding: 60px 20px;
    background-color: #f9f9f9; /* Light background to contrast the hero section */
    text-align: center;
}

.about-us h2 {
    font-size: 36px;
    font-family: "Racing Sans One", sans-serif;
    margin-bottom: 30px;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
    padding: 0 15px; /* Add some padding for smaller screens */
}

.about-content p {
    font-family: "Open Sans";
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.about-content p i {
    font-size: 54px;
    margin-right: 10px;
    color: #333; /* Arrow color */
}
.custom-bullet {
    font-size: 24px;
    margin-right: 10px;
    color: #333; /* Bullet color */
}

/* Responsive Styles */
@media (max-width: 768px) {
    .about-us {
        padding: 40px 10px; /* Reduce padding on smaller screens */
    }

    .about-us h2 {
        font-size: 28px; /* Adjust font size for smaller screens */
        margin-bottom: 20px; /* Reduce margin */
    }

    .about-content p {
        font-size: 16px; /* Smaller font size for better readability */
        line-height: 1.4; /* Adjust line height */
        margin-bottom: 15px; /* Reduce margin between paragraphs */
        flex-direction: column; /* Stack text and bullet vertically */
        align-items: flex-start; /* Align text to the start */
    }

    .custom-bullet {
        margin-bottom: 5px; /* Add space between bullet and text */
    }
}

@media (max-width: 480px) {
    .about-us h2 {
        font-size: 24px; /* Further reduce font size for very small screens */
    }

    .about-content p {
        font-size: 14px; /* Further reduce font size */
        line-height: 1.4;
        margin-bottom: 10px; /* Further reduce margin */
    }

    .custom-bullet {
        font-size: 20px; /* Slightly smaller bullet */
    }
}


/* Services Section */
.services {
    padding: 60px 20px;
    background-color: #111; /* Dark background to contrast with other sections */
    color: white;
    text-align: center;
}

.services h2 {
    font-size: 36px;
    margin-bottom: 40px;
    font-family: "Racing Sans One", sans-serif;
}

.service-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;
    flex-wrap: wrap; /* Allows wrapping on smaller screens */
}

.service-item.reverse {
    flex-direction: row-reverse; /* Reverse direction for alternating effect */
}

.service-text {
    flex: 1;
    padding: 20px;
    text-align: left;
}

.service-text h3 {
    font-size: 28px;
    margin-bottom: 15px;
}

.service-text p {
    font-size: 18px;
    margin-bottom: 15px;
    color: #ddd; /* Light color for better readability */
}

.service-text ul {
    list-style: disc;
    margin-left: 20px;
    color: #bbb; /* Adjusted for readability */
}

.service-text ul li {
    margin-bottom: 10px;
}

.service-image {
    flex: 1;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.service-image img {
    max-width: 80%; /* Restrict image size */
    border-radius: 50%; /* Make the image circular */
}

/* Responsive Styles */
@media (max-width: 768px) {
    .service-item {
        flex-direction: column; /* Stack items vertically */
        text-align: center; /* Center-align text for smaller screens */
    }

    .service-item.reverse {
        flex-direction: column; /* Override reverse for stacking */
    }

    .service-text {
        text-align: center; /* Center text */
        padding: 10px 20px; /* Adjust padding */
    }

    .service-image img {
        max-width: 60%; /* Smaller images on small screens */
    }
}

