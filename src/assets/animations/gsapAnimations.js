import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { element } from 'prop-types';
gsap.registerPlugin(ScrollTrigger);

export const menuClose = (element1, element2, element3, mainElement) => {
    gsap.to([element1, element2, element3], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.1
        },
        
    })
    gsap.to(mainElement, {
    duration: 0.8,
    css: { display: 'none' },
})
};

export const menuOpen = (element1, element2, element3, mainElement) => {
    gsap.to(mainElement, {
        duration: 0,
        css: { display: 'block' },
    });

    gsap.to([element1, element2, element3], {
        duration: 0,
        opacity: 1,
        height: '100%',
    });

    gsap.from([element1, element2, element3], {
        delay: 0.1,
        duration: 0.8,
        height: 0,
        transformOrigin: 'right top',
        skewY: 4,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.1
        }
    });
};

export const revealItem = (items = [...items]) => {
    console.log(items)
    gsap.from([...items], {
        delay: 0.7,
        opacity: 0,
        y: -30,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.8
        }
    })
};

export const revealSection = (items = [...items]) => {

    gsap.from([...items], {
        duration: 1,
        y: '100',
        opacity: 0,
        ease: 'ease-in',
        scrollTrigger: {
            trigger: items,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none none'
        },
        stagger: {
            amount: 0.4
        }
    })
};
export const revealSection2 = (items = [...items]) => {

    gsap.from([...items], {
        duration: 1,
        y: '100',
        opacity: 0,
        ease: 'ease-in',
        stagger: {
            amount: 0.4
        }
    })
};

export const revealSectionImage = (items = [...items]) => {

    gsap.from([...items], {
        delay: 0.2,
        duration: 1,
        y: '100',
        opacity: 0,
        ease: 'power3.inOut',
        scrollTrigger: {
            trigger: items,
            start: 'top 70%',
            end: 'bottom 60%',
            toggleActions: 'play none none none'
        },
        stagger: {
            amount: 0.4
        }
    })
};