let itsIpad = document.querySelectorAll('.to-hide--ipad');
let itsMac = document.querySelectorAll('.to-hide--mac');

let seeMore = document.querySelector('.see-more');
let seeLess = document.querySelector('.see-less');


let showAll = function(element) {
    seeMore.addEventListener('click', function() {
        element.classList.remove('brands--hide--ipad');
        element.classList.remove('brands--hide--mac');
        seeMore.classList.add('hidden');
        seeLess.classList.remove('hidden');
    })
}

let dontShowAllIpad = function(element) {
    seeLess.addEventListener('click', function() {
        element.classList.add('brands--hide--ipad');
        seeLess.classList.add('hidden');
        seeMore.classList.remove('hidden');
    })
}

let dontShowAllMac = function(element) {
    seeLess.addEventListener('click', function() {
        element.classList.add('brands--hide--mac');
        seeLess.classList.add('hidden');
        seeMore.classList.remove('hidden');
    })
}

for (let i = 0; i < itsIpad.length; i++) {
    showAll(itsIpad[i]);
    dontShowAllIpad(itsIpad[i]);
}

for (let i = 0; i < itsMac.length; i++) {
    showAll(itsMac[i]);
    dontShowAllMac(itsMac[i]);
}



//  --СВАЙПЕР--

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 16,
    breakpoints: {
      768: {
        enabled: false,
        // width: 224, 
        // spaceBetween: 24,
        },
    },
    width: 240, 
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    slideToClickedSlide: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    //эти два параметра не работают почему-то
  });






