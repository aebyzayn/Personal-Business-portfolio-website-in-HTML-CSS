let navlinks = document.querySelector('.nav-links');
let openMenu = document.querySelector('.openMenu');
let closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click',()=>{
    navlinks.classList.add('nav-links-show');
    openMenu.style.display='none';
    closeMenu.style.display='inline-block'
});

closeMenu.addEventListener('click', ()=>{
    navlinks.classList.remove('nav-links-show');
    openMenu.style.display='inline-block';
    closeMenu.style.display='none'
});


// Auto Scroll Remove navLinks.............
if(innerWidth < 1024 ){
    window.addEventListener('scroll',()=>{
        navlinks.classList.remove('nav-links-show');
        openMenu.style.display='inline-block';
        closeMenu.style.display='none'
    })
}