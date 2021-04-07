snail = function (arr) {
    if (arr[0].length === 0) {
        return [];
    }

    const result = [];
    const n = arr.length;

    let i = 0;
    let j = 0;
    let m = 0
    let o = n ** 2;

    function right(k) {
        while (m !== o && j !== (k - 1)) {
            result.push(arr[i][j]);
            ++j;
            ++m;
        }
    }

    function down(k) {
        while (m !== o && i !== k - 1) {
            result.push(arr[i][j]);
            ++i;
            ++m;
        }
    }

    function left(k) {
        while (m !== o && j !== k) {
            result.push(arr[i][j]);
            --j;
            ++m;
        }
    }

    function up(k) {
        while (m !== o && i !== k) {
            result.push(arr[i][j]);
            --i;
            ++m;
        }
    }

    let k = 0;

    while (m !== o) {
        right(n - k);
        down(n - k);
        left(k);
        ++k;
        up(k);
    }

    return result;
}