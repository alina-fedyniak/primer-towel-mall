// -------burger------
document.addEventListener("DOMContentLoaded", function() {
    var burgerIcon = document.querySelector(".burger-icon");
    var burgerMenu = document.querySelector(".burger-menu");

    burgerIcon.addEventListener("click", function() {
        burgerIcon.classList.toggle("active"); // Анимация иконки бургера
        burgerMenu.classList.toggle("active"); // Открытие/закрытие меню

        if (burgerMenu.classList.contains("active")) {
            document.body.style.overflow = "hidden"; // Запрет прокрутки страницы при открытом меню
        } else {
            document.body.style.overflow = ""; // Разрешение прокрутки страницы при закрытом меню
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".foot-back");
    var scrollHeight = 740;
    var isFixed = false;

    function handleScroll() {
        var windowWidth = window.innerWidth;

        if (windowWidth >= 740) {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop >= scrollHeight && !isFixed) {
                button.style.top = scrollHeight + "px";
                isFixed = true;
            } else if (scrollTop < scrollHeight && isFixed) {
                button.style.top = "";
                isFixed = false;
            }
        }
    }

    var mediaQuery = window.matchMedia("(max-width: 740px)");

    function handleMediaQueryChange(event) {
        if (event.matches) {

            window.removeEventListener("scroll", handleScroll);
            button.style.top = "";
            isFixed = false;
        } else {

            window.addEventListener("scroll", handleScroll);
        }
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    handleMediaQueryChange(mediaQuery);
});
