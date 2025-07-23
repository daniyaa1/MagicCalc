const allButton=document.querySelectorAll("button");
const display=document.querySelector("#display-sec");
const reset=document.querySelector("#reset");
const del=document.querySelector("#del");
const magicBtn=document.querySelector("#magicBtn");
const toggleBtn=document.querySelector(".toggleBtn");
const b=document.querySelectorAll(".b");


magicBtn.addEventListener("click",()=>{
   toggleBtn.classList.toggle("toggleBtn"); //id can override class 
   b.forEach(btn=>{
    btn.classList.toggle("b");
   })
  
});



let currInput= "";

allButton.forEach((currButton)=>{
    currButton.addEventListener("click",()=>{

let btnText=currButton.innerText;
if(!["DEL","RESET","="].includes(btnText)){
        currInput+=btnText;
        display.innerText= currInput;
}
else{
     if(btnText==="RESET"){
        currInput="";
        display.innerText="";
    }
    else if(btnText==="DEL"){
         currInput=currInput.slice(0,-1);
        display.innerText=currInput;
       
    }
    else if(btnText==="="){
            let expression=currInput;
            expression=currInput.replaceAll("x","*");

            const invalidPatterns=["++", "--", "//", "**","xx", "+-", "-+", "*/","x/", "/+", "+*","+x", "*-","x-", "-/", "/-", ".."];
            for(let pattern of invalidPatterns){
                if(expression.includes(pattern)){ 
                    display.innerText="Invalid Input";
                     setTimeout(()=>{
                    currInput="";
                    display.innerText="";
                },1000);
                    return;
            }
        }

            if("+-*/".includes(expression[0])){
                 display.innerText="Invalid Input";
                 setTimeout(()=>{
                    currInput="";
                    display.innerText="";
                },1000);
                return;
            }
            else if("+-*/".includes(expression[expression.length-1])){
                 display.innerText="Invalid Input";
                  setTimeout(()=>{
                    currInput="";
                    display.innerText="";
                },1000);
                return;
            }
          
            try{
                let result=eval(expression);
                currInput=result.toString();
                display.innerText=currInput;
            }
            catch(error){
                console.log(error);
                display.innerText="Error";
                setTimeout(()=>{
                    currInput="";
                    display.innerText="";
                },1000);
            }

            
        }

        
        }
      

                
 }) 

});








