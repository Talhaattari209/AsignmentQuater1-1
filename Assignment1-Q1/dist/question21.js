var Bike = /** @class */ (function () {
    function Bike(upcominModel, upcominMake, upcominPrice) {
        this.model = "2019";
        this.make = "Honda";
        this.price = 100000;
        this.model = upcominModel;
        this.make = upcominMake;
        this.price = upcominPrice;
    }
    return Bike;
}());
var bike1 = new Bike("2023", "kawasaki", 300);
// bike1.setModel("2022");
// bike1.setPrice(500000);
// bike1.toString();
console.log(bike1);
