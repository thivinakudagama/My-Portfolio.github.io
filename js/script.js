// ----------------------toggle icon nav bar----------------------------
let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");


menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// --------------------Scroll section active link-----------------------
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offest=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offest && top<offest+height){
            navLinks.forEach(links=>{
                links.classList.remove("active");
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
        }
    });

    // -------------------------sticky navbar--------------------------
    let header=document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //-------remove toggle icon and navbar when click navbar link (scroll)------
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
// -------------------------Scroll Reveal--------------------------
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:250
 });

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

// -------------------------typed js--------------------------
const typed=new Typed('.multiple-text',{
    strings:['UI/UX Designer','Web Developer', 'SE Undergraduate' ],
    typeSpeed:60,
    backSpeed:50,
    backDelay:1000,
    loop:true
});

//------------------------------------cursor--------------------------
const cursor = document.querySelector('.cursor');
var timeout;

window.onload=()=>{
    cursor.style.display="none";
}

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px; display:block;")
    function mouseStopped(){
        cursor.style.display="none";
    }
    clearTimeout(timeout);
    timeout=setTimeout(mouseStopped,1000);
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
});

document.addEventListener('contextmenu', event => event.preventDefault());



//------------------------ switch theme----------------------------------
var icon=document.getElementById('sw-icon');

icon.onclick=()=>{
    if(icon.classList.contains('bxs-sun')){
        icon.classList.remove('bxs-sun');
        icon.classList.add('bxs-moon');
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    }else{
        icon.classList.add('bxs-sun');
        icon.classList.remove('bxs-moon');
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    }
}

window.onload=()=>{
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
}

