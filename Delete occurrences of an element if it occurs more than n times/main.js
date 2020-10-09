function deleteNth(arr, n) {
    let map = new Map();
    let newArr = [];

    for (let i of arr) {
        map.set(i, map.has(i) ? map.get(i) + 1 : 1);

        if (map.get(i) <= n) {
            newArr.push(i);
        }
    }

    return newArr;
}