console.log(`Hello`);
//Structurile condiționale sunt utilizate pentru a executa un bloc de cod în funcție de evaluarea unei expresii sau a unei condiții. Rezultatul evaluării condiției va avea întotdeauna tipul de date boolean (true sau false).
//Principalele structuri condiționale în JavaScript sunt:
//if
//if…else
//operatorul ternar
//if…else if…else
//switch

//if: Este cea  mai simpla structura condițională. Blocul de cod asociat cu ‘if’ este executat doar dacă expresia/condiția este adevărată.

let isChoreDone = false;
let hasEatean = false;

if (isChoreDone && hasEatean) {
    console.log(`te poti uita la desene animate`);
}

if (!isChoreDone || !hasEatean) {
    if (!isChoreDone) {
        console.log(`Inca mai ai de lucru! Nu te poti uita la desene animate`)
    }
 
    if (!hasEatean) {
        console.log(`inca nu ai terminat de mancat! Te poti uita la desene doar cand e farfuria goala`);
    }
     
}

// if-else: Permite să se execute un bloc de cod dacă o condiție este adevărată și alt bloc de cod dacă aceeași condiție este falsă.

if (isChoreDone && hasEatean) {
    console.log(`te poti uita la desene animate`);
} else {
    if (!isChoreDone) {
        console.log(`Inca mai ai de lucru! Nu te poti uita la desene animate`)
    }
 
    if (!hasEatean) {
        console.log(`inca nu ai terminat de mancat! Te poti uita la desene doar cand e farfuria goala`);
    }
}

let numberToCheck = 12;
if (numberToCheck % 2 === 0) {
    console.log(`numarul verificat este par`);
} else {
    console.log(`numarul verificat este impar`);
}

// Operatorul ternar (sau operatorul condițional) este o formă compactă de a scrie o instrucțiune if-else într-o singură linie. Acesta este adesea folosit pentru a atribui o valoare variabilei în funcție de o anumită condiție
// Sintaxa: condiție ? valoareDacaAdevărat : valoareDacaFals;

let age = 20;
let canVote = ( varsta => 18) ? "Poate vota" : "Nu poate vota";
console.log(canVote);

//if-else if-else: Permite gestionarea mai multor condiții într-o succesiune. Se testează fiecare condiție în ordine și se execută primul bloc de cod asociat cu prima condiție adevărată sau blocul asociat cu else dacă nici o condiție nu e adevărată.

let number = -13;

if (number > 0) {
    console.log(`numarul ales este pozitiv`);
} else if (number < 0) {
    console.log(`numarul ales este negativ`);
} else {
    console.log(`numarul ales este 0`);
}
// se executa doar blocul care indeplineste conditia de executie; ce este intre paranteze este true

// switch: Este utilizat atunci când trebuie să se compare o valoare cu mai multe posibilități.

const dayOfTheWeek = 2;

switch (dayOfTheWeek) {
    case 1:
        console.log(`Ziua este luni`);
        break;
    case 2:
        console.log(`Ziua este Marti`);
        break;
        default:
        console.log(`Nu stiu ce zi a saptamanii este aceasta`);
        break;
}

// Buclele sau instrucțiunile repetitive sunt structuri de control care permit executarea repetitivă a unui bloc de cod. Acestea sunt folosite pentru a automatiza sarcini repetitive sau pentru a parcurge iterativ valori din colecții de date (array, object, etc).
// Principalele bucle folosite in JavaScript sunt:
// while;
// do…while;
// for;
// for…of…;
// for…in…;

// while Este o structura de control repetitiva ce permite executarea unui bloc de cod atat timp cat o anumită condiție sau expresie este adevărată.

const numbers = [2, 99, 34, 25, 1, -23];

let smallestNumber = Number.MAX_SAFE_INTEGER;
let currentIndex = 0;

while (currentIndex < numbers.length) {
    if (numbers[currentIndex] < smallestNumber) {
        smallestNumber = numbers[currentIndex];
    }

    currentIndex++;
}

console.log(`cel mai mic numar din lista este: `, smallestNumber);

// do while
// Este o structura de control repetitiva ce permite executarea unui bloc de cod atat timp cat o anumită condiție sau expresie este adevărată. Blocul de cod se executa cel puțin odata indiferent de valoarea condiției.

let n = 10;
let num = 0;
do{
    num++
    console.log(num);
} while (num < n);

