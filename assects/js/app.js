// Cheak & Uncheak
$("ul").on("click", "li", function() {
  $(this).toggleClass("cheaked");
});

// click on X to delete
$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation(); // prevents from change on parent emlment
});

// inputs
$("input[type='text'").keypress(function(event) {
  if (event.which === 13) {
    // grabbing todo input
    var todoText = $(this).val();
    $(this).val("");
    // creating new li
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>"
    );
  }
});
$(".fa-plus").click(function() {
  $("input[type='text'").fadeToggle();
});
