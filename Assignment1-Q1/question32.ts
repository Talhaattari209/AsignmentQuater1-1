var curr_name = ["ali","qasim","sikandar"];
var new_name = ["awais","khalid","sikandar"];

for(var i=0; i< curr_name.length; i++){
    for(var j=0; j< new_name.length; j++){
        if( curr_name[i] == new_name[j]){
            console.log(curr_name[i].valueOf())
        }
    }
}