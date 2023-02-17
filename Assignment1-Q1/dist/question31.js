var users = ["ali", "awais", "waleed", "qasim"];
console.log(users.length);
for (var i = users.length; i >= 0; i--) {
    if (users.length == 0) {
        console.log("empty array");
        console.log("We need to find some users");
    }
    else {
        users.pop();
        console.log("Remove");
    }
}
