function printerError(s) {
    return s.split("").filter((i) => i.charCodeAt(0) >= 110).length + "/" + s.length;
}