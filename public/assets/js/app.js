$(document).ready(() => {
  // $('.devour-form').on('submit', function (event) {
  //   event.preventDefault();

  //   var burgerInfo = {
  //     burger_id: $(this).children('.burger_id').val(),
  //     customer: $(this).children('.custom-input').val()
  //   };

  //   $.ajax({
  //     method: 'PUT',
  //     url: '/burgers/update',
  //     data: burgerInfo
  //   }).then(function (data) {
  //     // reload page to display devoured burger in proper column
  //     location.reload();
  //   });
  // });
  $('.dropdown-trigger').dropdown({ hover: true });
  $('.carousel').carousel({fullWidth:true}).css('height', $(window).height());
  autoplay();
});

const autoplay = () => {
  $('.carousel').carousel('next');
  setTimeout(autoplay, 4500);
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
