$(document).ready(function () {
    $('select').styler();
    $(".phone").mask('+7 (999)-999-99-99');

})


let bannerSwiper = new Swiper(".banner-slider", {

    slidesPerView: 1,
    speed: 1000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".banner-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".banner-button-next",
        prevEl: ".banner-button-prev",
    },
});





let eventsSwiper = new Swiper(".events-slider", {
    slidesPerView: 5,
    spaceBetween: 10,
    breakpoints: {
        '1600': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
        '1300': {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '600': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".events-button-next",
        prevEl: ".events-button-prev",
    },
});


let gamesSwiper = new Swiper(".events-games-slider", {
    slidesPerView: 6,
    spaceBetween: 10,
    breakpoints: {
        '1600': {
            slidesPerView: 6,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
        '1300': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 10,
        },
        '1199': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '991': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },
        '576': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },

        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".games-button-next",
        prevEl: ".games-button-prev",
    },
});



$('.open_modal').on('click', function () {
    let attr = $(this).attr('data-val');
    let modal = $('#' + attr);
    modal.removeClass('out');
    $('body').css({overflow: 'hidden'});
    modal.fadeIn();
});

$('.close').on('click', function () {
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
    $('body').css({overflow: 'visible '})

})
$('.close-log').on('click', function () {
    let prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
    $('body').css({overflow: 'visible '})

})

$(window).on('click', function (event) {
    $('.modal').each(function () {
        let gtattr = $(this).attr('id');
        let new_mod = $('#' + gtattr);
        let md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()
            }, 100)
            $('body').css({overflow: 'visible '})
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out')
                $(new_mod).fadeOut()
            }, 100)
            $('body').css({overflow: 'visible '})
        }
    })
});









$(document).ready(function () {
    addActiveClass('personal-area-menu', 'active-href');
    changeCaseBlock(this, 'personal-area-menu', 'personal-area-main', 'active-href', 'click-person');
    $('.click-person').on('click', function () {
        changeActiveClassWithClick(this, 'personal-area-menu', 'active-href')
        changeCaseBlock(this, 'personal-area-menu', 'personal-area-main', 'active-href', 'click-person');
    })
    function addActiveClass(parent_menu, active_class) {
        let prt = $('.' + parent_menu);
        let prt_childrens = $(prt).children();
        let prt_child_li = $(prt_childrens).children();
        let first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }
    function changeActiveClassWithClick($this, parent_block, active_class) {
        let prt = $($this).parents('.' + parent_block);
        let prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        let case_menu_block = $('.' + case_menu);
        let case_block_sub = $('.' + case_block);
        let case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })
        if ($($this).hasClass(menu_link)) {
            let this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })
        } else {
            let active_find = $(case_menu_block).find('.' + active_class);
            let active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).css({display: 'block', height: '100%'});
                }
            })
        }
    }

});




$('.login-click').on('click', function (){
    $('.login-click').removeClass('login-active');
    $(this).addClass('login-active');
})



$('.btn-edit-name').on('click', function (){
    let editName = $('.give-name').val()
    $('.edit-name').html(editName);
})

$('.btn-edit-phone').on('click', function (){
    let editPhone = $('.give-phone').val()
    $('.edit-phone').html(editPhone);
})
$('.btn-edit-email').on('click', function (){
    let editEmail = $('.give-email').val()
    $('.edit-email').html(editEmail);
})
$('.btn-edit-password').on('click', function (){
    let editPassword = $('.give-password').val()
    $('.edit-password').html(editPassword);
})