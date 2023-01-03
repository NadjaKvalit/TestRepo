/*- Skapa en fil med en funktion i javascript
- Funktionen accepterar argument som är heltal
- Om heltalet är under 0 så returnerar den alltid 0
- Om heltalet är 1-10 så returnerar den heltaled
- Om heltalet är över 10 så returneras talet gånger sig själv*/

function funktion(a){
    if(a<0){return 0}
    else{if((a>0)&&(a<11))
    {return a}
    else{return a*a}}
};
heltal = -1;
console.log(`function for ${heltal} is ${funktion(heltal)}`);

heltal = 10;
console.log(`function for ${heltal} is ${funktion(heltal)}`);

heltal = 11;
console.log(`function for ${heltal} is ${funktion(heltal)}`);