var magician = ["ali","qasim","danial"];
var newMagician = magician;

function show_Magician(mag){

    for(var i=0; i< mag.length; i++){
        console.log(mag[i].valueOf())
    }
}
function update_Magician(mag){

    for(var i=0; i< mag.length; i++){
        console.log( "Great " + mag[i].valueOf())
    }
}

update_Magician(newMagician)
show_Magician(magician);