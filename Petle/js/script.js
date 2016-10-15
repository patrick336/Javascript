console.log("Zbudujmy sobie schodki"+'\n\n');
rysujschody(15);

function rysujschody(rows) {
    for (var n = 1; n <= rows; n++) {
        var star = "";
        for (var j = 0; j < 2 * n - 1; j++) {
            star += '*';
        }
        console.log(star);
    }
}
console.log('Zbudujmy choineczkę'+'\n\n\n\n');
rysujchoinke(15);

function rysujchoinke(rows) {
    for (var n = 1; n <= rows; n++) {
        var star = "";
        var space = "";
        for (var s = rows - n; s > 0; s--) 
        {
            space += " ";
        }
        for (var j = 0; j < 2 * n - 1; j++) 
        {
            star += '*';
        }
        star = space + star;
        console.log(star);
    }
}
//lepsza wersja - bez dodatkowej zmiennej.
function drawTree(rows) {
    for (var i = 1; i <= rows; i++) {
        var star = "";

        for (var j = rows - i; j > 0; j--) {
            star += ' ';
        }

        for (var k = 0; k < (2 * i - 1); k++) {                                  
            star += '*';
        }

        console.log(star);
    }
}