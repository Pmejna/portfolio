import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { element } from 'prop-types';
gsap.registerPlugin(ScrollTrigger);

export const menuClose = (element1, element2, mainElement) => {
    gsap.to([element1, element2], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.07
        },
        
    })
    gsap.to(mainElement, {
    duration: 1,
    css: { display: 'none' },
})
};

export const menuOpen = (element1, element2, mainElement) => {
    gsap.to(mainElement, {
        duration: 0,
        css: { display: 'block' },
    });

    gsap.to([element1, element2], {
        duration: 0,
        opacity: 1,
        height: '100%',
    });

    gsap.from([element1, element2], {
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
    console.log(items);
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
export const revealSection2 = (element) => {
    console.log(element);
    gsap.from(element, {
        duration: 2,
        y: '80',
        opacity: 0,
        ease: 'ease-in',
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 60%',
            toggleActions: 'play none none none'
        }
    })
};