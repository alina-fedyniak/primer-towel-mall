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
            if (scrolledY > 675 && scrolledY <= 3800) {
                wrapper.style.position = "fixed";
                wrapper.style.top = "0.01px";
            } else {
                wrapper.style.position = "relative";
                // wrapper.style.transform = `translateX(${3400}px)`;
            }
            if (scrolledY >= 3800) {
                wrapper.style.transform = `translateY(3400px)`;
            } else {
                wrapper.style.transform = `translateY(0)`;
            }
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
    const parallaxLayers = document.querySelectorAll('.parallax__layer');

    function handleParallax() {
        parallaxLayers.forEach((layer) => {
            const speed = parseFloat(layer.dataset.speed);
            const rect = layer.getBoundingClientRect();
            const yPos = (rect.top - window.innerHeight) * speed;
            layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        });
    }

    window.addEventListener('scroll', handleParallax);
    window.addEventListener('resize', handleParallax);
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

    toggleRectBtns?.addEventListener('click', function () {
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
                    item.classList.remove('mapSelect');
                })
            })
            targets[event.target.value].forEach((item) => {
                item.classList.add('mapSelect');
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
                    item.classList.remove('mapClick');
                }
            })
            popupRent.classList.add('open');
            popupRent.style.display = 'block';
            event.target.classList.add('mapClick');
        })
    });

    closeButton?.addEventListener('click', () => {
        popupRent.style.display = 'none';
    });

});

//tab-shops
document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.shop-tab');
    const tabsContent = document.querySelectorAll('.shops-wraps');

    tabs.forEach((item) => {
        item.addEventListener('click', (event) => {
            tabsContent.forEach((content) => {
                if (content.dataset.tab === event.target.dataset.tab) {
                    content.classList.add('tabSelect');
                }else {
                    content.classList.remove('tabSelect');
                }
            })
        })
    })
});

//text-transform
document.addEventListener('DOMContentLoaded', function () {
    const textTransform = document.querySelectorAll('.bigText-wrap div');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = `translateY(0)`;
                observer.unobserve(entry.target);
            }
        });
    }

    // Создаем экземпляр IntersectionObserver и передаем ему функцию обратного вызова
    const observer = new IntersectionObserver(handleIntersection);

    textTransform.forEach((item) => {
        observer.observe(item);
    })

});

//open filter
document.addEventListener('DOMContentLoaded', function () {
    // Получите все кнопки и блоки
    const filterMobileBtns = document.querySelectorAll('.filter-mobile-btn');
    const toggleBlocks = document.querySelectorAll('.mapBusiness-wrap-blk');

    // Добавьте обработчик событий ко всем кнопкам
    filterMobileBtns.forEach(function (btn, index) {
        btn.addEventListener('click', function () {
            // Скройте/покажите соответствующий блок
            toggleBlocks[index].classList.toggle('mapBusiness-wrap-hidden');
        });
    });
});

