import gsap from 'gsap';

export const menuClose = (element1, element2, mainElement) => {
    gsap.to([element1, element2], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
            amount: 0.07
        }
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