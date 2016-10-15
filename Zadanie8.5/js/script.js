var a = -100, b = -10000;
var value = (a * a) + (2 * a * b) - (b * b);

    if (value > 0) 
        console.log('Liczba jest dodatnia.' + value);

    else if (value < 0)
        console.log('Liczba jest ujemna.' + value);
    
    else if (value == 0)
        console.log('Liczba jest równa zero.' + value);

    else 
        console.log('Somethning has gone wrong!');
