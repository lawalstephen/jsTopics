


function signUp(name) {
    
    return {
        name,
        morning(){
            console.log('Good morning', this.name);
        },
        afternoon(){
            console.log('Good afternoon', this.name);
        },
        evening(){
            console.log('Good evening', this.name);
        },
    }

    

}

let Salute = signUp('Paul');
let Salute2 = signUp('Peter')
let Salute3 = signUp('Buhari')
Salute.morning();
Salute2.afternoon();
Salute3.evening();


