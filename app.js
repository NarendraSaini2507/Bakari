var menubtn = document.querySelector('#menubtn')
var navmenu = document.querySelector('#nav-menu')
var menubgoverlay = document.querySelector('.menu-bg-overlay')
var menubox = document.querySelector('#menu-box')

document.addEventListener(
    'scroll',
    function(e){
        if(window.scrollY>51){
            menubox.classList.add('fixed-menu-box')
        }else{
            menubox.classList.remove('fixed-menu-box')
        }
    }
)

menubtn.addEventListener(
    'click',
    function(){
        navmenu.style.left = '0%';      
        menubgoverlay.style.display = 'block';
    }
)
menubgoverlay.addEventListener(
    'click',
    function(){
        navmenu.style.left = '';      
        menubgoverlay.style.display = '';
    }
)