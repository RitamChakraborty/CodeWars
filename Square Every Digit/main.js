function squareDigits(num){
    return Number(num.toString().split("").map(i => Number(i) ** 2).join(""));
}