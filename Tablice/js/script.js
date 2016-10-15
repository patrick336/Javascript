var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];


var allNames = womensNames.concat(mensNames);
console.log(allNames);

var newName = 'Marian';

if  (allNames.indexOf(newName)  === -1 ) 
//znajduje pierwszy napotkany element tablicy pasujący do wzorca, reszta zostaje zignorowana. 
//Funkcja zwraca -1,gdy żaden element nie dopasował się do wzorca.
    allNames.push(newName);

console.log(allNames);

