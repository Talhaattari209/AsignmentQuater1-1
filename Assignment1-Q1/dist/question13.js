var transport = ["bike", "suzuki"];
var arr = ["I love Honda",
    "sell My Meserdees",
    "I Bought 125 to die",
];
// for(var i=0;i <arr.length; i++){
//     console.log((i+1)+". "+arr[i]);
// }
for (var i = 0; i < (arr.length + transport.length); i++) {
    if (i >= 3) {
        console.log((i + 1) + "I own " + transport[i - 3]);
    }
    else {
        console.log((i + 1) + ". " + arr[i]);
    }
}
