// Tasks 1,1*
function expoOneToTen() {
    for (let i = 0; i < 11; i++) {
        let j = Math.pow(2, i); // or instead of Math.pow(2, i) use 2**i
        console.log(j);
    }
}
expoOneToTen();

// Tasks 2
function printSmiles() {
    let j = ":)";
    for (let i = 1; i < 6; i++) {
        j = j + j;
        console.log(j);
    }
}
printSmiles();
//yourString, numberOfRows
