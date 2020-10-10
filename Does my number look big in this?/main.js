function narcissistic(value) {
    let sum = 0;
    value.toString().split("").map(i => i ** value.toString().length).forEach(i => sum += i);
    return sum === value;
}
