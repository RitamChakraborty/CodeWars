function check(a1, a2) {
    if (Array.isArray(a1) && Array.isArray(a2)) {
        if (a1.length === a2.length) {
            if (a1.length > 0) {
                for (let i = 0; i < a1.length; ++i) {
                    if (!check(a1[i], a2[i])) {
                        return false;
                    }
                }
            } else {
                return true;
            }
        } else {
            return false;
        }
    } else if ((Array.isArray(a1) && !Array.isArray(a2)) || (!Array.isArray(a1) && Array.isArray(a2))) {
        return false;
    }

    return true;
}

Array.prototype.sameStructureAs = function (other) {
    return check(this, other);
};