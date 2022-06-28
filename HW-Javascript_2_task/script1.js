// Tasks 1,1*
function expoOneToTen() {
    for (let i = 0; i < 11; i++) {
        let j = Math.pow(2, i); // or instead of Math.pow(2, i) use 2**i
        console.log(j);
    }
}
expoOneToTen();

// Tasks 2
function printSmiles1() {
    let j = [":)"];
    console.log(String(j));
    for (let i = 1; i < 5; i++) {
        j = j.concat(j[0]);
        console.log(j.join('')); //вывод в консоль со строковым представлением массива
    }
}
printSmiles1();

// Tasks 2*
function printSmiles2(yourString, numberOfRows) {
    console.log(yourString.join());
    for (let i = 1; i < numberOfRows; i++) {
        yourString = yourString.concat(yourString[0]);
        console.log(yourString.join(''));
    }
}
printSmiles2([":)"], 5);

