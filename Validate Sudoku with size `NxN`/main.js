var Sudoku = function (data) {
    const arr = function () {
        const s = new Set();
        const max = Math.max(...data.map(i => i.length));

        for (let i = 1; i <= max; ++i) {
            s.add(i);
        }

        return s;
    }();

    function checkHorizontal() {
        for (let i = 0; i < data.length; ++i) {
            const set = new Set();

            for (let j = 0; j < data[i].length; ++j) {
                if (arr.has(data[i][j])) {
                    set.add(data[i][j]);
                } else {
                    return false;
                }
            }

            if (set.size !== arr.size) {
                return false;
            }
        }

        return true;
    }

    function checkVertical() {
        for (let i = 0; i < data.length; ++i) {
            const set = new Set();

            for (let j = 0; j < data[i].length; ++j) {
                if (arr.has(data[j][i])) {
                    set.add(data[j][i]);
                } else {
                    return false;
                }
            }

            if (set.size !== arr.size) {
                return false;
            }
        }

        return true;
    }

    function checkIndividual() {
        const b = Math.sqrt(arr.size);

        for (let m = 0; m < arr.size; m += b) {
            for (let n = 0; n < arr.size; n += b) {
                const set = new Set();

                for (let i = m; i < m + b; ++i) {
                    for (let j = n; j < n + b; ++j) {
                        if (arr.has(data[i][j])) {
                            set.add(data[i][j]);
                        } else {
                            return false;
                        }
                    }
                }

                if (set.size !== arr.size) {
                    return false;
                }
            }
        }

        return true;
    }

    return {
        isValid: function () {
            return checkHorizontal() && checkVertical() && checkIndividual();
        }
    };
}

var goodSudoku1 = new Sudoku([
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],

    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],

    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4]
]);

var goodSudoku2 = new Sudoku([
    [1, 4, 2, 3],
    [3, 2, 4, 1],

    [4, 1, 3, 2],
    [2, 3, 1, 4]
]);

var badSudoku1 = new Sudoku([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],

    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],

    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
]);

var badSudoku2 = new Sudoku([
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1]
]);

console.log(goodSudoku1.isValid());
console.log(goodSudoku2.isValid());
console.log(badSudoku1.isValid());
console.log(badSudoku2.isValid());