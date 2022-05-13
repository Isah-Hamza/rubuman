  AOS.init();

  const menuBtn = document.querySelector('.menu');
  const nav = document.querySelector('.navigation');
  const closeBtn = document.querySelector('.close');
  const anchors = Array.from(document.querySelectorAll('header a'));
  const heroBtns = [...document.querySelectorAll('.hero button')];
  const coinExporterSection = document.querySelector('.coinexporter');
  const whitelist = document.querySelector('.whitelist');
  const rubumanTitle = document.querySelector('.rubuman-title');
  const rubumanBody = document.querySelector('.rubuman-body .body');
  const typingIndicator = document.querySelector('.indicator');


  const rubuman = 'RUBUMAN';
  const heroText = `Welcome to the future that creates  mass 
  wealth and prosperity for all.`;


  console.log(whitelist);

  function handleOpenMenu(){
    nav.classList.toggle('open');
  }

  let i = 0;
  const rubumanTitleInterval = setInterval(() => {
    rubumanTitle.append(rubuman[i]);
    i++
    if( i >= rubuman.length ) clearInterval(rubumanTitleInterval);
  }, 100 );


  let j = 0
  setTimeout(() => {
   const rubumanBodyInterval =  setInterval(() => {
    rubumanBody.append(heroText[j]);
    j++
    if( j >= heroText.length ) {
      clearInterval(rubumanBodyInterval);
      typingIndicator.classList.add('hide');
    };
    }, 100 );
  }, 1000 );

  menuBtn.addEventListener('click', handleOpenMenu);
  closeBtn.addEventListener('click', handleOpenMenu);
  anchors.forEach(elem => elem.addEventListener('click', handleOpenMenu));
  heroBtns.forEach(btn => btn.addEventListener('click', () => { coinExporterSection.scrollIntoView() }));
  whitelist.addEventListener('click', () => {  window.open('./assets/pdf/Official Whitepaper.pdf', '_blank', 'fullscreen=yes' ); return false })

