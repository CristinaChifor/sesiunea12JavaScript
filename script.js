let greetings = "Hello";
console.log(greetings);

// Structurile condiționale sunt utilizate pentru a executa un bloc de cod în funcție de evaluarea unei expresii sau a unei condiții. Rezultatul evaluării condiției va avea întotdeauna tipul de date boolean (true sau false).

//Principalele structuri condiționale în JavaScript sunt:
//if
//if…else
//operatorul ternar
//if…else if…else
//switch

// Conditionals

//if: Este cea  mai simpla structura condițională. Blocul de cod asociat cu ‘if’ este executat doar dacă expresia/condiția este adevărată.

let isChordone = false;
let hasEaten = false;

if (isChordone && hasEaten) {
    console.log(`te poti uita la desene`);
};

if (!isChordone || !hasEaten) {

    if(!isChordone){
        console.log(`Inca nu te poti uita la desene`);
    }
    if(!hasEaten){
        console.log(`Inca nu ai terminat de mancat, te poti uita la desene cand farfuria e goala`);
    }
};

// if ...else  Permite să se execute un bloc de cod dacă o condiție este adevărată și alt bloc de cod dacă aceeași condiție este falsă.

if (isChordone && hasEaten) {
    console.log(`te poti uita la desene`);
} else {
    
    if(!isChordone){
        console.log(`Inca nu te poti uita la desene`);
    }
    if(!hasEaten){
        console.log(`Inca nu ai terminat de mancat, te poti uita la desene cand farfuria e goala`);
    }

};

// Operatorul ternar (sau operatorul condițional) este o formă compactă de a scrie o instrucțiune if-else într-o singură linie. Acesta este adesea folosit pentru a atribui o valoare variabilei în funcție de o anumită condiție
// atribuie valori in functie de o conditie

//Sintaxa: condiție ? valoareDacaAdevărat : valoareDacaFals;


// if...else ...if..else: Permite gestionarea mai multor condiții într-o succesiune. Se testează fiecare condiție în ordine și se execută primul bloc de cod asociat cu prima condiție adevărată sau blocul asociat cu else dacă nici o condiție nu e adevărată.

//let nmber = 0;
//if(number > 0) {
    //console.log(`numarul ales este pozitiv`);
//} else if{
   // console.log(`numarul ales este negativ`);
//} else {
    //console.log(`numarul ales este 0`);
//}

// switch: Este utilizat atunci când trebuie să se compare o valoare cu mai multe posibilități.

const dayOfTheWeek = 2;

switch (dayOfTheWeek) {
    case 1:
    console.log(`ziua este Luni`);
    break;
    default:
        console.log(`nu stiu ce zi a saptamanii este`);
        break;
    case 2:
        console.log(`ziua este Marti`);
    break;
    default:
        console.log(`nu stiu ce zi a saptamanii este`);
        break;
};

// Buclele sau instrucțiunile repetitive sunt structuri de control care permit executarea repetitivă a unui bloc de cod. Acestea sunt folosite pentru a automatiza sarcini repetitive sau pentru a parcurge iterativ valori din colecții de date (array, object, etc).
//Principalele bucle folosite in JavaScript sunt:
//while;
//do…while;
//for;
//for…of…;
//for…in…

// while Este o structura de control repetitiva ce permite executarea unui bloc de cod atat timp cat o anumită condiție sau expresie este adevărată.


const numbers = [2, 99, 34, 25, 1, 2, -23];

let smallestNumber = Number.MAX_SAFE_INTEGER;

let currentIndex = 0;

while (currentIndex < numbers.length) {
    if (numbers[currentIndex] < smallestNumber) {
        smallestNumber = numbers[currentIndex];
    }

    currentIndex++;
}

console.log(`cel mai mic numar din lista este`, smallestNumber);

// do ... while Este o structura de control repetitiva ce permite executarea unui bloc de cod atat timp cat o anumită condiție sau expresie este adevărată. Blocul de cod se executa cel puțin odata indiferent de valoarea condiției.

lot n = 0;
let num = 0
do {
    num++
    console.log(num);   
} while (num < n); 

// for 

let times = 10;

for (let i = 0; i < 10; i++) {
    console.log(`Hello ${i}!`);
}

let smallestNr = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] < smallestNr) {
        smallestNr = numbers[i]
    }    
}

console.log(`cel mai mic numar din lista este`, smallestNr);





