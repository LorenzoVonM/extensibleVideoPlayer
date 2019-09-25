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
function fullName(firstName: string,  lastName: string = 'sasda'): string {
    return `${firstName} ${lastName}`;
}

const leo = fullName('leo');

console.log(leo);