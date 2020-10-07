function findOdd(A) {
    const map = new Map();

    A.forEach((i) => {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    });

    for (let key of map.keys()) {
        if (map.get(key) % 2 !== 0) {
            return key;
        }
    }

    return 0;
}
