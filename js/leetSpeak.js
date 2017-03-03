//Créer les éléments
var bodyElt = document.querySelector("body");
var formElt = document.createElement("form");

var p1Elt = document.createElement("p");
p1Elt.textContent ="Taper un mot: ";
var inputElt = document.createElement("input");
    inputElt.required = true;

var p2Elt = document.createElement("p");
p2Elt.textContent ="Résultat en leet speek: ";
var resultElt = document.createElement("input");
    resultElt.required = false; // champ libre qui servira à la conversion

//ajoute les éléments
bodyElt.appendChild(formElt);
formElt.appendChild(p1Elt);
p1Elt.appendChild(inputElt);
formElt.appendChild(p2Elt);
p2Elt.appendChild(resultElt);

//En cas de d'appui sur une touche
inputElt.addEventListener("keypress", function(e){
    //on recupere le contenu a convertir
    var aConvertir = String.fromCharCode(e.charCode);
    if(e.charCode !== 0) // si la valueur est différente d'un backspace
    {
        inputElt.value += aConvertir;
        resultElt.value += convertirEnLeetSpeak(aConvertir);
    }
    else // cas d'un retour arriere
    {
        var inputTemp = inputElt.value;
        inputElt.value = "";
        for(var i =0; i < inputTemp.length - 1; i++ ) 
            inputElt.value += inputTemp[i];   
        
        resultElt.value = convertirEnLeetSpeak(inputElt.value);
    }
    e.preventDefault();
});

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
