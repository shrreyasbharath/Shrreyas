// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    Navbar.classList.toggle('active');

}

// scroll section 
let sections = document.querySelectorAll('section');
let NavLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar links
                 NavLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active section for animation on scroll
            sec.classList.add('show-animate');
        }
        // if you want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');

        }
    });
    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links(scroll)

    menuIcon.classList.remove('bx-x');
    Navbar.classList.remove('active');


}