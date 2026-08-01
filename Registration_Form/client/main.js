// YOUR JAVASCRIPT CODE FOR INDEX.HTML GOES HERE
function submited(){
            const name=document.getElementById("Name").value;
            const age=document.getElementById("Age").value;
            const email=document.getElementById("Email").value;
            const pass=document.getElementById("Password").value;
            const conpass=document.getElementById("Conpassword").value;
            const mobile=document.getElementById("Mobile").value;
            
            document.querySelector(".name").innerHTML=""
            document.querySelector(".age").innerHTML=""
            document.querySelector(".pass").innerHTML=""
            document.querySelector(".conpass").innerHTML=""
            document.querySelector(".email").innerHTML=""
            document.querySelector(".mobile").innerHTML=""


            const specialChars=/[!@#$%^&*]/
            const numbers=/[0-9]/

            if(!name)
                document.querySelector(".name").innerHTML="Name is required*"
            if(!age)
                document.querySelector(".age").innerHTML="Age is required*"
            if(!email)
                document.querySelector(".email").innerHTML="Email is required*"
            if(!pass)
                document.querySelector(".pass").innerHTML="Password is required*"
            if(!conpass)
                document.querySelector(".conpass").innerHTML="Password is required*"
            if(!mobile)
                document.querySelector(".mobile").innerHTML="Mobile is required*"

            if(name && !(name.length>6))
                document.querySelector(".name").innerHTML="Name should not be less than 6 characters"
           
            if(age && (age<1 || age>100))
                document.querySelector(".age").innerHTML="Age between 1 and 100"
            
            if(email && (!email.includes("@")))
                document.querySelector(".email").innerHTML="Email should contain @"
            
            if(pass && !specialChars.test(pass) )
                document.querySelector(".pass").innerHTML="Password should contain atleast 1 special character"
            
             if(pass && !numbers.test(pass))
                document.querySelector(".pass").innerHTML="Password should contain atleast 1 number"
                 
            if(pass && !(pass.length>=6))
                document.querySelector(".pass").innerHTML="Password should contain atleast 6 characters"

            if(conpass && !(pass===conpass))
                document.querySelector(".conpass").innerHTML="Password does not match"
        
            if(mobile && !(mobile.length===10))
                document.querySelector(".mobile").innerHTML="Mobile number should be 10 digts"
           

            if(name.length>6 && (age>=1 && age<=100) && email.includes("@") && specialChars.test(pass) &&numbers.test(pass) && pass===conpass && mobile.length===10){
                alert("Form submitted sucessfully!")
                location.reload()}
        }