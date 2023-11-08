// -------burger------
document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.querySelector(".burger-icon");
    const burgerMenu = document.querySelector(".burger-menu");

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

// -------pop_up------
document.addEventListener("DOMContentLoaded", function() {
    const openButtons = Array.from(document.querySelectorAll(".open_pop"));
    const closeButton = document.getElementById("pop_close");
    const popUp = document.querySelector(".pop_up");

    // Добавление класса "active" при нажатии на кнопку "Открыть попап"
    openButtons.forEach(function (openButton) {
        openButton.addEventListener("click", function () {
            popUp.classList.add("active");
        });
    });

    // Удаление класса "active" при нажатии на кнопку "Закрыть попап"
    closeButton.addEventListener("click", function() {
        popUp.classList.remove("active");
    });

    // Закрытие вне
    document.addEventListener("click", function (event) {
        if (!popUp.contains(event.target) && openButtons.every((item) =>
            !item.contains(event.target))) {
            popUp.classList.remove("active");
        }
    });

});

// -------btn-to-top------
$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        const scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

$(function() {
    $("#go-top").scrollToTop();
});

// -------btn-to-top-2------
$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        const scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

//----accordion---
$(function() {
    $("#go-top2").scrollToTop();
});

const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
        item.classList.toggle("open");
        content.style.display = item.classList.contains("open") ? "block" : "none";
    });
});

const swiper1 = new Swiper(".mySwiper", {
    mousewheel: "true",
    loop: "true",
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
    setWrapperSize: true, // Установите параметр setWrapperSize в true
    zoom: true, // Включите масштабирование
});
Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs : {
        type: "classic"
    }
});
