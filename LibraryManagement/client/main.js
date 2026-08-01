// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
function viewDP(){
    let profile=document.getElementById("viewprofile")

    if(profile.style.display === "none" || profile.style.display === ""){
        profile.style.display="flex"
    }
    else{
        profile.style.display="none"
    }
}

let BookName,Bookcategory,BookID,BookAuthor,BookPublisher,BookStatus;

let searchedList=document.getElementById("addList") 
let data=JSON.parse(localStorage.getItem('LibraryBooks')) || [];
let datalen

function DetailsOfBooks(){

    let totalBooks = document.getElementById("Total-books")
    let availableBooks = document.querySelector(".Available-books")
    let issuedBooks = document.querySelector(".Issued-books")

    if(!totalBooks && !availableBooks && !issuedBooks) return

    datalen = data.length

    if(totalBooks) totalBooks.innerHTML = datalen

    let availableCount = 0
    let issuedCount = 0

    for(let i=0;i<data.length;i++){
        if(data[i].BookStatus.toLowerCase()==='available')
            availableCount++
        else if(data[i].BookStatus.toLowerCase()==='issued')
            issuedCount++
    }

    if(availableBooks) availableBooks.innerHTML = availableCount
    if(issuedBooks) issuedBooks.innerHTML = issuedCount
}

DetailsOfBooks()

let historyLog = JSON.parse(localStorage.getItem("History")) || []

function history(BookName, BookAction){

if(!BookName || !BookAction) return

let historyLog = JSON.parse(localStorage.getItem("History")) || []

let log = {
    name: BookName,
    action: BookAction,
    time: new Date().toLocaleString()
}

historyLog.push(log)

localStorage.setItem("History", JSON.stringify(historyLog))

}


function loadHistory(){

let historyCont = document.querySelector(".history")
if(!historyCont) return

let historyLog = JSON.parse(localStorage.getItem("History")) || []

historyCont.innerHTML = ""

// reverse order to show recent first
let reversedHistory = [...historyLog].reverse()

reversedHistory.forEach((log,index)=>{

let historydata = document.createElement("div")

historydata.className = "hist-div"

historydata.innerHTML = `
<div class="inner-hist-cont">
<h1>${log.name}</h1>
<h2>${log.action}</h2>
</div>
<button onclick="deletehist(${historyLog.length - 1 - index})">Delete History</button>
`

historyCont.appendChild(historydata)

})

}

function addBook(){
    BookName=document.getElementById("BookName").value
    Bookcategory=document.getElementById("addCategory").value
    let counter=Number(localStorage.getItem('BookIDCounter'))
    if(counter==0){
        counter=1001
    }
    BookID=counter;
    BookAuthor=document.getElementById("addBookAuthor").value
    BookPublisher=document.getElementById("addBookPublisher").value
    BookStatus=document.getElementById("addBookStatus").value


    if(!(BookAuthor && BookName && BookPublisher && BookStatus && Bookcategory)){
        return alert("Please enter all details");
    }


    const bookdetails={
        BookName:BookName,
        BookCategory:Bookcategory,
        BookID:BookID,
        BookAuthor:BookAuthor,
        BookPublisher:BookPublisher,
        BookStatus:BookStatus
    }
    data.push(bookdetails)
    localStorage.setItem('LibraryBooks',JSON.stringify(data))
    localStorage.setItem('BookIDCounter',counter+1)
    alert(" Book added successfully!")
   
    DetailsOfBooks()
    history(BookName,"Book Added Successfully")
     location.reload()
}


;
console.log(searchedList)
function searchBook(){
    searchedList.innerHTML="";
    let searchedItem=document.getElementById("searchBookName").value.toLowerCase()
   if(searchedItem){
    for(i=0;i<data.length;i++){
        if((data[i].BookName.toLowerCase()).includes(searchedItem)){
            console.log(data[i].BookName)
            searchedList.innerHTML+=`
             <tr>
                <td>${data[i].BookID}</td>
                <td>${data[i].BookName}</td>
                <td>${data[i].BookAuthor}</td>
                <td>${data[i].BookCategory}</td>
                <td><button style="background-color:${data[i].BookStatus.toLowerCase()==='issued' ? 'red' : 'green'};color:white" id="statusbackcolor">${data[i].BookStatus}</button></td>
                
                ${data[i].BookStatus.toLowerCase() === 'issued' 
                    ? `<td><div ><button class="statusbackcolor" id="returnbook" style="background-color:blue;" onclick="UpdateBook('${data[i].BookID}','${data[i].BookName}',this)">Return</button><button class="statusbackcolor" style="background-color:red;" id="deletebook" onclick="DeleteBook('${data[i].BookID}','${data[i].BookName}',this)">Delete</button></div></td>` 
                    : `<td><div><button class="statusbackcolor" id="issuebook" style="background-color:blue;" onclick="UpdateBook('${data[i].BookID}','${data[i].BookName}',this)">Issue</button><button class="statusbackcolor" style="background-color:red;" id="deletebook" onclick="DeleteBook('${data[i].BookID}','${data[i].BookName}',this)">Delete</button></div></td>`
                }
             </tr>
            `
        }
    }}
    else{
        return alert("please enter book details");
    }
}

function DeleteBook(BID,BName,btn){
    alert("HII")
     let row = btn.closest("tr")
    data=data.filter(newdata=> newdata.BookID!=BID );
        
    localStorage.setItem("LibraryBooks", JSON.stringify(data))
    row.remove()
    DetailsOfBooks()
    history(BName,"Book deleted successfully")
}


function UpdateBook(BID,BName,btn){

    let row = btn.closest("tr")

    let book = data.find(b => b.BookID == BID)

    if(!book) return

    book.BookStatus = book.BookStatus === "Issued" ? "Available" : "Issued"

    row.querySelector("#statusbackcolor").innerText = book.BookStatus
    row.querySelector("#statusbackcolor").style.backgroundColor =
    book.BookStatus === "Issued" ? "red" : "green"

    btn.innerText = book.BookStatus === "Issued" ? "Return" : "Issue"

    localStorage.setItem("LibraryBooks", JSON.stringify(data))

    DetailsOfBooks()

    let action = book.BookStatus === "Issued" ? "Book Issued" : "Book Returned"
    history(BName,action)
}




function searchbyCategory(){
    searchedList.innerHTML="";
    let searchcategory=document.getElementById("category").value.toLowerCase()
    // let searchsort=document.getElementById("sort").value || "";
    if(searchcategory){
        for(i=0;i<data.length;i++){
            if((data[i].BookCategory.toLowerCase())==searchcategory){
                searchedList.innerHTML+=`
                <tr>
                    <td>${data[i].BookID}</td>
                    <td>${data[i].BookName}</td>
                    <td>${data[i].BookCategory}</td>
                    <td>${data[i].BookStatus}</td>
                   <td><button style="background-color:${data[i].BookStatus.toLowerCase()==='issued' ? 'red' : 'green'};" id="statusbackcolor">${data[i].BookStatus}</button></td>
                
                    ${data[i].BookStatus.toLowerCase() === 'issued' 
                        ? `<td><div ><button class="statusbackcolor" id="returnbook" style="background-color:blue;" onclick="UpdateBook('${data[i].BookID}','${data[i].BookName}',this)">Return</button><button class="statusbackcolor" style="background-color:red;" id="deletebook" onclick="DeleteBook('${data[i].BookID}','${data[i].BookName}',this)">Delete</button></div></td>` 
                        : `<td><div><button class="statusbackcolor" id="issuebook" style="background-color:blue;" onclick="UpdateBook('${data[i].BookID}','${data[i].BookName}',this)">Issue</button><button class="statusbackcolor" style="background-color:red;" id="deletebook" onclick="DeleteBook('${data[i].BookID}','${data[i].BookName}',this)">Delete</button></div></td>`
                    }
                </tr>
                `
            }
        }
    }
    else{
        return;
    }
}

function DeleteBook(BID,BName,btn){

let row = btn.closest("tr")

data = data.filter(newdata => newdata.BookID != BID)

localStorage.setItem("LibraryBooks", JSON.stringify(data))

row.remove()

DetailsOfBooks()

history(BName,"Book Deleted Successfully")

location.reload()

}

loadHistory()