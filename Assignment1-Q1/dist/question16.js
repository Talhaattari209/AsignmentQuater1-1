var list = ["waqas", "Rukhsana", "Rashid"];
for (var i = 0; i < list.length; i++) {
    console.log(list[i] + " you are invited");
}
console.log("\n");
console.log(list[1] + "Cannot make dinner\n");
list[1] = "Talha";
for (var i = 0; i < list.length; i++) {
    console.log(list[i] + " you are invited");
}
console.log("           I found Bigger Dinning Table   ");
// At Start
list.splice(0, 0, "ALi");
// At Middle
list.splice(Math.floor(list.length / 2), 0, "Haider");
// At end
list.splice((list.length + 1), 0, "Sami");
// append();
for (var i = 0; i < list.length; i++) {
    console.log(list[i] + " you are invited");
}
function append() {
    list.splice((list.length + 1), 0, "Sami");
}
