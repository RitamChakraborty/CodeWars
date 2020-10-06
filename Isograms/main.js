function isIsogram(str){
    str = str.toLowerCase();
    let set = new Set();

    for (let i = 0; i < str.length; ++i) {
        if (set.has(str[i])) {
            return false;
        } else {
            set.add(str[i]);
        }
    }

    return true;
}