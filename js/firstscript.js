console.info("page loaded");

var employed = true;
var age = 29;
var firstname = 'Cismas';
var lastname = 'Adrian';

console.info("Numele : " + firstname + "" + lastname);
console.info("Varsta : " + age);
console.info("Angajat : " + employed);


function addApples(firstnumber, secondnumber) {
    var count = firstnumber + secondnumber;

    if (count < 3) {
        return count;
    }

    return count - 1;
}

var firstChildApples = 3;

var apples = addApples(firstChildApples, 5);
console.info(apples);