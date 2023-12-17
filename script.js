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


const form=document.querySelector("form");
const Number=form.querySelector("#number");


    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const RandomNumber=Math.floor(Math.random()*5)+1;
        const typeValue=Number.value;
        console.log(typeValue);
        for(let i=0;i<5;i++){
            
        }
        
            if(RandomNumber==typeValue){
                para1.innerHTML="You have won";
              }
              else {
                 para1.innerHTML=`You have lost. Random number was ${RandomNumber}`;
              }
        
       
       })

