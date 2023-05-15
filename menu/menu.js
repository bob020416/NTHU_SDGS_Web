const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    var body = document.body;
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');
        body.classList.toggle('body-active');
        //Animate Links
        navLinks.forEach((link, index)=>{
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

const navScroll = () => {
    const nav_scroll = document.querySelector("nav");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY) {
            nav_scroll.classList.add("nav--hidden");
        } else	{
            nav_scroll.classList.remove("nav--hidden");
        }
        lastScrollY = window.scrollY;
    });
}

navScroll();