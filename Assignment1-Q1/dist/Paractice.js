//  export{};
// classes And Objects / Cohesive
var youtube = /** @class */ (function () {
    function youtube(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastNumber = lastName;
        this.age = age;
        console.log(age);
    }
    youtube.prototype.getFirstName = function () {
        console.log("first name is " + this.firstName);
    };
    return youtube;
}());
var ytObj = new youtube("thapa", "technical", 34);
ytObj.firstName = "Thapatechnical";
ytObj.getFirstName();
// InterFaces in TypeScript
// interface NamePro{
//     firstName: string,
//     lastName: string
// }
// let namets = (namePro:NamePro)=>{       // inline Anotation
//     console.log(namePro.firstName);
// }
// namets("vinod" , "Thapa");
// namets({
//     firstName: "thapa",
//     lastName: "technical"
// })
// Arrow Function
// var thapa = function(sub){
//     console.log(sub)
// }
// var thapaa = (sub) => {
//     console.log(sub)
// }
// let thapaaa = (sub) => console.log(sub);
// let thapatechnical;
// thapatechnical = "subscribe";
// (<string>thapatechnical).length;  // first Way
// (thapatechnical as string).length;
// let arrNum: number[];
// arrNum = [1,2];
// console.log(arrNum);
// let arrStr: string[];
// arrStr = ["Hello","World"];
// console.log(arrStr);
// let anyType: any;
// anyType = "Kuch bhi";
// console.log(anyType);
// let myBool: boolean;
// myBool = true;
// console.log(myBool);
// let myStr: string;
// myStr = "talha"
// var num = 1;  // Nearest Function Scope
// let number = 2; // Nearest Block Only
// function sub(){
//     for(var i= 0; i<5 ; i++){
//         console.log(i);
//     }
//     console.log("Finely Out side the block")
// }
// sub();
