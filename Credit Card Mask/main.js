function maskify(cc) {
    var masked = "";

    for (let i = 0; i < cc.length; ++i) {
        console.log(cc.length - i);
        if (cc.length - i > 4) {
            masked += "#";
        } else {
            masked += cc[i];
        }
    }

    return masked;
}