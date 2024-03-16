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

