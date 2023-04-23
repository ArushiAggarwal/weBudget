var commentList = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", addComment);

function addComment(){
  event.preventDefault();
  var comment= $('.comment').val();
  
  commentList.append(`<p> ${comment} </p></br>`);

  $('.comment').val("");
}