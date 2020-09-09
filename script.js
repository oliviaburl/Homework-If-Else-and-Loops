var wrapperEle = document.body.querySelector(".wrapper");
var data = ["dog", "fish", "cat", "shark", "cat", "dog"];

for(var i = 0; i<data.length; i++){
createAnimalFinder(data[i]); 
}

function createAnimalFinder(str){
var ele = document.createElement("div"); 
if(str==="cat"){
ele.innerHTML= "I am a cat.";

}else if (str==="dog"){
ele.innerHTML= "BORF BORF!!";
}else{
ele.innerHTML= "I am an animal.";
}
 
wrapperEle.appendChild(ele);
}