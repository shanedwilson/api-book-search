$( "#search" ).submit(function (event) {
    let userInput = $(".form-control").val();
    console.log('input: ', userInput);
    event.preventDefault();
   $( ".form-control" ).blur();
   $('.form-control').val("");
});