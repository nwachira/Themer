// Hero carousel

const slider1 = document.querySelector('#glide_1');

if (slider1) {
  new Glide(slider1,{
    type: 'carousel',
    startAt: 0,
    autoplay: 3000,
    perView: 1,
    hoverpause: true,
    gap: 0,
    animationduration: 800,
    animationtimingfunc: 'linear',
    animationdelay: 0,
  }).mount();
}