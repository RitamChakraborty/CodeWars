function sortWord(word) {
    return word.split("").sort().join("");
}

function anagrams(word, words) {
    let sortedWord = sortWord(word);
    return words.filter(i => sortWord(i) === sortedWord);
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));