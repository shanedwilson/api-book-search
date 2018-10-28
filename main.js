// $( "#search" ).submit(function (event) {
//     let userInput = $(".form-control").val();
//     getBook(userInput);
//     event.preventDefault();
//    $( ".form-control" ).blur();
//    $('.form-control').val("");
// });

// const getBook = (userInput) => {
//     return new Promise ((resolve, reject) => {
//         $.ajax(`"https://openlibrary.org/api/books?bibkeys=ISBN:${userInput}&format=json"`)
//         .done(book => {
//         console.log(book);
//     }) .fail (error => {
//         reject(error);
//     })
// })
// }


$.ajax(`"https://openlibrary.org/api/books?bibkeys=ISBN:${userInput}&format=json"`)