'use strict';


/**
 * navbar toggle in mobile
 */

const /** {NodeElement} */ $navbar = document.querySelector("[data-navbar]");
const /** {NodeElement} */ $navToggle = document.querySelector("[data-nav-toggler]");

$navToggle.addEventListener("click", () => $navbar.classList.toggle("active"));



/**
 * Header scroll state
 */

const /** {NodeElement} */ $header = document.querySelector("[data-header]")

window.addEventListener("scroll", e => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});



/**
 * Add to favorite button toggle
 */

const /** {Nodelist} */ $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtns => {
    $toggleBtns.addEventListener("click", () => {
        $toggleBtns.classList.toggle("active");
    });
});