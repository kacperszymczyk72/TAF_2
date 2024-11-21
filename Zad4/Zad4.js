function sum(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}

console.log(sum([3, 7, 5]));
console.log(sum([10, 20, 30]));
console.log(sum([1, 1, 1, 1]));
console.log(sum([100]));
