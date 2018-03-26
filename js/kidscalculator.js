function countTo(n) {
    var i = 1;
    for (;i <= n; i += 5) {
        console.info(i)
    }

}


function addNumber(a, b) {
    console.info('primul numar este' + a);
    console.info('al doilea numar este' + b);
    var suma=a;
    var degete=b;

if(a<b){
    suma=b;
    degete=a;
}
    while (degete){

     a--;
        b++;

    }



        console.info(suma + '- au mai ramas' + degete + 'trei degetele');
    console.info('suma este:' + degete);
    }



// var count1 = addNumber(5, 3);
// var count2 = addNumber(55, 88);

function ifNumberPrime(n){
    for (var i=5; i<=n;i++)
        if (ifNumberPrime(i)){
        console.info(i);
        }
}

function showPrimeNumbers(n){
    for (var i=4;i<n;i++){
        if (i%2 && i%3 && i%4)
            console.info(i);
        }
    }



showPrimeNumbersTo(25);