// const RandomNum= Math.floor(Math.random()*5)+1;

// const para=document.querySelector("p");
// count=0;
// for(let i=0;i<5;i++){
//     const Num=parseInt(prompt("Enter a number between 1-5:"));

    
//     if(RandomNum==Num){
//         console.log("You have won");
//         count++;
//     }else {
//         console.log(`You have lost. random number was : ${RandomNum}`);
//     }
// }
// para.innerHTML=`you won ${count} times and lost ${5-count} times`;




const para1=document.querySelector(".para1");
const para2=document.querySelector(".para2");

const para3=document.querySelector(".para3");
para3.classList.add("large-text");

let totalAttempts=0;
let totalWon=0;
let totalLost=0;
const form=document.querySelector("form");
const Number=form.querySelector("#number");
const submitButton=form.querySelector("#submit");




    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        totalAttempts++;
       
        const RandomNumber=Math.floor(Math.random()*5)+1;
        let typeValue=Number.value;
        
        
        if(totalAttempts===5){
            Number.disabled=true;
            submitButton.disabled= true;
        }
        if(totalAttempts<6){
            if(RandomNumber==typeValue){
                para1.innerHTML="You have won";
                totalWon++;
              }
              else {
                 para1.innerHTML=`You have lost. Random number was ${RandomNumber}`;
                 totalLost++;
              }
        }
      
        
        para2.innerHTML=`total remaining attempts : ${5-totalAttempts}`;
        para3.innerHTML=`total won:${totalWon} , total lost:${totalLost} `;
     
        

        Number.value="";

        
       })

