class Bike{
    constructor(upcominModel,upcominMake,upcominPrice){
         this.model = upcominModel;
         this.make = upcominMake;
         this.price = upcominPrice;
    }

    model = "2019";
    make = "Honda";
    price = 100000;

   
}

var bike1 = new Bike("2023","kawasaki",300);
// bike1.setModel("2022");
// bike1.setPrice(500000);
// bike1.toString();

console.log(bike1);

