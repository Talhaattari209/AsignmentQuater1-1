// test No.1
// var nam = "talha"
// var namee = "shahid"

// if(nam == namee){
//    console.log("equal");
// }else{
//     console.log("Not Equal");
// }

//                   Test # 2 of Detecting Lower case

//var low = "alI"
// console.log(low.toLowerCase())

// for(var i=0; i< low.length ; i++){
//     if(low.charAt(i)=== low.charAt(i).toLowerCase()){
//         console.log("lower case");
//     }else{
//         console.log("upper Case")
//     }
// }

//                           Test # 3 Numerical test
// var num = 3;
// var numl = 4;
// var numb = 3;
// if( num == numb){
//    console.log("Equal")
// }
// if( num <= numl){
//     console.log("Equal")
// }
// if(num === numb){
//     console.log("equal");
// }

//                 Test# 4 Operator OR / AND
// var num = 3;
// var numl = 4;
// var numb = 3;

// if(num === numb && num <= numl ){
//     console.log("Good")
// } 

//              test # 5 Array Test
var arra= ["sajid","ali","kamaran","siam"]
var find = "al"
// for(var i=0; i< arra.length ; i++){
//     if(arra[i] == find){
//         console.log("Found");
//     }else if(arra[i] != find){

//     }
// }
//console.log("Not Found")
var i=0;
while (i < arra.length) {
    if(arra[i] == find){
        console.log("Found");
        break;
    }
    else if(arra[i] != find){
        if( i+1 < arra.length){
            i++;
        }else{
            console.log("Not Found")
            break;
        }
    }
}