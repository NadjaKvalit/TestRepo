/*- Skapa en fil med en funktion i javascript
- Funktionen accepterar argument som är heltal
- Om heltalet är under 0 så returnerar den alltid 0
- Om heltalet är 1-10 så returnerar den heltaled
- Om heltalet är över 10 så returneras talet gånger sig själv*/

const result = (heltalTest) => {
    if(heltalTest<0){return 0}
    else if (heltalTest>10)
    {return heltalTest*heltalTest}
    return heltalTest;
}

function funktion(a){
    if(a<0){return 0}
    else{if((a>0)&&(a<11))
    {return a}
    else{return a*a}}
};
heltal = -1;
heltalTest = -1;
console.log(`function for ${heltal} is ${funktion(heltal)}`);
console.log(`result for ${heltalTest} is ${result(heltalTest)}`);

heltal = 10;
heltalTest = 10;
console.log(`function for ${heltal} is ${funktion(heltal)}`);
console.log(`result for ${heltalTest} is ${result(heltalTest)}`);

heltal = 11;
heltalTest = 11;
console.log(`function for ${heltal} is ${funktion(heltal)}`);
console.log(`result for ${heltalTest} is ${result(heltalTest)}`);