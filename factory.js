//Factory Function

// let circle = {
//     radius: 5,
//     draw: function (param) {
//         console.log('execute draw method using radius ', param);
//     }
// }




function  createCircle(radius) {
   return {
        radius,
        draw() {
            console.log('execute draw method using radius ', this.radius);
        },
        shrink(){
            console.log('I will shrink this circle')
        }
    }
}

let circle1 = createCircle(40);
//let circle2 = createCircle(7);
//circle2.draw();
console.log(circle1.draw());
