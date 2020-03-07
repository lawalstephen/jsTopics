//factory function on bodysprays

function createSpray() {
    return {
        nivea() {
            console.log("This is Nivea Bodyspray for men and women");
        },
        axemen(){
            console.log("Here is Axemen bodyspray for bold men");
        },
        sure(){
            console.log("Sure Sprays: For confidence all the way");
        },
        shineon(){
            console.log("ShineOn sprays ab re the best!");
        }
    }
}

let bodySprays = createSpray();
bodySprays.sure();