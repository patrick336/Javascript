var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";

var animal = "Zielone słonie";
animal = animal.toUpperCase();

text = text.replace('Papugi',animal);

console.log(text);

var textLength = text.length;
var halfText = textLength/2 - 1;

console.log("Połowa napisu zaczyna się od indeksu nr: " + halfText );

console.log("Znak rozpoczynający drugą połowę ciągu tekstowego to: " + text.charAt(halfText));

//console.log("Znak rozpoczynający drugą połowę ciągu tekstowego to: " + text[44]);

var n = textLength - halfText;
 
console.log(text.substr(halfText,n));
console.log(text.substring(halfText,textLength));
