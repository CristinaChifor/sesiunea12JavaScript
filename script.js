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
}

if (!isChordone || !hasEaten) {

    if(!isChordone){
        console.log(`Inca nu te poti uita la desene`);
    }
    if(!hasEaten){
        console.log(`Inca nu ai terminat de mancat, te poti uita la desene cand farfuria e goala`);
    }
}
