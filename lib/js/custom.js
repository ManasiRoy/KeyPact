jQuery(document).ready(function () {
    resizeContent();

    const btnClose = document.querySelector('.btn-close');
    const menuMain = document.querySelector('.mainmenu');
    const navToggle = document.querySelector('.navbar-toggler');
    const bg = document.querySelector('.main')

    const btn = document.querySelectorAll('.btn')

    for (let i of btn) {
        i.addEventListener('click', (event) => {
            event.preventDefault();
        })
    }

    btnClose.addEventListener('click', () => {
        menuMain.style.transform = 'translateX(100%)'
    })
    bg.addEventListener('click', () => {
        menuMain.style.transform = 'translateX(100%)'
    })
    navToggle.addEventListener('click', () => {
        menuMain.style.transform = 'translateX(0%)'
    })


    const hide = document.getElementById('pages')
    hide.style.display = 'none'

    $("#menu li a").on('click', function (e) {
        e.preventDefault();
        $('#menu li').removeClass("active");
        $(this).parent().addClass("active");

        menuMain.style.transform = 'translateX(100%)'

        e.preventDefault();
        const homepage = document.getElementById('home');
        const innerC = document.querySelector('.inner-container')
        const buttonClose = document.querySelectorAll('.innerclosebtn')

        for (let btns of buttonClose) {
            btns.addEventListener('click', () => {
                homepage.style.display = 'flex';
                innerC.style.display = 'none';
                hide.style.display = 'none'
            })
        }


        homepage.style.display = 'none';
        hide.style.display = 'flex'

        var page = $(this).data('page');
        $("#pages .page:not('.hide')").stop().fadeOut('fast', function () {
            $(this).addClass('hide');
            $('#pages .page[data-page="' + page + '"]').fadeIn('slow').removeClass('hide');
        });


    });


    $('.dropdown-menu li').on('click', function () {
        var getValue = $(this).html();
        $('.dropdown-select').html(getValue);
    });

    $('.showlogin').on('click', function () {
        $('#login').show();
        $('#signup').hide();

    })
    $('.signupshow').on('click', function () {
        $('#login').hide();
        $('#signup').show();
    })

    $("input:checkbox").on('click', function () {
        var $box = $(this);
        if ($box.is(":checked")) {
            var group = "input:checkbox[name='" + $box.attr("name") + "']";
            $(group).prop("checked", false);
            $box.prop("checked", true);
        } else {
            $box.prop("checked", false);
        }
    });


})
$(window).on('resize', function () {
    resizeContent();
});

$(window).scroll(function () {
    var sticky = $('.hdr-main'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});
function resizeContent() {
    var windowheight = $(document).height();
    $('.background-bg').css('height', windowheight + 200)
}


const bodyHeight = document.querySelector('.background-bg')
const navigationLink = document.querySelectorAll('.nav-link')
const iHeight = document.querySelector('.twitter-outr')
const bClose = document.querySelectorAll('.innerclosebtn')

for (let nlink of navigationLink) {
    nlink.addEventListener('click', () => {
        bodyHeight.style.height = window.innerHeight;
    })
}

for (let btncls of bClose) {
    btncls.addEventListener('click', () => {
        bodyHeight.style.height = window.innerHeight + 200;
    })
}



