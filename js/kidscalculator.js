function countTo(n) {
    var i = 1;
    for (;i <= n; i += 5) {
        console.info(i)
    }

}


function addNumber(a, b) {
    console.info('primul numar este' + a);
    console.info('al doilea numar este' + b);
    // var suma=a;
    // var degete=b;

if(a<b){
    suma=b;
    degete=a;
}
    while (degete){

        // a--;
        // b++;

    }



        console.info(suma + '- au mai ramas' + degete + 'trei degetele');
    }
    console.info('suma este:' + suma);


var count = addNumber(5, 3);
console.log(count);