
function section1() {
var tl = gsap.timeline()

tl.from("nav h1,nav h4, nav button",{
    y:-30,
    opacity:0,
    delay:0.3,
    duration:0.70,
    stagger:0.18
}) 

tl.from("#center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.8
})

tl.from("#center-part1 p",{
    x:-150,
    opacity:0,
    duration:0.5
})

tl.from("#center-part1 button",{
    opacity:0,
    duration:0.4
})

tl.from("#center-part2 img",{
    X:200,
    opacity:0,
    duration:0.8
},"-=0.7") //phele lane ke liye in line dealy

tl.from(".section-bottom img",{
    y:30,
    stagger:0.15,
    opacity:0,
    duration:0.7
})

}

section1()

function section2() {
var tl2 = gsap.timeline({
        scrollTrigger:{
        trigger:".section-second",
        scroller:"body",
        start:"top 50%",
        end:"top -205%",
        scrub:2,
    }
})

tl2.from(".Services ",{
    y: 40,
    opacity:0,
    duration:0.7,
})

tl2.from(".tab.line1.left ",{
    x:-300,
    opacity:0,
    duration:2,
},"anim1") // random name to same time in two function run

tl2.from(".tab.line1.right ",{
    x:300,
    opacity:0,
    duration:2,
},"anim1")

tl2.from(".tab.line2.left ",{
    x:-300,
    opacity:0,
    duration:2,
},"anim2")

tl2.from(".tab.line2.right ",{
    x:300,
    opacity:0,
    duration:2,
},"anim2")

tl2.from(".tab.line3.left ",{
    x:-300,
    opacity:0,
    duration:2,
},"anim3")

tl2.from(".tab.line3.right ",{
    x:300,
    opacity:0,
    duration:2,
},"anim3")

tl2.from('.section-three-part1 ',{
    opacity:0,
},"anim4")

tl2.from('.section-three-part1 .part1-A',{
    y:400,
    opacity:0,
    duration:2
},"anim4")

tl2.from('.section-three-part1 .part1-B',{
    x:400,
    opacity:0,
    duration:1
},"anim4")

tl2.from(".study ",{
    y: 40,
    opacity:0,
    duration:0.7,
},'anim5')

tl2.from('.section-three-part2 #part2-p',{
    x:-200,
    opacity:0,
    duration:1,
    stagger:1
},'anim5')

tl2.from('.end h1',{
    y:200,
    opacity:0,
    duration:1
})

}

section2();



