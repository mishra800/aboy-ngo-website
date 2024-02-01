(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    
    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    
    
    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });
    
    
    // Causes carousel
    $(".causes-carousel").owlCarousel({
        autoplay: true,
        animateIn: 'slideInDown',
        animateOut: 'slideOutDown',
        items: 1,
        smartSpeed: 450,
        dots: false,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Related post carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);
////gallery///

let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgWrapper = document.getElementById("fullImg");
let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openModal(`images/img${index}.jpg`);
  });
});

close.addEventListener("click", () => (wrapper.style.display = "none"));

function openModal(pic) {
  wrapper.style.display = "flex";
  imgWrapper.src = pic;
}

///calender
document.addEventListener('DOMContentLoaded', function() {
    var teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(function(member) {
        member.addEventListener('click', function() {
            var name = member.getAttribute('data-name');
            var position = member.getAttribute('data-position');
            var socialLinks = member.querySelectorAll('.member-social a');

            var detailsHTML = '<h3>' + name + '</h3>';
            detailsHTML += '<p>' + position + '</p>';
            detailsHTML += '<div class="member-social">';
            socialLinks.forEach(function(link) {
                detailsHTML += link.outerHTML;
            });
            detailsHTML += '</div>';

            document.getElementById('member-details').innerHTML = detailsHTML;
        });
    });
});


///team//
document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('click', function() {
            this.classList.toggle('show-details');
        });
    });
});
r

function sendToWhatsapp() {
    let number = "+919885763872";
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    var url = "https://wa.me/" + number + "?text=" +
      "Name : " + name + "%0a" +
      "Email : " + email + "%0a" +
      "Message : " + message + "%0a%0a";
  
    // Open WhatsApp link in a new tab
    window.open(url, '_blank').focus();
  }

  ////get youtube video section ///
  // Function to show the video modal with the specified video
function showVideoModal(videoID) {
    var videoSrc = "";
    switch(videoID) {
        case "video1":
            videoSrc = "video/video1.mp4";
            break;
        case "video2":
            videoSrc = "video/video2.mp4";
            break;
        case "video3":
            videoSrc = "video/video3.mp4";
            break;
        default:
            videoSrc = "";
    }
    if (videoSrc !== "") {
        var videoContainer = document.getElementById("videoContainer");
        videoContainer.innerHTML = '<video controls autoplay loop><source src="' + videoSrc + '" type="video/mp4">Your browser does not support the video tag.</video>';
        var modal = document.getElementById("videoModal");
        modal.style.display = "block";
    }
}

// Function to close the video modal
function closeVideoModal() {
    var modal = document.getElementById("videoModal");
    modal.style.display = "none";
}
