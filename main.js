var par = document.getElementsByClassName('menu_burger');
var nav = document.getElementsByClassName('nav');
var sm = document.getElementsByClassName('show_more');
var blocks = document.getElementsByClassName('blocks');
par[0].onclick = function(){
    if (!nav[0].classList.contains('active') ){
        nav[0].classList.add('active');
        par[0].classList.add('active_burger')
        }else{
            nav[0].classList.remove('active')
            par[0].classList.remove('active_burger')
        }
    }
    sm[0].onclick = function(){
        sm[0].classList.add('hidden')
        blocks[1].classList.remove('hidden')
    }
