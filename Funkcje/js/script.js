function getTriangle (a,h) {
    
    return a > 0 && h > 0 ? a*h/2 : 'Nieprawidłowe dane';     
//    if (a > 0 && h > 0) return a*h/2;
//    else return 'Nieprawidłowe dane';
    
// var result = a > 0 && h > 0 ? a*h/2 : 'Nieprawidłowe dane';     
//console.log(result);    
}
    

var Object = { number:20 }; 

//test funkcji 
console.log(getTriangle(10,-6));
console.log(getTriangle(10,6));
console.log(getTriangle(10,'6'));
console.log(getTriangle(10,'-6'));
console.log(getTriangle(10,undefined));
console.log(getTriangle(10,null));
console.log(getTriangle(10,Object.number));
console.log(getTriangle(10,Object['number']));
console.log(getTriangle(10,.6));
console.log(getTriangle(10,!NaN)); //błąd
console.log(getTriangle(10,NaN));
console.log(getTriangle(10,true)); // błąd 
console.log(getTriangle(10,false));//traktuje false jako zero
console.log(getTriangle(10,5+'a'));

console.log(getTriangle(0.3,3)); //niedokładność wyniku
console.log(getTriangle(0.2,3)); 


console.log('NaN: '+ NaN); 
console.log('!NaN: '+ !NaN); // wniosek JS potraktował wartość true = 1 = !NaN  - błąd

//getTriangle (10,6);