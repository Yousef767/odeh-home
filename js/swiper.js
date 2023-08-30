let swiperWrapper = document.querySelector('.swiper-wrapper');
let swiperInner = document.getElementById('swiperInner');
let closers = document.querySelectorAll('#closer');

let swiperViewer = document.querySelector('.sliderCont');
let showSlider = document.querySelector('.showSlider');
swiperWrapper.addEventListener('click',()=>{
  let swiperContainer = document.getElementById('swiper');
  showSlider.style.display='flex';
  swiperViewer.append(swiperContainer);
});

closers.forEach((e)=>{
  e.addEventListener('click',()=>{
    let swiperContainer = document.getElementById('swiper');
    swiperInner.append(swiperContainer);
    showSlider.style.display='none';
  })
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});