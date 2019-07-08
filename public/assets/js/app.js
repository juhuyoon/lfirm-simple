/* eslint-disable no-undef */
$(document).ready(() => {
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

  // for (let i = 0; i < coll.length; i += 1) {
  //   coll[i].addEventListener('click', () => {
  //     this.classList.toggle('active');
  //     const content = this.nextElementSibling;
  //     if (content.style.maxHeight) {
  //       content.style.maxHeight = null;
  //     } else {
  //       content.style.maxHeight = `${content.scrollHeight}px`;
  //     }
  //   });
  // }
  var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }
});

