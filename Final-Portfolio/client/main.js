// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
/*=========================
AOS
=========================*/

AOS.init({
    duration:800,
    easing:"ease-out-cubic",
    once:true,
    mirror:false,
    offset:80,
    debounceDelay:50,
    throttleDelay:99
});


/*=========================
Typing Effect
=========================*/

new Typed("#typing",{

strings:[
"Front-End Developer",
"Data Analyst"
],

typeSpeed:70,
backSpeed:40,
backDelay:1500,
loop:true

});


/*=========================
Loader
=========================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

document.getElementById("loader").style.visibility="hidden";

},1000);

});


/*=========================
Scroll Progress
=========================*/

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/scrollHeight)*100;

document.getElementById("progressBar").style.width=progress+"%";

});


/*=========================
Counter Animation
=========================*/

const counters=document.querySelectorAll(".counter");

const speed=150;

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target");

const count=+counter.innerText;

const increment=Math.ceil(target/speed);

if(count<target){

counter.innerText=count+increment;

setTimeout(update,15);

}

else{

counter.innerText=target+"+";

}

}

update();

});


/*=========================
Certificate Tilt
=========================*/

VanillaTilt.init(

document.querySelectorAll(".certificate-card"),

{

max:8,

speed:400,

glare:true,

"max-glare":0.15

}

);


/*=========================
Excel Cards Tilt
=========================*/

VanillaTilt.init(

document.querySelectorAll(".excel-card"),

{

max:8,

speed:400

}

);


/*=========================
Navbar Active Link
=========================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});





/*=========================
Scroll To Top Button
=========================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("show");

}

else{

topBtn.classList.remove("show");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/*=========================
Floating Navbar Shadow
=========================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.classList.add("sticky");

}

else{

header.classList.remove("sticky");

}

});


/*=========================
Mouse Glow
=========================*/

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/*=========================
Current Year
=========================*/

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}