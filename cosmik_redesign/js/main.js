$(document).ready(function(){
    $("#owl-carousel__what-method").owlCarousel({
        margin: 14,
        responsive: {
            320: {
                items: 1,
            },
            750: {
                items: 4,
            },
            1250: {
                items: 6
            }
        }
    });
  });





// Burger menu



const burgerBtn = document.querySelector('.header__burger');
const burgerBtnSpan = document.querySelectorAll('.header__burger span');
const burgerNav = document.querySelector('nav') 
const navItems = document.querySelectorAll('.nav__item');
const navItemsUl = document.querySelectorAll('.nav__item-ul')
const navItemsSeminar = document.querySelector('.nav__item-seminar');
const downUserBtn = document.querySelector('.header__down-login img:nth-child(2)')
const downMenu = document.querySelector('.header__down-adaptive');
const downCloseBtn = document.querySelector('.header__down-close');
const overlay = document.querySelector('.overlay')

console.log(navItemsUl.length)

function openBurgerMenu() {
    burgerBtn.addEventListener('click', function() {
        if(burgerNav.classList.contains('active-nav')) {
            burgerNav.classList.remove('active-nav');
            overlay.classList.remove('active-overlay')

            removeLine() 
        } else {
            burgerNav.classList.add('active-nav');
            overlay.classList.add('active-overlay')
            activeLine()
        }
    })

}
openBurgerMenu()

function activeLine() {
    burgerBtnSpan.forEach(item => {
        item.classList.add('active')
    })
    burgerBtn.classList.add('active-burger');
}


function removeLine() {
    burgerBtnSpan.forEach(item => {
        item.classList.remove('active')
    })
    burgerBtn.classList.remove('active-burger');
}


function activeDrop() {
    navItems.forEach((item, i) => {
        item.addEventListener('click', function() {
            navItemsUl[i].classList.toggle('active-drop')

        })
    })

}

activeDrop()

function openUserMenu() {
    downUserBtn.addEventListener('click', function() {
        downMenu.classList.add('active-down-adaptive')
        overlay.classList.add('active-overlay')
    })
}
function closeUserMenu() {
    downCloseBtn.addEventListener('click', function() {
        downMenu.classList.remove('active-down-adaptive')
        overlay.classList.remove('active-overlay')
    })
}
openUserMenu()
closeUserMenu()