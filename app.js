function homePageAnimation() {
    gsap.set(".slidesm", { scale: 5 })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            // markers:true,
            start: "top top",
            end: "bottom bottom",

            scrub: 1,


        },
    })


    tl.to(".vdodiv", {
        ease: Power2,
        "--clip": "0%",
    }, 'a')
    tl.to(".slidesm", {
        ease: Power2,
        scale: 1,

    }, 'a')

    tl.to(".lgt", {
        ease: Power4,
        xPercent: 10,
        stagger: 0.03
    }, 'b')

    tl.to(".rgt", {
        ease: Power4,
        stagger: 0.03,
        xPercent: -10
    }, 'b')
}


function realPageAnimaton() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            // markers:true,
            scrub: 1,
        },
        xPercent: -200,
        ease: Power4

    })
}

function teamAnimation() {

    document.querySelectorAll(".listelem").forEach((el) => {
        el.addEventListener("mousemove", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 1,
                ease: Power2,
                duration: 0.1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX)
            })
        })

        el.addEventListener("mouseleave", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 0,
                ease: Power2,
                duration: 0.3,
            })
        }
        )

    })

}


function paragraphAnimation() {
    let cluter = "";

    document.querySelector(".paratext").textContent.split("").forEach((e) => {
        console.log(e);
        if (e == " ") cluter += `<span>&nbsp</span>`;
        cluter += `<span>${e}</span>`
    })


    document.querySelector(".paratext").innerHTML = cluter;

    gsap.set(".paratext span", { opacity: .1 })

    gsap.to(".paratext span", {

        scrollTrigger: {
            trigger: ".para",
            start: "top 60%",
            end: "bottom 90%",
            // markers:true,
            scrub: 1,
        },

        stagger: 0.03,
        opacity: 1,
        ease: Power4,

    })

}

function capsuleAnimate(){
    gsap.to(".capsult:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            // markers:true,
            start:"top 70%",
            end:"bottom bottom",
            scrub:1,
        },
        y:0
    })
}


function bodyColorChange(){
    document.querySelectorAll(".section").forEach(function(e){
        ScrollTrigger.create({
            trigger:e,
            start:"top 50%",
            end:"bottom 50%",
            // markers:true,
            onEnter:function(){
                document.body.setAttribute("theme",e.dataset.color)
            },
            onEnterBack:function(){
                document.body.setAttribute("theme",e.dataset.color)
    
            }
        })
    })
}


function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}



bodyColorChange();
paragraphAnimation();
teamAnimation();
realPageAnimaton()
homePageAnimation();
capsuleAnimate();
loco();