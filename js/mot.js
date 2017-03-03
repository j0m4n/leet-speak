var mot = prompt("Veuillez sasir un mot: ");

function isVoyelle(lettre) {
    var resultat;
    if ((lettre === "a") || (lettre === "e") || (lettre === "i") || 
        (lettre === "o") || (lettre === "u") || (lettre === "y"))
         resultat = true;
    else resultat = false;
    return resultat;
}

function compterNbVoyelles(expression) {
    var nbVoyelles = 0;
    for (var i = 0; i < expression.length; i++) {
        if (isVoyelle(expression[i]) === true) 
            nbVoyelles++;  
    }
    var message = "Il contient " + nbVoyelles + " voyelles et " + Number(expression.length - nbVoyelles) + " consonnes";
    return message;
}

function inverser(expression){
    var motInv = "";
    // Solution par incrément positif
    //for (var i = 0; i < expression.length; i++){
    //     motInv = expression[i] + motInv;
    //}
    
    //Solution par incrément négatif
    for (var i =  expression.length - 1; i >= 0; i--){
         motInv = motInv + expression[i] ;
    }
    return motInv;
}

function palindrome(expression){
    var resultat;
    if(expression.toLowerCase() === inverser(expression).toLowerCase()) 
        resultat = "c'est un palindrome";
    else 
        resultat = "ce n'est pas un palindrome";
    return resultat;
}

function trouverLettreLeet(lettre){
    var resultat = "";
    switch(lettre.toLowerCase()){
        case "a":
        resultat = "4";
        break;
        case "b":
        resultat = "8";
        break;
        case "e":
        resultat = "3";
        break;
        case "l":
        resultat = "1";
        break;
        case "o":
        resultat = "0";
        break;
        case "s":
        resultat = "5";
        break;
        default:
        resultat = lettre.toLowerCase();
        break;
    }
    return resultat;
}

function convertirEnLeetSpeak(expression){
    var resultat ="";
    for(i = 0; i < expression.length; i++){
        resultat = resultat + trouverLettreLeet(expression[i]);
    }
    return resultat;
}

console.log("Le mot " + mot + " contient " + mot.length + " caractères (s)");
console.log("Il s'ecrit en minuscule " + mot.toLowerCase());
console.log("Il s'ecrit en majuscule " + mot.toUpperCase());
console.log(compterNbVoyelles(mot));
console.log(inverser(mot));
console.log(palindrome(mot));
console.log(convertirEnLeetSpeak(mot));
