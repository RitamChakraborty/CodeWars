function solution(number) {
    let arr = [];
    let index = 0;
    let power = 0;

    while (number !== 0) {
        let value = (number % 10) * (10 ** index++);
        let base = 10 ** power++;
        let div = Math.floor(value / base);

        if (div < 4) {
            for (let i = 0; i < div; ++i) {
                arr.unshift(base);
            }
        } else if (div === 4) {
            arr.unshift(base * 5);
            arr.unshift(base);
        } else if (div === 5) {
            arr.unshift(base * 5);
        } else if (div < 9) {
            for (let i = 0; i < (div - 5); ++i) {
                arr.unshift(base);
            }

            arr.unshift(base * 5);
        } else if (div === 9) {
            arr.unshift(base * 10);
            arr.unshift(base);
        }

        number = Math.floor(number / 10);
    }

    const map = {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",
    }

    return arr.map(i => map[i]).join("");
}