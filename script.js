const themeSwtich = document.getElementById('theme__swich');
const themeIcon = document.getElementById('theme__icon');
const themeName = document.getElementById('theme__name');
const image1 = document.querySelector('.header__img img');
const image2 = document.querySelector('.work-1');
const image3 = document.querySelector('.work-2');
const image4 = document.querySelector('.work-3');
const image5 = document.querySelector('.features-1');
const image6 = document.querySelector('.features-2');
const image7 = document.querySelector('.features-3');
const image8 = document.querySelector('.about-big');
const image9 = document.querySelector('.about-1');
const image10 = document.querySelector('.about-2');
const image11 = document.querySelector('.about-3');
const image12 = document.querySelector('.about-4');
const image13 = document.querySelector('.contact-big');

// Dark Mode
function darkMode() {
    themeName.textContent = 'Dark ';
    themeIcon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'dark');
    imagesMode('dark');
}

// Light Mode
function lightMode() {
    themeName.textContent = 'Light ';
    themeIcon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'light');
    imagesMode('light');
}

// Switching Images Light and Dark Modes
function imagesMode(mode) {
    image1.src = `img/header_${mode}_.svg`;
    image2.src = `img/work_${mode}_1.svg`;
    image3.src = `img/work_${mode}_2.svg`;
    image4.src = `img/work_${mode}_3.svg`;
    image5.src = `img/features_${mode}_1.svg`;
    image6.src = `img/features_${mode}_2.svg`;
    image7.src = `img/features_${mode}_3.svg`;
    image8.src = `img/team_${mode}_.svg`;
    image9.src = `img/about_${mode}_1.svg`;
    image10.src = `img/about_${mode}_2.svg`;
    image11.src = `img/about_${mode}_1.svg`;
    image12.src = `img/about_${mode}_2.svg`;
    image13.src = `img/contact_${mode}_.svg`;
}

function swichtTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

// Event Listeners
themeSwtich.addEventListener('change', swichtTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeSwtich.checked = true;
        darkMode();
    }

}