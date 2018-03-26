function countTo(n) {
    var i = 1;
    for (;i <= n; i += 5) {
        console.info(i)
    }

}

countTo(7);

function addNumber(a, b) {
    console.info('primul numar este' + a);
    console.info('al doilea numar este' + b);
    for (; b > 0;) {

        b--;
        a++;

        console.info(a + '- au mai ramas' + b + 'trei degetele')
    }
    console.info('suma este:' + a)
}

var count = addNumber(5, 3);
console.log(count);