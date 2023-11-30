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

// -------burger-Filter-----
document.addEventListener("DOMContentLoaded", function () {
    const burgerIconFilters = document.querySelectorAll(".burger-iconFilter");
    const burgerFilters = document.querySelectorAll(".burger-filter");
    const closeButtons = document.querySelectorAll('.filterClose');

    burgerIconFilters.forEach(function (burgerIconFilter, index) {
        burgerIconFilter.addEventListener("click", function () {
            toggleMenu(index);
        });

        closeButtons[index]?.addEventListener("click", function () {
            toggleMenu(index);
        });
    });

    function toggleMenu(index) {
        burgerIconFilters[index].classList.toggle("active");
        burgerFilters[index].classList.toggle("active");

        const isOpen = burgerFilters[index].classList.contains("active");
        document.body.style.overflow = isOpen ? "hidden" : "";
    }
});


//drop-filter-organizations
document.addEventListener('DOMContentLoaded', function () {
    const beautyHealthAccordions = document.querySelectorAll('.filterDrop');

    beautyHealthAccordions.forEach(function (accordion) {
        accordion.addEventListener('click', function () {
            accordion.classList.toggle('active');
        });

        // Предотвращение всплытия события для чекбоксов в каждом аккордеоне
        const checkboxes = accordion.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('click', function (event) {
                event.stopPropagation();
            });
        });
    });
});

// -------pop_up------
document.addEventListener("DOMContentLoaded", function() {
    const openButtons = Array.from(document.querySelectorAll(".open_pop"));
    const closeButton = document.getElementById("pop_close");
    const popUp = document.querySelector(".pop_up");
    const overlay = document.getElementById("overlay");

    // Добавление класса "active" при нажатии на кнопку "Открыть попап"
    openButtons.forEach(function (openButton) {
        openButton.addEventListener("click", function () {
            popUp.classList.add("active");
            overlay.style.display = "block";
        });
    });

    // Удаление класса "active" при нажатии на кнопку "Закрыть попап"
    closeButton.addEventListener("click", function() {
        popUp.classList.remove("active");
        overlay.style.display = "none";
    });

    // Закрытие вне
    document.addEventListener("click", function (event) {
        if (!popUp.contains(event.target) && openButtons.every((item) =>
            !item.contains(event.target))) {
            popUp.classList.remove("active");
            overlay.style.display = "none";
        }
    });

});

// -------pop_up-filter------
document.addEventListener("DOMContentLoaded", function () {
    const openFilterPopUps = document.querySelectorAll(".open_pop-filter");
    const closeFilterPopUps = document.querySelectorAll(".pop_closed");
    const popUpFilterPopUps = document.querySelectorAll(".pop_up-filter");
    const overlays = document.querySelectorAll(".overlay");

    if (
        openFilterPopUps.length === closeFilterPopUps.length &&
        openFilterPopUps.length === popUpFilterPopUps.length &&
        openFilterPopUps.length === overlays.length
    ) {
        openFilterPopUps.forEach((openFilterPopUp, index) => {
            const closeFilterPopUp = closeFilterPopUps[index];
            const popUpFilterPopUp = popUpFilterPopUps[index];
            const overlay = overlays[index];

            openFilterPopUp.addEventListener("click", function () {
                popUpFilterPopUp.classList.add("active");
                overlay.style.display = "block";
            });

            closeFilterPopUp.addEventListener("click", function () {
                popUpFilterPopUp.classList.remove("active");
                overlay.style.display = "none";
            });

            document.addEventListener("click", function (event) {
                if (
                    !popUpFilterPopUp.contains(event.target) &&
                    !openFilterPopUp.contains(event.target)
                ) {
                    popUpFilterPopUp.classList.remove("active");
                    overlay.style.display = "none";
                }
            });
        });
    }
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

        // Добавляем обработчик события для каждого чекбокса в группе
        const checkboxes = filterMapContent.querySelectorAll('input[name="group"]');
        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('click', function (event) {
                // Отменяем всплытие события, чтобы оно не дотянулось до dropdownBtn
                event.stopPropagation();

                // Открываем следующий блок, если чекбокс выбран
                if (checkbox.checked) {
                    const nextFilterMapContent = dropdownBtn.nextElementSibling.nextElementSibling;
                    if (nextFilterMapContent) {
                        nextFilterMapContent.style.display = 'block';
                    }
                }
            });
        });
    });
});


//isOpen-closed-shop
document.addEventListener('DOMContentLoaded', function () {
    let isOpen = true;

    const statusSpan = document.querySelector('.cards_item-open span');

    if (isOpen) {
        statusSpan?.classList.remove('closed');
    } else {
        statusSpan.classList.add('closed');
    }

});

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
    const toggleRectBtns = document.querySelectorAll('.toggleRectBtn');
    const mapExit = document.querySelectorAll('.map-exit');

    toggleRectBtns.forEach(function(toggleRectBtn) {
        toggleRectBtn.addEventListener('click', function () {
            toggleRectBtn.classList.add('active');

            mapExit.forEach(function(btn) {
                const isHidden = btn.classList.contains('hidden');
                if (isHidden) {
                    btn.classList.remove('hidden');
                } else {
                    btn.classList.add('hidden');
                    toggleRectBtn.classList.remove('active');
                }
            });
        });
    });
});


//map-business-filter
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
    const closeButtons = document.querySelectorAll('.popupRent-close');

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

    closeButtons.forEach((closeButton) => {
        closeButton.addEventListener('click', () => {
            popupRent.style.display = 'none';
        });
    });

});

//map-organizations-filter
document.addEventListener('DOMContentLoaded', function () {
    const radioGroups = document.querySelectorAll('.radioGroup');
    const shopping1 = document.querySelectorAll('.shopping1');
    const shopping2 = document.querySelectorAll('.shopping2');
    const shopping3 = document.querySelectorAll('.shopping3');
    const shopping4 = document.querySelectorAll('.shopping4');
    const shopping5 = document.querySelectorAll('.shopping5');
    const shopping6 = document.querySelectorAll('.shopping6');
    const restaurants1 = document.querySelectorAll('.restaurants1');
    const restaurants2 = document.querySelectorAll('.restaurants2');
    const restaurants3 = document.querySelectorAll('.restaurants3');
    const restaurants4 = document.querySelectorAll('.restaurants4');
    const restaurants5 = document.querySelectorAll('.restaurants5');
    const restaurants6 = document.querySelectorAll('.restaurants6');
    const entertainment1 = document.querySelectorAll('.entertainment1');
    const entertainment2 = document.querySelectorAll('.entertainment2');
    const entertainment3 = document.querySelectorAll('.entertainment3');
    const entertainment4 = document.querySelectorAll('.entertainment4');
    const entertainment5 = document.querySelectorAll('.entertainment5');
    const entertainment6 = document.querySelectorAll('.entertainment6');
    const clearButtons = document.querySelectorAll('clearButton');

    const targets = {'shopping1': shopping1, 'shopping2': shopping2, 'shopping3': shopping3, 'shopping4': shopping4, 'shopping5': shopping5, 'shopping6': shopping6,
        'restaurants1': restaurants1, 'restaurants2': restaurants2, 'restaurants3': restaurants3, 'restaurants4': restaurants4, 'restaurants5': restaurants5, 'restaurants6': restaurants6,
        'entertainment1': entertainment1, 'entertainment2': entertainment2, 'entertainment3': entertainment3, 'entertainment4': entertainment4, 'entertainment5': entertainment5, 'entertainment6': entertainment6,

    };
//переключение чекбоксов
    radioGroups.forEach((item) => {
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
    const clickabled = document.querySelectorAll('.clickable');
    const popupMapOrgs = document.querySelector('.mapOrgs');
    const closeButtons = document.querySelectorAll('.popupRent-close');

    clickabled.forEach((item) => {
        item.addEventListener('click', (event) => {
            clickabled.forEach((item) => {
                if (item !== event.target) {
                    item.classList.remove('mapClick');
                }
            })
            popupMapOrgs?.classList.add('open');
            if (popupMapOrgs) {
                popupMapOrgs.style.display = 'block';
            }
            event.target.classList.add('mapClick');
        })
    });

    closeButtons.forEach((closeButton) => {
        closeButton?.addEventListener('click', () => {
            if (popupMapOrgs) {
                popupMapOrgs.style.display = 'none';
            }
        });
    });

    clearButtons.forEach((clearButton) => {
        clearButton.addEventListener('click', function () {
            radioGroups.forEach((radio) => {
                radio.checked = false;
            });
        });
    });

});

//
// Zoom
$(".zoom_btn").click(function (e) {
    e.preventDefault();
    const _this = $(this);
    const floor = _this.data('zoom');
    const step = 0.5;
    let res;
    const mapFloor = $('.svg-map');
    let mapFloorZoom = mapFloor.data('scale');

    _this.addClass('active').siblings().removeClass('active');

    if (mapFloorZoom === undefined) {
        mapFloor.attr('data-scale', 1);
        mapFloorZoom = 1;
    }

    if (floor === 'out') {
        res = mapFloorZoom - step;
        res = res < 0.5 ? 0.5 : res;
        mapFloor.css('transform', 'scale(' + res + ')');
    } else {
        res = mapFloorZoom + step;
        mapFloor.css('transform', 'scale(' + res + ')');
    }
    mapFloor.data('scale', res);
});


$('.map_box_wrapper').each(function () {
    const _this = $(this), map = _this.find('.svg-map');
    let mapLeft, mapTop;

    _this[0].onmousedown = function (e) {
        const shiftX = e.pageX;
        const shiftY = e.pageY;

        moveAt(e);

         mapLeft = parseInt(map.css('left').replace('px', ''));
         mapTop = parseInt(map.css('top').replace('px', ''));

        function moveAt(y) {
            map[0].style.left = y.pageX - shiftX + mapLeft + 'px';
            map[0].style.top = y.pageY - shiftY + mapTop + 'px';
        }

        _this[0].onmousemove = function moveMap(e) {
            moveAt(e);
        };
        _this[0].onmouseup = function () {
            _this[0].onmousemove = null;
        };
        _this[0].onmouseleave = function () {
            _this[0].onmousemove = null;
        };
    };
// touch events
    const mapTooltip = $('.svg-map');
    const startPoint = {};

    _this[0].addEventListener('touchstart', function (e) {
        startPoint.x = e.changedTouches[0].pageX;
        startPoint.y = e.changedTouches[0].pageY;

        mapLeft = parseInt(map.css('left').replace('px', ''));
        mapTop = parseInt(map.css('top').replace('px', ''));
    }, false);

    _this[0].addEventListener('touchmove', function (e) {
        if (mapTooltip.length) mapTooltip.removeClass('active');
        e.preventDefault();
        e.stopPropagation();
        const otk = {};
        const nowPoint = e.changedTouches[0];
        otk.x = nowPoint.pageX - startPoint.x;
        otk.y = nowPoint.pageY - startPoint.y;
        map[0].style.left = otk.x + mapLeft + 'px';
        map[0].style.top = otk.y + mapTop + 'px';
    }, false);
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
// document.addEventListener('DOMContentLoaded', function () {
//     // Получите все кнопки и блоки
//     const filterMobileBtns = document.querySelectorAll('.filter-mobile-btn');
//     const toggleBlocks = document.querySelectorAll('.mapBusiness-wrap-blk');
//
//     // Добавьте обработчик событий ко всем кнопкам
//     filterMobileBtns.forEach(function (btn, index) {
//         btn.addEventListener('click', function () {
//             // Скройте/покажите соответствующий блок
//             toggleBlocks[index].classList.toggle('mapBusiness-wrap-hidden');
//         });
//     });
// });

//ScrollTrigger
document.addEventListener('DOMContentLoaded', function () {

    gsap.registerPlugin(ScrollTrigger);

    const pageContainer = document.querySelector(".scrollSectionPin");
    /* SMOOTH SCROLL */

    const scroller = new LocomotiveScroll({
        el: pageContainer,
        smooth: true
    });

    scroller.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop(value) {
            return arguments.length
                ? scroller.scrollTo(value, 0, 0)
                : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: pageContainer.style.transform ? "transform" : "fixed"
    });

    ////////////////////////////////////
    window.addEventListener("load", function () {
        let pinBoxes = document.querySelectorAll(".pin-wrap > *");
        let pinWrap = document.querySelector(".pin-wrap");
        let pinWrapWidth = pinWrap.offsetWidth;
        let horizontalScrollLength = pinWrapWidth - window.innerWidth;

        // Pinning and horizontal scrolling

        gsap.to(".pin-wrap", {
            scrollTrigger: {
                scroller: pageContainer, //locomotive-scroll
                scrub: true,
                trigger: "#sectionPin",
                pin: true,
                // anticipatePin: 1,
                start: "top top",
                end: pinWrapWidth
            },
            x: -horizontalScrollLength,
            ease: "none"
        });

        ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

        ScrollTrigger.refresh();
    });

});

//menu-active
$(document).ready(function() {
    var currentPage = window.location.pathname.split('/').pop(); // Получаем текущую страницу из URL

    $('.header-menu a').each(function() {
        var linkPage = $(this).attr('href').split('/').pop(); // Получаем страницу из ссылки
        if (linkPage === currentPage) {
            $(this).addClass('current-menu-item');
        }
    });
});


