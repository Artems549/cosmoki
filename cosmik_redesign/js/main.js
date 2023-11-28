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

console.log(navItemsUl.length)

function activeBurger() {
    burgerBtn.addEventListener('click', function() {
        if(burgerNav.classList.contains('active-nav')) {
            burgerNav.classList.remove('active-nav');
            removeLine() 
        } else {
            burgerNav.classList.add('active-nav');
            activeLine()
        }
    })
}
activeBurger()

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
}activeDrop()