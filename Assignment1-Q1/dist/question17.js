// var list = ["waqas","Rukhsana","Rashid"]
// for(var i=0; i< list.length; i++){
//     console.log(list[i]+" you are invited")
// }
// console.log("\n")
// console.log(list[1] + "Cannot make dinner\n")
// list[1] = "Talha";
// for(var i=0; i< list.length; i++){
//     console.log(list[i]+" you are invited")
// }
// console.log("           I found Bigger Dinning Table   ")
// // At Start
// list.splice(0,0,"ALi")
// // At Middle
// list.splice(Math.floor(list.length/2),0,"Haider")
// // At end
// list.splice((list.length+1),0,"Sami")
// for(var i=0; i< list.length; i++){
//     console.log(list[i]+" you are invited")
// }
var list = ["waqas", "Talha", "Rashid", "Ali", "Haider", "Sami"];
console.log(list.length);
console.log("       I Have Dinning Place For Only 2 Guest      ");
while (true) {
    if (list.length - 1 <= 1) {
        for (var j = 0; j < list.length; j++) {
            console.log(list[j] + "U are invited");
        }
        break;
    }
    else {
        console.log(list.pop() + "Soory Ur Not Invited");
        // list.length -1;
    }
}
console.log("           Two Person Left        ");
for (var i = 0; i < list.length; i++) {
    ;
    console.log(list[i] + " you are invited");
}
console.log("           No Person Left        ");
for (var i = list.length - 1; i >= 0; i--) {
    console.log(list.pop() + " you are not invited");
}
console.log(list.length + "These person left in Array");
