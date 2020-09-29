function isOnScreen(elem) {
    if (elem.length === 0) {
        return;
    }
    var $window = jQuery(window)
    var viewport_top = $window.scrollTop()
    var viewport_height = $window.height()
    var viewport_bottom = viewport_top + viewport_height
    var $elem = jQuery(elem)

    var top = 0

    top = $elem.offset().top + 100
    var height = $elem.height()
    var bottom = top + height + 200

    return (top >= viewport_top && top < viewport_bottom) ||
        (bottom > viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}

jQuery(document).ready(function () {
    // jQuery(document).ready(function () {
    //     if (isOnScreen(jQuery('#div1'))) {
    //         $('#contend1').css({opacity: 1, top: 0, transition: 0})
    //     } else {
    //         $('#contend1').css({opacity: 0, top: 200})
    //     }
    //     if (isOnScreen(jQuery('#div2'))) {
    //         $('#contend2').css({opacity: 1, top: 0, transition: 0})
    //     } else {
    //         $('#contend2').css({opacity: 0, top: 200})
    //     }
    //     if (isOnScreen(jQuery('#div3'))) {
    //         $('#contend3').css({opacity: 1, top: 0, transition: 0})
    //     } else {
    //         $('#contend3').css({opacity: 0, top: 200})
    //     }
    //     if (isOnScreen(jQuery('#div4'))) {
    //         $('#contend4').css({opacity: 1, top: 0, transition: 0})
    //     } else {
    //         $('#contend4').css({opacity: 0, top: 200})
    //     }
    //     if (isOnScreen(jQuery('#div5'))) {
    //         $('#contend5').css({opacity: 1, top: 0, transition: 0})
    //     } else {
    //         $('#contend5').css({opacity: 0, top: 200})
    //     }
    //
    //     //footer
    //     if (isOnScreen(jQuery('#footer'))) {
    //         $('#footer > div:first-child').css({
    //             opacity: 1,
    //             top: 0,
    //             transition: "top 1s, opacity 2s",
    //             transitionDelay: 0
    //         })
    //         $('#footer > div:nth-child(2)').css({
    //             opacity: 1,
    //             top: 0,
    //             transition: "top 1s, opacity 2s",
    //             transitionDelay: "0.5s"
    //         })
    //         $('#footer > div:nth-child(3)').css({
    //             opacity: 1,
    //             top: 0,
    //             transition: "top 1s, opacity 2s",
    //             transitionDelay: "1s"
    //         })
    //     } else {
    //         $('#footer > div:first-child').css({opacity: 0, top: 200, transition: 0, transitionDelay: 0})
    //         $('#footer > div:nth-child(2)').css({opacity: 0, top: 200, transition: 0, transitionDelay: 0})
    //         $('#footer > div:nth-child(3)').css({opacity: 0, top: 200, transition: 0, transitionDelay: 0})
    //     }
    // })

    $(window).on('scroll', function () {
        if (isOnScreen(jQuery('#Idee'))) {
            $('#Idee').css({opacity: 1, top: 0, transition: "top 1s, opacity 2s"})
        } else {
            $('#Idee').css({opacity: 0, top: 200})
        }
        if (isOnScreen(jQuery('#Ziele'))) {
            $('#Ziele').css({opacity: 1, top: 0, transition: "top 1s, opacity 2s"})
        } else {
            $('#Ziele').css({opacity: 0, top: 200})
        }
        if (isOnScreen(jQuery('#Team'))) {
            $('#Team').css({opacity: 1, top: 0, transition: "top 1s, opacity 2s"})
        } else {
            $('#Team').css({opacity: 0, top: 200})
        }
        if (isOnScreen(jQuery('#Ueber_uns'))) {
            $('#Ueber_uns').css({opacity: 1, top: 0, transition: "top 1s, opacity 2s"})
        } else {
            $('#Ueber_uns').css({opacity: 0, top: 200})
        }
        if (isOnScreen(jQuery('#Fortschritt'))) {
            $('#Fortschritt').css({opacity: 1, top: 0, transition: "top 1s, opacity 2s"})
        } else {
            $('#Fortschritt').css({opacity: 0, top: 200})
        }

        //footer
        if (isOnScreen(jQuery('#footer'))) {
            $('#footer > div:first-child').css({
                opacity: 1,
                top: 0,
                transition: "top 1s, opacity 2s",
                transitionDelay: "0s"
            })
            $('#footer > div:nth-child(2)').css({
                opacity: 1,
                top: 0,
                transition: "top 1s, opacity 2s",
                transitionDelay: "0.5s"
            })
            $('#footer > div:nth-child(3)').css({
                opacity: 1,
                top: 0,
                transition: "top 1s, opacity 2s",
                transitionDelay: "1s"
            })
        } else {
            $('#footer > div:first-child').css({
                opacity: 0,
                top: 200,
                transition: "top 1s, opacity 2s",
                transitionDelay: "1s"
            })
            $('#footer > div:nth-child(2)').css({
                opacity: 0,
                top: 200,
                transition: "top 1s, opacity 2s",
                transitionDelay: "1s"
            })
            $('#footer > div:nth-child(3)').css({
                opacity: 0,
                top: 200,
                transition: "top 1s, opacity 2s",
                transitionDelay: "1s"
            })
        }
    });

    $('#responsive_menu').on('click', function () {
        if ($('nav > ul').css('opacity') === '1') {
            $('nav > ul').css({'visibility': '', 'opacity': ''})
            $('#responsive_menu > p:nth-child(2)').delay(200).css({
                'opacity': '1',
                // 'transition': '0.1s'
            })
            $('#responsive_menu > p:nth-child(1)').css({
                'transform': 'none',
                // 'transition': '0.3s'
            })
            $('#responsive_menu > p:nth-child(3)').css({
                'transform': 'none',
                // 'transition': '0.3s'
            })
        } else if ($('nav > ul').css('opacity') === '0') {
            console.log("HALLO")
            $('nav > ul').css({
                'visibility': 'visible',
                'opacity': '1',
                'transition': 'opacity 0.3s'
            })
            $('#responsive_menu > p:nth-child(2)').css({
                'opacity': '0',
                // 'transition': '0.1s'
            })
            $('#responsive_menu > p:nth-child(1)').css({
                'transform': 'translateX(6px) rotate(45deg)',
                // 'transition': '0.3s'
            })
            $('#responsive_menu > p:nth-child(3)').css({
                'transform': 'translateX(6px) rotate(-45deg)',
                // 'transition': '0.3s'
            })
        }
    })

    jQuery(document.body).on("click", ":not(nav, #responsive_menu, #responsive_menu *)", function (e) {
        $('nav > ul').css({'visibility': '', 'opacity': ''})
        $('#responsive_menu > p:nth-child(2)').delay(200).css({
            'opacity': '1',
            // 'transition': '0.1s'
        })
        $('#responsive_menu > p:nth-child(1)').css({
            'transform': 'none',
            // 'transition': '0.3s'
        })
        $('#responsive_menu > p:nth-child(3)').css({
            'transform': 'none',
            // 'transition': '0.3s'
        })
        // console.log(this);
    });

    $('#Theme').on("click", function () {
        console.log("Hallo")
        if ($("body").css("background-color") === "rgb(255, 255, 255)") {
            $("body").css({"background-color": "#000000"})
            $('nav').css({"background-color": "#ffb380"})
            $('#footer_menu').css({"background-color": "#ffb380"})
            $('#footer_menu > ul').css({"background-color": "#ffb380"})
            $('.line').css({"background-color": "#000000"})
            $("nav > ul > li > a").hover(function () {
                    $(this).css({
                        "background-color": "#ff8533",
                        "color": "#000000"
                    })
                }, function () {
                    $(this).css({
                        "background-color": "#ffb380",
                        "color": "#333"
                    })
                }
            )
            $("#footer_menu > ul > li > a").hover(function () {
                    $(this).css({
                        "background-color": "#ff8533",
                        "color": "#000000",
                        "font-weight": "700"
                    })
                }, function () {
                    $(this).css({
                        "background-color": "#ffb380",
                        "color": "#333",
                        "font-weight": "normal"
                    })
                }
            );
            $("nav > ul > li > a").css({
                "background-color": "#ffb380",
                "color": "#333"
            })
            $("#footer_menu > ul > li > a").css({
                "background-color": "#ffb380",
                "color": "#333",
                "font-weight": "normal"
            })
            $('nav > a > h1').css({"color": "#000000"})
            $('p').css({"color": "#FFFFFF"})
            $('#Ueber_uns > p, #Fortschritt > p').css({"color": "#ff8533"})
        } else {
            $("body").css({"background-color": "#FFFFFF"})
            $('nav').css({"background-color": "#000000"})
            $('#footer_menu').css({"background-color": "#333333"})
            $('#footer_menu > ul').css({"background-color": "#333333"})
            $('.line').css({"background-color": "#ff8533"})
            $('ul > li > a:hover').css({
                "background-color": "#333",
                "color": "#ffb380"
            })
            $("nav > ul > li > a").hover(function () {
                    $(this).css({
                        "background-color": "#333",
                        "color": "#ff8533",
                        "box-shadow": "inset 0 -6px 0 0 #102988"
                    })
                }, function () {
                    $(this).css({
                        "background-color": "#000000",
                        "color": "#ffb380",
                        "box-shadow": "none"
                    })
                }
            );
            $("#footer_menu > ul > li > a").hover(function () {
                    $(this).css({
                        "background-color": "#000000",
                        "color": "#ff8533",
                        "font-weight": "normal"
                    })
                }, function () {
                    $(this).css({
                        "background-color": "#333333",
                        "color": "#ffb380",
                        "font-weight": "normal"
                    })
                }
            );
            $("ul > li > a").css({
                "background-color": "#000000",
                "color": "#ffb380"
            })
            $("#footer_menu > ul > li > a").css({
                "background-color": "#333333",
                "color": "#ffb380",
                "font-weight": "normal"
            })
            $('nav > a > h1').css({"color": "#ff8533"})
            $('p').css({"color": "#000000"})
            $('footer > section > p').css({"color": "#ffb380"})
            $('#Ueber_uns > p, #Fortschritt > p').css({"color": "#ff8533"})
        }
    })
})