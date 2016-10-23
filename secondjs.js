// A Website title and URL can be typed into two fields. When the enter button is clicked, it creates a new card on the right side. The two fields on the left are cleared so new information can be entered.
// On the card, the read button can be clicked to show the website has been accessed. The card also changes colors. The website is clickable. The delete button deletes the card.
var enter = document.querySelector('.enter');
var readButton = document.querySelector('.read');
var deleteButton = document.querySelector('.delete');


enter.addEventListener('click', function() {
  var title = document.querySelector('.title');
  var url = document.querySelector('.url');
  $('.right').append('<article class="card darkercard">'+
  '<h2>The Website Title</h2>'+
  '<h3>Website URL</h3>'+
  '<button class="read alreadyread">Read</button>'+
  '<button class="delete">Delete</button>'+'</article>');
  $('h2').text(title.value);
  $('h3').html(url.value);
  title.value = null;
  url.value = null;
  $('.read').on('click', function() {
    $('.read').toggleClass('alreadyread');
    $('.card').toggleClass('darkercard');
    // $('.card').css('background-color', '#F2F4F4');
    // $('.read').css('color', "#F05A28");
  });
  $('.delete').on('click', function() {
    $('.card').remove();
  })
})
