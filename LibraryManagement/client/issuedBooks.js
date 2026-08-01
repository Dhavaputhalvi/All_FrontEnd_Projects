let data=JSON.parse(localStorage.getItem('LibraryBooks')) || [];


let issuedbookContainer=document.querySelector(".issuedbooks-cont");
if(issuedbookContainer){
    for(i=0;i<data.length;i++){
        if(data[i].BookStatus.toLowerCase()==='issued'){
            issuedbookContainer.innerHTML+=`
            <div class="outbookCont" style="background-color:rgb(53, 138, 249);">
                                <h2> BOOK ID: ${data[i].BookID}</h2>
                                <h2> BOOK NAME: ${data[i].BookName}</h2>
                                <h2> BOOK CATEGORY: ${data[i].BookCategory}</h2>
                                <h2> BOOK STATUS: ${data[i].BookStatus}</h2>
                                <h2> BOOK AUTHOR: ${data[i].BookAuthor}</h2>
            </div>
             `
        }
    } 
}

function viewDP(){
    let profile=document.getElementById("viewprofile")

    if(profile.style.display === "none" || profile.style.display === ""){
        profile.style.display="flex"
    }
    else{
        profile.style.display="none"
    }
}