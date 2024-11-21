function range(a, b) {
    const wynik = [];
    if (a <= b) {
        for (let i = a; i <= b; i++) {
            wynik.push(i);
        }
    } else {
        for (let i = a; i >= b; i--) {
            wynik.push(i);
        }
    }
    return wynik;
}
console.log(range(1, 4));
console.log(range(5, 8));
console.log(range(4, 2));
