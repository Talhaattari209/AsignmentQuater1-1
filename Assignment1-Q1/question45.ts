class cars{
    maker: string;
    model: string;
    color: string;

    constructor(person,modelNam,colr){
        this.maker = person;
        this.model = modelNam;
        this.color = colr;
    }
}

function getInfo(personName,modelName,colour){
    var newCar = new cars(personName,modelName,colour);
    console.log(newCar.maker);
    console.log(newCar.model);
    console.log(newCar.color);
}

getInfo("TALHA","Hondai","red");