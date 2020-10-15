function pigIt(str) {
    return str.split(" ").map((i) => i.match(/^[a-zA-Z]+$/) ? i.slice(1, i.length) + i.slice(0, 1) + "ay" : i).join(" ");
}