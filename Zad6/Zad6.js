function palindrom(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr; 
}

console.log(palindrom("kajak"));
console.log(palindrom("Hello")); 
console.log(palindrom("mada adam"));  
