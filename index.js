function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

 const menuToggle = document.querySelector('.toggle');
      const showcase = document.querySelector('.showcase');

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
      })



///////////////////////////////////back to top///////////////////////////////////


$('.back-to-top').click(function(){
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});

///////////////////////////////////blur///////////////////////////////////




