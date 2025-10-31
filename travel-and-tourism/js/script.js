document.addEventListener('DOMContentLoaded', function () {
    // Menu Toggle
    const menuBar = document.getElementById('menu-bar');
    const navbar = document.querySelector('.navbar');

    menuBar.addEventListener('click', () => {
        menuBar.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    // Login Form Toggle
    const loginBtn = document.getElementById('login-btn');
    const loginForm = document.querySelector('.login-form-container');
    const formClose = document.getElementById('form-close');

    loginBtn.addEventListener('click', () => {
        loginForm.classList.add('active');
    });

    formClose.addEventListener('click', () => {
        loginForm.classList.remove('active');
    });

    // Search Bar Toggle
    const searchBtn = document.getElementById('search-btn');
    const searchBarContainer = document.querySelector('.search-bar-container');

    searchBtn.addEventListener('click', () => {
        searchBarContainer.classList.toggle('active');
    });

    // Video Slider Functionality
    const vidButtons = document.querySelectorAll('.vid-btn');
    const videoSlider = document.getElementById('video-slider');
    const discoverBtn = document.getElementById('discoverBtn');
    let currentVideo = 0;

    // When a video button is clicked
    vidButtons.forEach(button => {
        button.addEventListener('click', () => {
            vidButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            videoSlider.src = button.getAttribute('data-src');
            videoSlider.play();
        });
    });

    // When Discover button is clicked go to next video
    if (discoverBtn) {
        discoverBtn.addEventListener('click', () => {
            currentVideo = (currentVideo + 1) % vidButtons.length;
            const nextSrc = vidButtons[currentVideo].getAttribute('data-src');
            videoSlider.src = nextSrc;
            videoSlider.play();

            // Update active button state
            vidButtons.forEach(btn => btn.classList.remove('active'));
            vidButtons[currentVideo].classList.add('active');
        });
    }

    // Swiper for Review Section
    const reviewSwiper = new Swiper('.review-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });

    // Swiper for Brand Section
    const brandSwiper = new Swiper('.brand-slider', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
        },
    });
});
