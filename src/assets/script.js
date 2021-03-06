$(document).ready(function () {
    // 헤더 스크롤 이벤트
    function Scroll() {
        var lnb = $("._header")
            .offset()
            .top;

        $(window).scroll(function () {
            var window = $(this).scrollTop();
            if (lnb < window) {
                $("._header").css(
                    {"position": "fixed", "background-color": "rgba(37, 37, 37,.8)", "border-bottom": "none"}
                );
            } else {
                $("._header").css(
                    {"position": "absoulte", "background-color": "transparent", "border-bottom": "1px solid #fff"}
                );
            }

        })

    }
    // Email
    function Email() {
        emailjs.init("U4dPLe9cyju41MkJl");

        $('input[name=submit]').click(function () {

            var templateParams = {

                name: $('input[name=name]').val(),
                phone: $('input[name=phone]').val(),
                email: $('input[name=email]').val(),
                message: $('textarea[name=message]').val()
            };

            emailjs
                .send('service_69v2pcn', 'template_hp6y3wm', templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('안녕하세요 고태윤입니다 :) 연락을 주셔서 감사합니다.')
                }, function (error) {
                    console.log('FAILED...', error);
                });

        });
    }
    // 네비게이션 이동
    function Navi() {
        $('._home-btn').click(function () {
            var offset = $('._home-section').offset();
            $('html,body').animate({
                scrollTop: offset.top - 100
            }, 400);
            return false;
        });
        $('._about-btn').click(function () {
            var offset = $('._about-section').offset();
            $('html,body').animate({
                scrollTop: offset.top - 100
            }, 400);
            return false;
        });
        $('._portflio-btn').click(function () {
            var offset = $('._portflio-section').offset();
            $('html,body').animate({
                scrollTop: offset.top - 100
            }, 400);
            return false;
        });
        $('._skill-btn').click(function () {
            var offset = $('._skill-section').offset();
            $('html,body').animate({
                scrollTop: offset.top - 100
            }, 400);
            return false;
        });
        $('._contact-btn').click(function () {
            var offset = $('._contact-section').offset();
            $('html,body').animate({
                scrollTop: offset.top - 100
            }, 400);
            return false;
        });
    }
    // Top 버튼
    function TopBtn() {
        $(window).on('scroll', function () {
            var scrollTop = $(window).scrollTop()
            if (scrollTop > 150) {
                $('._btn-totop').css({'opacity': 1})
            } else {
                $('._btn-totop').css({'opacity': 0})
            }
        })
        $('._btn-totop').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 400);
            return false;
        });

    }
    // 모바일 네비게이션 애니메이션 동작
    function MobileAnimation() {
        $('._menu-bar').click(function () {
            $('.line').removeClass('init');
            $('._line-top')
                .toggleClass('line-top')
                .toggleClass('top-reverse');
            $('._line-mid')
                .toggleClass('line-mid')
                .toggleClass('mid-reverse');
            $('._line-bot')
                .toggleClass('line-bot')
                .toggleClass('bot-reverse');
        })
    }
    // 모바일 네비게이션 실행
    function MobileNavi() {
        $('._menu-bar').click(function () {

            $(this).toggleClass('active')
            $(this)
                .siblings('._navis')
                .toggleClass('active')
        })
    }
    // 네비게이션 바 닫힘
    function NaviClose() {
        $('.wrap header nav ul li a').click(function () {
            $(this)
                .parents('._navis')
                .removeClass('active');
            $(this)
                .parents('._navis')
                .siblings('._menu-bar')
                .find('.line')
                .removeClass('init');
            $(this)
                .parents('._navis')
                .siblings('._menu-bar')
                .find('._line-top')
                .toggleClass('line-top')
                .toggleClass('top-reverse');
            $(this)
                .parents('._navis')
                .siblings('._menu-bar')
                .find('._line-mid')
                .toggleClass('line-mid')
                .toggleClass('mid-reverse');
            $(this)
                .parents('._navis')
                .siblings('._menu-bar')
                .find('._line-bot')
                .toggleClass('line-bot')
                .toggleClass('bot-reverse');

        })
    }
    //massory
    function Massory() {
        $('.grid').masonry(
            {columnWidth: '._grid-item', itemSelector: '._grid-item', gutter: 20, percentPosition: true}
        );
    }

  
    //init
    function init() {
        Scroll();
        Email();
        Navi();
        TopBtn();
        MobileAnimation();
        MobileNavi();
        NaviClose();
        Massory();
    }

    init();

});
