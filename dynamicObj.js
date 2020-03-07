// example of factory function 

 function createCar(params) {
    return {
        noOfWheels:4,
        drive(){
            console.log('begin to drive');
        }
    }

}

const myCar = createCar();
const churchCar = createCar();

// example of constructor function 

function Bus(noOfWheels) {
    this.noOfWheels = noOfWheels;
    this.drive = function () {
        console.log('driving a bus of ', this.noOfWheels);
    }

}

//dynamic nature of objects
// you can add additional properties to an existing object
myCar.color = 'White';
myCar.manufacturer = 'Toyota';
console.log('Church Car',churchCar);
console.log('My car', myCar);