var animal = ["loin","dog","cow"];

for(var i=0; i<animal.length; i++){
   if( animal[i] == "loin"){
        console.log(animal[i].valueOf()+ " is king of Jungle")
   }else if(animal[i] == "cow"){
        console.log(animal[i].valueOf()+ " gives milk")
   }else if(animal[i] == "dog"){
    console.log(animal[i].valueOf()+ " is good pet")
   }
}

console.log("\nThese all Animals have 4 legs")