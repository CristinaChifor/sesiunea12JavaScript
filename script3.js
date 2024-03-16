console.log(`Hello`);

// for of Este o structura de control repetitiva ce permite executarea unui bloc de cod pentru fiecare valoare dintr-o colecție. 

const numb2 = [22, 11, 91, 7, 33];

let min = numb2[0];

for (const num of numb2) {
    if (num < min) {
        min = num;
    }
}

console.log(`Cel mai mic numar din array numb2 este: `, min);

// for ... in Este o structura de control repetitiva  concepută special pentru a parcurge proprietățile unui obiect. Executa un bloc de cod pentru fiecare proprietate.

const myCar = {
    brand: "Volvo",
    model: "XC90",
    manufactureYear: 2012
};

for (const property in myCar) {
    console.log(`${property} are valoarea ${myCar[property]}`);
}

// break Instrucțiunea break este utilizată pentru a întrerupe execuția unei bucle sau a unei instrucțiuni de switch atunci când o anumită condiție este îndeplinită.                                                        

const numb3 = [1, 2, 3, 4, 5, 6];
const numberToFind2 = 3;
let isNumbInArray = false;

for (const num of numb3) {
    console.log(num);
    if(numberToFind2 === num);
    isNumbInArray = true;
    break;
}

console.log(`${numberToFind2} este in array: ${isNumbInArray}`);

// continue Instrucțiunea continue este folosită pentru a sări la următoarea iterație a unei bucle, ignorând restul codului din blocul de buclă pentru iterația curentă.                                                        

for (const num of numb3) {
    if (num % 2 > 0) {
        continue;
    }
    console.log(`numarul ${num} este par iar dublul lui este ${num * 2}`);
}
