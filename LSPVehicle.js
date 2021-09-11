function Car(carInst) {
    carInst = carInst || {};
    carInst.speedOfCar = 0;
    carInst.moving = false;

    this.speedOfCar = function() {
        return carInst.speedOfCar;
    };
    this.ignite = function() {
        carInst.moving = true;
    };
    this.break = function() {
        carInst.moving = false;
    };
    this.acceleration = function() {
        carInst.speedOfCar++;
    };
    this.deceleration = function() {
        carInst.speedOfCar--;
    };
    this.condition = function() {
        if (!carInst.moving) {
            return "Car is in the rest state";
        }
        else if (carInst.moving && carInst.speedOfCar) {
            return "Car is running";
        }
        else if (carInst.moving) {
            return "Car ignition is on";
        }
    };
}


function FastCar(carInst) {
    carInst = carInst || {};

    var that = new Car(carInst);
    that.acceleration = function() {
        carInst.speedOfCar += 3;
    };
    return that;
}

var driverFunc = function(Car) {

    console.log(Car.condition());
    Car.ignite();
    console.log(Car.condition());
    Car.acceleration();
    console.log(Car.condition());
    console.log(Car.speedOfCar());
    Car.deceleration();
    console.log(Car.speedOfCar());
    if (Car.condition() != "Ignite") {
        throw "Oops your Car is still running!";
    }
    Car.break();
    console.log(Car.condition(FastCar));
};

driverFunc(FastCar());