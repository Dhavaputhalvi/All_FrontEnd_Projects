let data=JSON.parse(localStorage.getItem('LibraryBooks')) || [];



let bookContainer=document.querySelector(".allbooks-cont");
console.log(bookContainer)

if(bookContainer){
for(i=0;i<data.length;i++){
    let bookdata=document.createElement("div")
    bookdata.innerHTML=`
        <div class="outbookCont" style="background-color:${data[i].BookStatus.toLowerCase()==='issued' ? 'orange' : ''}">
                            <h2> BOOK ID: ${data[i].BookID}</h2>
                            <h2> BOOK NAME: ${data[i].BookName}</h2>
                            <h2> BOOK CATEGORY: ${data[i].BookCategory}</h2>
                            <h2> BOOK STATUS: ${data[i].BookStatus}</h2>
                            <h2> BOOK AUTHOR: ${data[i].BookAuthor}</h2>
        </div>
    `
    bookContainer.appendChild(bookdata)

}
}