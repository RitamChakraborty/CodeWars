var isSquare = function(n){
    if (n < 0) {
        return false;
    }

    const sqrt = Math.sqrt(n);

    return Number(sqrt) === sqrt && sqrt % 1 === 0;
}