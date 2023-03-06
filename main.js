paceOptions = {
    ajax: true, //checks ajax request
    document: true //document is ready
}


Pace.on('done', () => {
    let t1 = gsap.timeline();
    
    // t1.fromTo("nav",{opacity:0,y:-60},{opacity:1,y:0,duration:2})
    t1.add("p")
    t1.to('.pace', {
        transform: 'scale(10,1)',
        duration: 4
    },"+=.2")
    t1.to('.pace', {
        duration: 1,
        height: "100%"
    },"-=2.8")
    t1.to('.loading__text',{
        delay:.2,
        duration:3,
        opacity:0,
        yPercent:-500,
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"p")
    
    t1.to('#main',{
        // duration:2,
        opacity:1,  
        height:"100%",
        
            
    },"-=1.8")
    
    t1.fromTo(".logo", {
        opacity: 0,
        y: -10
    }, {
        opacity: 1,
        y: 0,
        duration: .1,
        delay: 1,
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"-=6")
    t1.fromTo(".flex-logo li", {
        opacity: 0,
        y: -10
    }, {
        opacity: 1,
        y: 0,
        stagger: {
            amount: .1
        },
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"-=2")
    t1.fromTo(".social-icons i", {
        opacity: 0,
        y: -10
    }, {
        opacity: 1,
        y: 0,
        stagger: {
            amount: .1
        },
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"-=1.6")
    t1.add("image")
    
    t1.fromTo(".location", {
        opacity: 0,
        y: 10
    }, {
        opacity: 1,
        y: 0,
        duration: .1,
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"-=0.9")
    t1.fromTo(".list-items li", {
        opacity: 0,
        y: 10,
        rotation: 1.9,
        transformOrigin: "left 50%"
    }, {
        opacity: 1,
        y: 0,
        rotation: 0,
        stagger: {
            amount: .3
        },
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"-=0.7")
    t1.fromTo(".connect-btn", {
        opacity: 0,
        y: 10
    }, {
        opacity: 1,
        y: 0,
        duration: 2,
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"-=0.7")
    t1.fromTo(".image", {
        opacity: 0,
        filter: "blur(18px)",
        x:10,
        scale: 1
    }, {
        opacity: 1,
        blur: 0,      
        x:0,
        filter: "blur(0px)",
        scale: 0.98,
        duration: 0.29,
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"image")
    
    // ADD START AND END TO AUTO ANIMATE 
    gsap.registerPlugin(ScrollTrigger);
    const t12 = gsap.timeline({
        scrollTrigger:{
            trigger:".about-me",
            start:"top 70%",            
            
        }
    });
    
    t12.fromTo(".about-me",{
        opacity: 0,
        y: 70,    
        
        
    }, {
        opacity: 1,
        y: 0,  
        duration:1.5,
        ease:'BezierEasing(0.19,1,0.22,1)'
    })
    
    var t2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#ph2",
            start:"top center",            
            
        }
    })
    t2.add("desc-1")
    t2.fromTo("#ph2",{
        opacity: 0,
        y: 70,       
        
    }, {
        opacity: 1,
        y: 0,  
        duration:1,
        ease:'BezierEasing(0.19,1,0.22,1)'
    })
    
    t2.fromTo("#img-1",{
        opacity: 0,
        x: -70,       
        
    }, {
        opacity: 1,
        x: 0,  
        duration:1,
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"desc-1")
    t2.fromTo(".first-child",{
        opacity: 0,
        x: 70,       
        
    }, {
        opacity: 1,
        x: 0,  
        duration:1,
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"desc-1")
    
    var t21 = gsap.timeline({
        scrollTrigger:{
            trigger:".second-child",
            start:"top center",            
            
        }
    })
    t21.add("desc-2")    
    t21.fromTo("#img-2",{
        opacity: 0,
        x: 70,       
        
    }, {
        opacity: 1,
        x: 0,  
        duration:1,
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"desc-2")
    t21.fromTo("#second-child",{
        opacity: 0,
        x: -70,       
        
    }, {
        opacity: 1,
        x: 0,  
        duration:1,
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"desc-2")
    
    var t22 = gsap.timeline({
        scrollTrigger:{
            trigger:".third-child",
            start:"top center",            
            
        }
    })
    t22.add("desc-3")    
    t22.fromTo("#img-3",{
        opacity: 0,
        x: -70,       
        
    }, {
        opacity: 1,
        x: 0,  
        duration:1,
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"desc-3")
    t22.fromTo("#third-child",{
        opacity: 0,
        x: 70,       
        
    }, {
        opacity: 1,
        x: 0,  
        duration:1,
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"desc-3")
    
    var qualification = gsap.timeline({
        scrollTrigger:{
            trigger:".qualification",
            start:"top 40%",            
            
        }
    })
    qualification.fromTo('#qh2',{
        opacity:0,
        opacity: 0,
        y: 70,       
        
    }, {
        opacity: 1,
        y: 0,  
        duration:1,
        ease:'BezierEasing(0.19,1,0.22,1)'

    })
    const educationJob = gsap.timeline({
        scrollTrigger:{
            trigger:".card-grid",
            start:"top 50%",            
            
        }
    })
    educationJob.fromTo('.blend',{       
        opacity: 0,
        y: 80,       
        
    }, {
        opacity: 1,
        y: 0,  
        duration:1,
        ease:'BezierEasing(0.19,1,0.22,1)'
    })
    var contact = gsap.timeline({
        scrollTrigger:{
            trigger:".contact",
            start:"top 40%",            
            
        }
    })
    contact.fromTo('#ch2',{
        opacity:0,
        opacity: 0,
        y: 30,       
        
    }, {
        opacity: 1,
        y: 0,  
        duration:1,
        ease:'BezierEasing(0.19,1,0.22,1)'

    })
    const contactdetails = gsap.timeline({
        scrollTrigger:{
            trigger:".contact-card",
            start:"top 40%",            
             
        }
    })
    contactdetails.add("form")
    contactdetails.fromTo('.contact-info',{       
        opacity: 0,
        x: -80,       
        
    }, {
        opacity: 1,
        x: 0,  
        duration:1,
        ease:'BezierEasing(0.19,1,0.22,1)'
    })
    contactdetails.fromTo('.form',{       
        opacity: 0,
        x: 80,       
        
    }, {
        opacity: 1,
        x: 0,  
        duration:1,
        ease:'BezierEasing(0.19,1,0.22,1)'
    },"form")
    

})

const navSlide = () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.flex-logo li');
    document.onclick = function (e) {
        if (e.target.id !== 'hamburger' && e.target.id !== 'nav') {
            nav.classList.remove('info-active');
            hamburger.classList.remove('toggle');

        }
    };

    hamburger.addEventListener('click', () => {
        console.log("clicked");

        nav.classList.toggle('info-active');
        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `infofades 1s ease-in-out forwards ${index / 9 }s`;
            }
        });
        hamburger.classList.toggle('toggle');

    });

}
const app = () => {
    navSlide();
}
app();