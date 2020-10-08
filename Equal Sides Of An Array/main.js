function findEvenIndex(arr) {
    let sum = 0;
    let sumArr = [];

    arr.forEach(i => sumArr.push(sum += i));

    for (let i = 0; i < sumArr.length; ++i) {
        let left = i > 0 ? sumArr[i - 1] : 0;
        let right = sumArr[sumArr.length - 1] - sumArr[i];

        if (left === right) {
            return i;
        }
    }

    return -1;
}
