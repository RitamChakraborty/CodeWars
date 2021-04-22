function topThreeWords(text) {
    const map = new Map();
    const re = /[\n\s!@#$%&*"\/]+/
    const matcher = /(?='*)[a-zA-Z0-9]/
    const arr = text.split(re).filter(i => i.length > 0 && matcher.test(i));

    for (let i = 0; i < arr.length; ++i) {
        const word = arr[i].toLowerCase();

        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    }

    const arr1 = Array.from(map.keys());
    arr1.sort((a, b) => map.get(b) - map.get(a));

    return arr1.slice(0, 3);
}