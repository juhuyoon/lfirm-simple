/* eslint-disable no-undef */
$(document).ready(() => {
  $('.sidenav').sidenav();
        
  // $('.emailSubmit').on('submit', (event) => {
  //   event.preventDefault();

  //   const emailInfo = {
  //     firstName: $(this).children('#first_name').val(),
  //     lastName: $(this).children('#last_name').val(),
  //     email: $(this).children('#email').val(),
  //     message: $(this).children('#message').val()
  //   };

  //   $.ajax({
  //     method: 'PUT',
  //     url: '/emailVerification',
  //     data: burgerInfo
  //   }).then((data) => {
  //     // reload page to display devoured burger in proper column
  //     location.reload();
  //   });
  // });

  const autoplay = () => {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 6000);
  };

  $('.dropdown-trigger').dropdown({ hover: true });
  $('.carousel').carousel({ fullWidth: true }).css('height', $(window).height());
  autoplay();


  $('.collapsible').collapsible();
});
