function isHappyNumber(num) {
    const seen = new Set();
    
    while (num !== 1) {
        let sumOfSquares = 0;
        while (num > 0) {
            const digit = num % 10;
            sumOfSquares += digit * digit;
            num = Math.floor(num / 10);
        }
        
        if (seen.has(sumOfSquares)) {
            return false;
        }
        
        seen.add(sumOfSquares);
        num = sumOfSquares;
    }
    
    return true;
}

console.log(isHappyNumber(19));
