// header intro
VANTA.BIRDS({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 100.00,
    minWidth: 100.00,
    scale: 1.00,
    scaleMobile: 1.00,
    wingSpan: 14.00,
    speedLimit: 1.00,
    separation: 44.00,
    alignment: 25.00,
    cohesion: 38.00,
    backgroundColor: 0xa152f,
    backgroundAlpha: 1,
    birdSize: 0.80,
    quantity: 4.00
});
//   navbar

$(window).scroll(
    {
        previousTop: 0
    },
    function () {
        var currentTop = $(window).scrollTop();
        var width = $(window).width()- (($(window).width() *70)/100);
        console.log(width);
        if (currentTop > width) {
            if (currentTop > this.previousTop) {
                $(".sidebar em").text("Down"); /* optional for demo */
                $(".navbar").css("opacity", "1");
            } 
            this.previousTop = currentTop;
        }
        else {
            $(".sidebar em").text("Up");
            $(".navbar").css("opacity", "0");
            this.previousTop = currentTop;
        }
    });

const animItems = document.querySelectorAll('.anim-items');
if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active')
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('active')
                }
            }

        }
    }
}



function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

setTimeout(() => {
    animOnScroll();
}, 300)     

// VANTA.HALO({
//     el: "#about_img",
//     mouseControls: false,
//     touchControls: false,
//     gyroControls: false,
//     minHeight: 10.00,
//     minWidth: 10.00,
//     baseColor: 0x0,
//     backgroundColor: 0xa152f,
//     amplitudeFactor: 2.00
//   });

var typed = new Typed('.type_text', {
    strings: [' Абдимелик Рустам','frontend разработчик'],
    startDelay:40,
    typeSpeed:80,
    backSpeed:80,
    loop:true
  });

  jQuery(document).ready(function() {
    jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
    return false;
    });
    });