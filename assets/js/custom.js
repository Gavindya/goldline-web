﻿/*=============================================================
 Author URI: www.binarytheme.com
 License: Commons Attribution 3.0

 http://creativecommons.org/licenses/by/3.0/

 100% Free To use For Personal And Commercial Use.
 IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US

 ========================================================  */
(function ($) {
    "use strict";
    var mainApp = {
        scrollAnimation_fun: function () {

            /*====================================
             ON SCROLL ANIMATION SCRIPTS 
             ======================================*/


            window.scrollReveal = new ScrollReveal();

        },
        scroll_fun: function () {

            /*====================================
             EASING PLUGIN SCRIPTS
             ======================================*/
            $(function () {
                $('.move-me a').bind('click', function (event) { //just pass move-me in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });

        },


        top_flex_slider_fun: function () {
            /*====================================
             FLEX SLIDER SCRIPTS 
             ======================================*/
            $('#main-section').flexslider({
                animation: "fade", //String: Select your animation type, "fade" or "slide"
                slideshowSpeed: 3000, //Integer: Set the speed of the slideshow cycling, in milliseconds
                animationSpeed: 1000, //Integer: Set the speed of animations, in milliseconds
                startAt: 0 //Integer: The slide that the slider should start on. Array notation (0 = first slide)

            });

        },

        custom_fun: function () {
            /*====================================
             WRITE YOUR   SCRIPTS  BELOW
             ======================================*/

            // $('#main-section').flexslider({
            //     animation: "fade", //String: Select your animation type, "fade" or "slide"
            //     slideshowSpeed: 3000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
            //     animationSpeed: 1000,           //Integer: Set the speed of animations, in milliseconds
            //     backgroundImage: "url("+"assets/img/1.jpeg"+")",
            //     startAt: 0,    //Integer: The slide that the slider should start on. Array notation (0 = first slide)
            //
            // });

            $(window).scroll(function () {
                if ($(document).scrollTop() > 0) {
                    console.log(">>>0");
                    // $(".my_logoSlider").css({
                    //     'height':'0px'
                    // });
                    // $('#main-logo-pic').fadeOut();
                    // $('.tag-line').fadeOut();
                    // console.log("scroll>>>>>50");
                    // $('#header_nav').stop().animate({
                    //     height:'80px'
                    // },600);
                    // $('.home-sec').stop().animate({
                    //     paddingTop:'80px'
                    // },600);

                    // $("#header_nav").css({
                    //     'height':'80px'
                    // });

                    // console.log('80px');

                    // $('nav').addClass('shrink');
                } else {
                    console.log("<<<230");
                    // $(".my_logoSlider").css({
                    //     'height':'160px',
                    // });


                    // console.log("scroll<<<<50");
                    // $('.my_logoSlider').fadeIn();
                    // $('#main-logo-pic').fadeIn();
                    // $('.tag-line').fadeIn();
                    // $('#header_nav').stop().animate({
                    //     height:'160px'
                    // },600);
                    // $('.home-sec').stop().animate({
                    //     paddingTop:'160px'
                    // },600);
                    // $("#header_nav").css({
                    //     'height':'160px',
                    // });
                    // console.log('130px');
                    // $('nav').removeClass('shrink');
                }
                if ($(window).scrollTop() > 210) {
                    console.log(">>>230");
                    $('#navbar-my').addClass('navbar-fixed');

                }
                if ($(window).scrollTop() < 211) {
                    console.log("<<<<230");
                    $('#navbar-my').removeClass('navbar-fixed');
                }

            });
            $("#home_button").click(function () {
                $("#home-content").load("home.html");
            });
            $("#tyres_btn").click(function () {
                $("#home-content").load("tyres.html");
            });
            $("#tours_btn").click(function () {
                $("#home-content").load("tours.html");
            });
            $("#aboutus_btn").click(function () {
                $("#home-content").load("aboutus.html");
            });
            $("#contact_btn").click(function () {
                $("#home-content").load("contactus.html");
            });
            $("#services_btn").click(function () {
                $("#home-content").load("services.html");
            });
            // $("#tyresizecal2").click(function () {
            //     $("#hm").load("tyresizecal.html");
            // });
        }

    };


    $(document).ready(function () {

        mainApp.scrollAnimation_fun();
        mainApp.scroll_fun();
        mainApp.top_flex_slider_fun();
        mainApp.custom_fun();

    });
}(jQuery));