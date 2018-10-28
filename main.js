$( "#search" ).submit(function (event) {
    let userInput = $(".form-control").val();
    let bookNumber = `ISBN:${userInput}`;
    getBook(bookNumber);
    event.preventDefault();
   $( ".form-control" ).blur();
   $('.form-control').val("");
});

const getBook = (bookNumber) => {
    return new Promise ((resolve, reject) => {
        $.ajax(`https://openlibrary.org/api/books?bibkeys=${bookNumber}&format=json&jscmd=details`)
            .done(book => {
            printBook(book, bookNumber);
        }) .fail (error => {
            reject(error);
        })
    })
}

const printBook = (book, bookNumber) => {
    let domString = '';
    domString += `
        <div id="${book[bookNumber]}"class="card col-md-3 px-0 m-3" style="width: 18rem;">
            <div class="card-body text-center">
                <h3 class="card-text">${book[bookNumber].details.title}</h3>
                <p class="card-text">${book[bookNumber].details.physical_format}</p>
                <p class="card-text">${book[bookNumber].details.publish_date}</p>
                <a href="${book[bookNumber].info_url}" target="_blank">Info</a>
            </div>
        </div>
    `
    $("#book-div").html(domString);    
}