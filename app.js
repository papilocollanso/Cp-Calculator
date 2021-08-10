const allClicks=document.addEventListener("click", (e)=>{
    const number=e.target.value;
    const number1=e.target.value;

 if(number==="9"){
    
    
     document.getElementById("read").textContent+=number

 } 
 else if(number === "8"){
    document.getElementById("read").textContent+=number
 }
 else if(number==="7"){
    document.getElementById("read").textContent+=number

 }
 
else if(number=== "-"){
    
    document.getElementById("read").textContent+=number

}
else if(number=== "6"){
    
    document.getElementById("read").textContent+=number

}

else if(number=== "5"){
    
    document.getElementById("read").textContent+=number

}

else if(number=== "4"){
    
    document.getElementById("read").textContent+=number

}

else if(number=== "*"){
    
    document.getElementById("read").textContent+=number

}
else if(number==="3"){
    
    document.getElementById("read").textContent+=number

}

else if(number=== "2"){
    
    document.getElementById("read").textContent+=number

}

else if(number=== "1"){
    
    document.getElementById("read").textContent+=number

}

else if(number=== "/"){
    
    document.getElementById("read").textContent+=number
    

}
else if(number== "."){
    
    document.getElementById("read").textContent+=number

}
else if(number== "+"){
    
    document.getElementById("read").textContent+=number

}
else if(number== "0"){
    
    document.getElementById("read").textContent+=number

}
else if(number== "="){
    const value=document.getElementById("read");
    try{
    value.innerText=eval(value.value);
    value.style.color="black";
    //code
}catch(error){
 

setTimeout(function(e){
    value.innerText="error!";
    value.style.color="red";
 

},1000);

 
}


}

else if(number== "clear"){
    const back=document.getElementById("read") 
    console.log(back.innerText);
    if(back.value){
      back.innerText = back.value.slice(0,-1);
    }
    
    
 //code

}
else if(number== "clear all"){
    
 //code
 document.getElementById("read").textContent=" ";
}


else if(number== "%"){
    
    //code
    document.getElementById("read").textContent+=number;
   }


});
