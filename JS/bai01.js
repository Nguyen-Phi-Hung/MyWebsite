function daoNguocChuoi(chuoi) {
    return chuoi.split('').reverse().join('');
}

// Example usage
console.log(daoNguocChuoi("hello")); // Output: olleh