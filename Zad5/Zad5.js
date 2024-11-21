function fibonacci(n) {
    if (n <= 0) return 0;  
    if (n === 1) return 1; 
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

console.log(fibonacci(3));
console.log(fibonacci(9));
console.log(fibonacci(60));
console.log(fibonacci(80));
