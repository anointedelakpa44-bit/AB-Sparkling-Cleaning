```javascript
/* MOBILE MENU */

const menuButton =
    document.querySelector(".menu-btn");

const navigation =
    document.querySelector(".nav-links");


if (menuButton) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("show");

    });

}



/* CLOSE MENU AFTER CLICKING */

const links =
    document.querySelectorAll(".nav-links a");


links.forEach(function(link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("show");

    });

});



/* CURRENT YEAR */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}
```