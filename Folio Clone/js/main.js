(function(){

  let toggler = document.querySelector('.toggler');
  let nav = document.querySelector('#main-nav');
  let menu = document.querySelector('.menu');


  function showMenu() {
    menu.classList.toggle('menu-show');
  }

  toggler.addEventListener('click', showMenu);
  
  function navShow() {
    var windowOffset = window.pageYOffset;
    if (windowOffset > 200) {
      nav.classList.add('nav-show');
    } else {
      nav.classList.remove('nav-show');
    }
  }

  // Show Main Navigation on window scroll
  window.addEventListener('scroll', navShow)

})()


