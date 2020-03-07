// a program to draw objects e.g circle ,rectangle and square
//OOP object oriented programming

let radius = 2; 
let length = 3;
let width = 6;

let circle = {
    radius : 2,
    location : {
        x: 3,
        y: 1
    },
    isVisble: true,
    shapeName:'Circle',
    draw: function (r) {
        console.log('I will draw a circle of radius ', this.radius);
    }
}

//circle.radius = 5
circle.draw(10)
