let data=JSON.parse(localStorage.getItem('LibraryBooks')) || [];

let historyCont=document.querySelector(".history")

for(i=0;i<data.length;i++){
    let historydata=document.createElement("div")
    historydata.className="hist-div"
    console.log(historydata)
    historydata.innerHTML=`
        <div class="inner-hist-cont">
            <h1>${data[i].BookName}</h1>
            <h2 style="color: ${data[i].BookStatus.toLowerCase()=='issued'? "red" : "green"};">${data[i].BookStatus}</h2>
        </div>
        <button onclick="deletehist(this)">Delete History</button>
    `
    historyCont.appendChild(historydata)
}

function deletehist(btn){
    let row=btn.closest("div")
    row.remove()
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