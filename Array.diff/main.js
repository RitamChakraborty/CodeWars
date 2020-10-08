function arrayDiff(a, b) {
    const arr1 = new Set(b);

    return a.filter(i => !arr1.has(i));
}