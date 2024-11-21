function range(a, b) {
    if (a > b) return [];
    const wynik = [];
    for (let i = a; i <= b; i++) {
        wynik.push(i);
    }
    return wynik;
}

console.log(range(1, 4));
console.log(range(5, 8)); 
console.log(range(4, 2));
