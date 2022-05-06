  AOS.init();

  const menuBtn = document.querySelector('.menu');
  const nav = document.querySelector('.navigation');
  const closeBtn = document.querySelector('.close');
  const anchors = Array.from(document.querySelectorAll('header a'));
  const heroBtns = [...document.querySelectorAll('.hero button')];
  const coinExporterSection = document.querySelector('.coinexporter');

  function handleOpenMenu(){
    nav.classList.toggle('open');
  }

  menuBtn.addEventListener('click', handleOpenMenu);
  closeBtn.addEventListener('click', handleOpenMenu);
  anchors.forEach(elem => elem.addEventListener('click', handleOpenMenu));
  heroBtns.forEach(btn => btn.addEventListener('click', () => { coinExporterSection.scrollIntoView() }));

//   // Wrap every letter in a span
// // var textWrapper = document.querySelector('.description');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml2 .letter',
//     scale: [4,1],
//     opacity: [0,1],
//     translateZ: 0,
//     easing: "easeOutExpo",
//     duration: 950,
//     delay: (el, i) => 70*i
//   }).add({
//     targets: '.ml2',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });