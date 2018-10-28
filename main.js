$( "#search" ).submit(function (event) {
    let userInput = $(".form-control").val();
    getBook(userInput);
    event.preventDefault();
   $( ".form-control" ).blur();
   $('.form-control').val("");
});

const getBook = (userInput) => {
    return new Promise ((resolve, reject) => {
        $.ajax(`https://openlibrary.org/api/books?bibkeys=ISBN:${userInput}&format=json`)
            .done(book => {
            printBook(book);
        }) .fail (error => {
            reject(error);
        })
    })
}

// const printBook = (book) => {
//     let domString = '';
//     domString += `
//     <div id="${book.info_url}"class="movie card col-md-3 px-0 m-3" style="width: 18rem;">
//     <div class="card-body">
//       <div class="thumbnail mb-3">
//       <img src="${book.thumbnail_url}" 
//       alt="" width="100%">
//       </div>
//     </div>
//   </div>
//     `
//     $("#book-div").html(domString);    
// }