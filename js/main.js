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

//dropdown
document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

    dropdownBtns.forEach(function (dropdownBtn) {
        const filterMapContent = dropdownBtn.nextElementSibling;

        dropdownBtn.addEventListener('click', function () {
            dropdownBtn.classList.toggle('open');
            filterMapContent.style.display = (filterMapContent.style.display === 'block') ? 'none' : 'block';
        });

        document.addEventListener('click', function (event) {
            if (!dropdownBtn.contains(event.target)) {
                filterMapContent.style.display = 'none';
                dropdownBtn.classList.remove('open');
            }
        });
        // Добавляем обработчик события для каждого чекбокса в группе
        document.querySelectorAll('input[name="group"]').forEach(function (checkbox) {
            checkbox.addEventListener('click', function (event) {
                // Предотвращаем всплытие события, чтобы оно не дотянулось до document
                event.stopPropagation();
            });
        });
    });
});

//slider-main
document.addEventListener('DOMContentLoaded', function () {
    const content = document.querySelector('.scroll-container');
    const wrapper = document.querySelector('.scroll-wrap');
    const contentScroll = document.querySelectorAll('.content-scroll');

    window.addEventListener('scroll', function() {
        const scrolledY = window.scrollY;
        const scrolledX = window.scrollX;

        contentScroll.forEach((item) => {
            if (scrolledY > 675) {
                item.style.transform = `translateX(${-scrolledY}px)`;
            } else {
                item.style.transform = "none";
            }
            if (scrolledY > 675 && scrolledY < 3800) {
                wrapper.style.position = "fixed";
                wrapper.style.top = "0.01px";
            } else {
                wrapper.style.position = "relative";
            }
            // if (scrolledY > 4000) {
            //     wrapper.style.transform = `translateY(4000px)`;
            // } else {
            //     wrapper.style.transform = `translateY(0)`;
            // }
        })

    });
});


// $(document).ready(function () {
//     console.log(1111)
//     var element = $('#myElement');
//     var elementCenter = element.offset().top + element.height() / 2;
//
//     $(window).scroll(function () {
//         var windowCenter = $(window).scrollTop() + $(window).height() / 2;
//
//         if (windowCenter >= elementCenter) {
//             $('body').css('overflow-y', 'auto'); // Разрешаем вертикальный скролл
//         } else {
//             $('body').css('overflow-y', 'hidden'); // Запрещаем вертикальный скролл
//         }
//     });
//
//     // Обработка горизонтального скролла
//     $(window).on('wheel', function (event) {
//         if ($(window).scrollTop() >= elementCenter) {
//             event.preventDefault();
//             var delta = event.originalEvent.deltaY;
//             $(window).scrollLeft($(window).scrollLeft() + delta);
//         }
//     });
// });

//parallax
document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector('.parallax');
    const layers = document.querySelectorAll('.parallax__layer');

    const handleParallax = (evt) => {
        //размер области просмотра
        const parallaxLeftOffset = wrapper.getBoundingClientRect().left;
        const parallaxTopOffset = wrapper.getBoundingClientRect().top;

        // координаты центра экрана
        const coordX = evt.clientX - parallaxLeftOffset - 0.5 * wrapper.offsetWidth;
        const coordY = evt.clientY - parallaxTopOffset - 0.5 * wrapper.offsetHeight;

        layers.forEach((layer) => {
            const layerSpeed = layer.dataset.speed;
            const x = -(coordX * layerSpeed).toFixed(2);
            const y = -(coordY * layerSpeed).toFixed(2);
            layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
        });
    };

    const reset = () => {
        layers.forEach((layer) => {
            layer.removeAttribute('style');
        });
    }

    wrapper?.addEventListener('mousemove', handleParallax);
    wrapper?.addEventListener('mouseout', reset);

});


//map-floor
document.addEventListener('DOMContentLoaded', function () {
    const mapBtns = document.querySelectorAll('.map-btn');
    const maps = document.querySelectorAll('.svg-map');

    mapBtns.forEach(function (btn, index) {
        btn.addEventListener('click', function () {
            // Удаляем класс active у всех кнопок
            mapBtns.forEach(function (otherBtn) {
                otherBtn.classList.remove('active');
            });

            // Добавляем класс active текущей кнопке
            btn.classList.add('active');

            // Показываем соответствующую карту
            maps.forEach(function (map) {
                map.style.display = 'none';
            });
            maps[index].style.display = 'block';
        });
    });
});

//map-exit
document.addEventListener('DOMContentLoaded', function () {
    const toggleRectBtns = document.querySelector('.toggleRectBtn');
    const mapExit = document.querySelectorAll('.map-exit');

    toggleRectBtns.addEventListener('click', function () {
        toggleRectBtns.classList.add('active');

        mapExit.forEach(function(btn) {
            const isHidden = btn.classList.contains('hidden');
            if (isHidden) {
                btn.classList.remove('hidden');
            } else {
                btn.classList.add('hidden');
                toggleRectBtns.classList.remove('active');
            }
        });
    });
});

//
document.addEventListener('DOMContentLoaded', function () {
    const radioGroup = document.querySelectorAll('.radio-group');
    const rent = document.querySelectorAll('.rent');
    const buy = document.querySelectorAll('.buy');
    const rentBuy = document.querySelectorAll('.rentBuy');
    const targets = {'rent': rent, 'buy': buy, 'rentBuy': rentBuy };
//переключение чекбоксов
    radioGroup.forEach((item) => {
        item.addEventListener('change',(event) => {
            const remove = Object.entries(targets).filter(([key]) => key !== event.target.value);
            remove.forEach(([key, value]) => {
                value.forEach((item) => {
                    item.style.fill = '#C5C5C5';
                    item.style.stroke = 'none';
                })
            })
            targets[event.target.value].forEach((item) => {
                item.style.fill = '#DFBE97';
                item.style.stroke = '#000000';
                item.style.strokeWidth = '1';

            })
        })
    });

//выбираем елемент для просмотра инфы и попап при клике
    const clickable = document.querySelectorAll('.clickable');
    const popupRent = document.querySelector('.popupRent');
    const closeButton = document.querySelector('.popupRent-close');

    clickable.forEach((item) => {
        item.addEventListener('click', (event) => {
            clickable.forEach((item) => {
                if (item !== event.target) {
                    item.style.fill = '#C5C5C5';
                    item.style.stroke = 'none';
                }
            })
            popupRent.classList.add('open');
            popupRent.style.display = 'block';
            event.target.style.fill = 'black';
        })
    });

    closeButton.addEventListener('click', () => {
        popupRent.style.display = 'none';
    });

});
