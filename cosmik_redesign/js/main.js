// Main slider 

$("#owl-carousel__main").owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    nav: true,
    autoplay: true,
    autoplayTimeout:5000,
  });
  let lastMainPrew = document.querySelector('#owl-carousel__main .owl-nav .owl-prev span').innerHTML = "";
  let lastMainNext = document.querySelector('#owl-carousel__main .owl-nav .owl-next span').innerHTML = "";

const modal = document.querySelector('.main-slider__mod');
const closeModal = document.querySelector('.main-slider__close p');
const subscribeBtn = document.querySelector('.subscribe__btn');


document.addEventListener('click', (event) => {
if (event.target.classList.contains('subscribe__btn')) {
  if(modal.style.display !== 'flex') {
    modal.style.display = 'flex';
    overlay.style.display = 'block';
  }
}
});
closeModal.addEventListener('click', () => {
if(modal.style.display !== 'none') {
  modal.style.display = 'none';
  overlay.style.display = 'none';
}
})

// What method

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
const burgerNav = document.querySelector('nav');
const navItems = document.querySelectorAll('.nav__item');
const navItemsUl = document.querySelectorAll('.nav__item-ul');
const navItemsSeminar = document.querySelector('.nav__item-seminar');
const downUserBtn = document.querySelector('.header__down-login img:nth-child(2)');
const downMenu = document.querySelector('.header__down-adaptive');
const downCloseBtn = document.querySelector('.header__down-close');
const overlay = document.querySelector('.overlay')

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
function hiddenBurgerBtn() {
    window.addEventListener('scroll', function(e) {
        if(this.window.scrollY === 0) {
            burgerBtn.style.display = 'block';
        } else {
            burgerBtn.style.display = 'none';
        }
    })
}

openBurgerMenu()
activeDrop()
openUserMenu()
closeUserMenu()
hiddenBurgerBtn()



// Video


const videos = document.querySelectorAll('.video__videos-item-video');
const prevPic = document.querySelectorAll('.video__videos-item-pic');
const playPic = document.querySelectorAll('.video__videos-item-play');
const overlayVideo = document.querySelectorAll('.video__videos-item-overlay')

function playVideo(i) {
  const video = videos[i];
  if (video.paused) {
    video.play();
    overlayVideo[i].style.display = 'none';
    playPic[i].style.display = 'none';
    prevPic[i].style.display = 'none';
  }
}

playPic.forEach((playPicElem, i) => {
  playPicElem.addEventListener('click', () => playVideo(i));
});
overlayVideo.forEach((prevPicElem, i) => {
  prevPicElem.addEventListener('click', () => playVideo(i))
})









// Reviews 

$("#owl-carousel__reviews").owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive:{
      0:{
          items: 1,
      },
      768:{
          items: 2
      },
      900:{
        items: 3
      },
      1201:{
          items:4
      }
  }
  })
// let youtubeIds = ['dsxlmvih2-k',
// 'hKmknc2tk2I',
// 'y_bqhRwJsfA',
// 'VR1iyJvOITk',
// 'ctdB-BgZqkU',
// '2ryQoymLML0',
// 'HIvXBN9lJt8',
// 'tMzWlfVjd4o',
// 'aMFr7VGM52g',
// 'yWXQcM-_kkc',
// '857-AJgfnZc',
// 'GinhIMvANF4',
// 'TJC_rSR7rS0',
// 'AgEBk04wUK8',
// '_mnRJsQMp-4',
// 'kQZZpGSL9qQ',
// 'QMu4aPBj7jg',
// '140Vr-qyyZc',
// 'aN1f-mFOuZY',
// 'r5DD6JwxB-8',
// 'tB-bXHOWBS4',
// 'dd6ETXirb3A',
// '-bLVEuPeN3s',
// '28RL1HneAv0',
// 'Rdr9Xu9gR_0',
// 'J67q0jFMnzI',
// 'dlFNnIJYhgc',
// '6FLOP9H7EzE',
// 'L_Sfs__lIdA',
// '1wYYzve3lGo',
// 'qYLETXGQZj8',
// 'n3Yz_TrW3Zg',
// 'kCNY9sf8JSA',
// 't2D4HAP93kg',
// 'aStybst-j0g',
// 'YNyHNqbshuQ',
// 'aksmZXeV9fE',
// '_PJIP46TOEc',
// '3-mMbi6WVYA',
// 'xAsnk79a1x4',
// 'Ryd74R6-iFI',
// 'sPB-_JPQN4c',
// 'llbsFA-CYZg',
// 'AsAY2S_Iulo',
// 'Djcf5sQmT-8',
// 'GJj8ny4VQ_o',
// 'pL8ufKZmx7o',
// 'qzdg0QkDjJM',
// '-vO7nDv4Xv0',
// 'arGM7omtxfA',
// '0sy2UJkpX-k',
// 'nvHMo4yMIIU',
// 'grqA4GXz34I',
// 'mU8nwEEwnTs',
// 'o76R8aTDaCw',
// '6b2m27tKsUo',
// 'Z1mmKQCWnJw',
// 'QFN8OyRhYJo',
// 'D54WJUEFja4',
// 'wo26mhNsavY',
// 'rEYAnvwwUk4',
// 'nNYV0Km4aBM',
// '7ufbUDReGOY',
// '8F5NDa49sYY',
// 'lZ-7xt9jyXg',
// 'pRT5RAVIFcY',
// '1UXWf87kqGQ',
// 'GCff-2PZgoo',
// 'CX1mgmyhqMg',
// 'Yzt2y7q4UCw',
// 'lWTGeT6buqc',
// '0ie0R-O4wFg',
// 'y3rnCxzSKGw',
// 'dKrKvNk599Y',
// 'OQYWdziXXqg',
// ];

//     let reviewsCarouselTest = document.querySelector('#owl-carousel__reviews');

//     youtubeIds.forEach((item, index) => {
//         let reviewsItem = document.createElement('div');
//         reviewsItem.classList.add('reviews__item');

//         let reviewsItemPlayer = document.createElement('div');
//         reviewsItemPlayer.classList.add('youtube-player');
//         reviewsItemPlayer.setAttribute('data-id', item);
//         reviewsItemPlayer.setAttribute('data-related', "0");
//         reviewsItemPlayer.setAttribute('data-control', "1");
//         reviewsItemPlayer.setAttribute('data-info', "0" );
//         reviewsItemPlayer.setAttribute('data-fullscreen', "0");
//         reviewsItemPlayer.style.cssText = "width:100%;background-color:black;position: relative;cursor: pointer;max-height:191px;height:100%; overflow:hidden;display: block;padding-bottom: 56.25%;";

//         let reviewsItemImg = document.createElement('img');
//         reviewsItemImg.setAttribute('loading', 'lazy');
//         reviewsItemImg.setAttribute('alt', 'отзыв');
//         reviewsItemImg.setAttribute('src', "//i.ytimg.com/vi/" + item + "/hqdefault.jpg");
//         reviewsItemImg.style.cssText = "bottom: -100%; display: block; left: 0; margin: auto; max-width: 100%; width: 100%;height:auto; position: absolute; right: 0; top: -100%;";

//         let reviewsItemBg = document.createElement('div');
//         reviewsItemBg.style.cssText = "background-color: rgba(0, 0, 0, 0.5); box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0.5);position:absolute; border: 4px solid #fff;border-radius: 50%;left:50%;top:50%; margin-left:-36px; margin-top:-36px; height: 72px; width: 72px; align-items: center; display: flex; justify-content: center;"

//         let reviewsItemTriangle = document.createElement('div');
//         reviewsItemTriangle.classList.add('triangle');
//         reviewsItemTriangle.style.cssText = "border-style: solid;height: 0;width: 0;border-color: rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #ffffff;border-width: 16px 0 16px 24px;margin-left:6px;";

//         reviewsItemBg.appendChild(reviewsItemTriangle);

//         reviewsItemPlayer.appendChild(reviewsItemImg);
//         reviewsItemPlayer.appendChild(reviewsItemBg);

//         reviewsItem.appendChild(reviewsItemPlayer);

//         reviewsCarouselTest.insertAdjacentElement('afterbegin', reviewsItem);
//     });