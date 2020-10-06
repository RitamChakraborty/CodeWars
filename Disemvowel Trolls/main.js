// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
    return str.split("").filter((i) => {
        return /[^aeiou]/i.exec(i);
    }).join("");
}