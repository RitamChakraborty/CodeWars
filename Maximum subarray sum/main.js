var maxSequence = function (arr) {
    let sum = 0;
    let sumArr = [];

    for (let i of arr) {
        sum += i;
        sumArr.push(sum);
    }

    let max = 0;

    for (let i = 0; i < arr.length; ++i) {
        for (let j = i; j < arr.length; ++j) {
            sum = i === 0 ? sumArr[j] : sumArr[j] - sumArr[i - 1];
            max = Math.max(max, sum);
        }
    }

    return max;
}