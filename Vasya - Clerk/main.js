function tickets(peopleInLine) {
    const map = {
        25: 0,
        50: 0
    };

    for (let i of peopleInLine) {
        if (i !== 100) {
            ++map[i];
        }

        let rem = i - 25;

        if (rem === 75) {
            if (map[50] >= 1 && map[25] >= 1) {
                --map[50];
                --map[25];
            } else if (map[25] >= 3) {
                map[25] -= 3;
            } else {
                return "NO";
            }
        } else if (rem === 50) {
            if (map[50] >= 1) {
                --map[50];
            } else if (map[25] >= 2) {
                map[25] -= 2;
            } else {
                return "NO";
            }
        } else if (rem === 25) {
            if (map[25] >= 1) {
                --map[25];
            } else {
                return "NO";
            }
        }
    }

    return "YES";
}