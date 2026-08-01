// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
           
           const list=[
                {
                    question:"What is the capital of Japan ?",
                    options:["Beijing","Tokyo","Seoul","Bangkok"],
                    answer:"Tokyo"
                },
                {
                    question:"What is the Chemical symbol for Gold ?",
                    options:["O"," Fe","Au","Ag"],
                    answer:"Au"
                },
                {
                    question:"Which planet is known as 'Red Planet' ?",
                    options:["Venus","Mars","Jupiter","Saturn"],
                    answer:"Mars"
                },
                {
                    question:"Who wrote the Play Romeo and Juliet ?",
                    options:["Charles Dickens","William Shakespeare","Jane Austen","Mark Twain"],
                    answer:"William Shakespeare"
                },
                {
                    question:"Which is the largest internal organ in the body ?",
                    options:["Liver","Lungs","Kidney","Brain"],
                    answer:"Liver"
                }
            ]
            let index=0;
            let score=0;
            
            function quizstart1() { 
                document.getElementById("frontpage").style.visibility="hidden"
                document.getElementById("mainpage").style.visibility="visible"
                document.querySelector(".question").textContent=list[index].question;
                for(i=0;i<4;i++){
                    document.querySelector("#radio"+(i+1)).value=list[index].options[i]
                }
            }
           
            document.querySelector(".start").addEventListener('click',startTimer)
                let sample;
                function startTimer(){
                    let minute=0;
                    let seconds=0;
                    let timing=0;
                    sample=setInterval(function() {
                        if(index==5){
                            clearInterval(sample)
                        }
                        if(seconds==59){
                            seconds=0;
                            minute++
                        }
                         else{
                            if(seconds<9)
                                timing=document.getElementById("timer").innerText="0"+minute+" : 0"+(++seconds)
                            else
                                timing=document.getElementById("timer").innerText="0"+minute+" : "+(++seconds)
                        }
                    },100)
                    
                }
            function answer(event){
                        let idName=event.currentTarget;
                        if(idName.value==list[index].answer){
                            console.log("score=0")
                            document.getElementById("score").innerHTML="Score:"+(++score)
                            document.getElementById(idName.id).style.backgroundColor="lightgreen"
                        }
                        else{
                            document.getElementById(idName.id).style.backgroundColor="red";
                        } 
                        index++
                        setTimeout(()=>{
                            if(index==5){
                                document.querySelector(".inner").textContent="Congratulations! Your Total Score is : "+score+"/5";
                                setTimeout(()=>{location.reload()},3000)
                        }
                        else{
                            console.log(index)
                            document.getElementById(idName.id).style.backgroundColor="";
                            quizstart1()
                        }},1000)
            }
            
           