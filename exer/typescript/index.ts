console.log('hello typescript');

function add(a: number, b: number){
    return a + b;
}

const sum = add(6, 4);

function createAdder(a: number): (number) => number{
    return function(b: number) {
        return b + a;
    }
}

const addFour = createAdder(4)
const fourPlusSix = (6);

//function fullName(firstName: string,  lastName?: string): string FOR OPTIONAL VALUES
function fullName(firstName?: string,  lastName: string = 'sasda'): string {
    return `${firstName} ${lastName}`;
}

const leo = fullName('leo');

console.log(leo);

// ************************* interfaz, declarar la forma que debe tener un objeto *************************

interface Rectangulo {
    ancho: number,
    alto: number,
    color?: Color
}

enum Color {
    Rojo = 'rojo',
    Verde = 'verde',
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 5,
    //color: Color.Rojo,
}
function area (r: Rectangulo) {
    return r.alto * r.ancho;
}

const areaRect = area(rect)
console.log(rect)

rect.toString = function () {
    return this.color ? `un rectangulo de color ${this.color}` : `un rectangulo sin color`;
}
console.log(rect.toString());

