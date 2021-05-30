function sumOfDivided(lst) {
    const isPrime = function (n) {
        if (n <= 1) return false;
        else if (n === 2) return true;

        for (let i = 2; i <= Math.sqrt(n); ++i) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }

    const primeFactorSet = new Set();

    for (let i = 0; i < lst.length; ++i) {
        const n = Math.abs(lst[i]);

        for (let j = 2; j <= n; ++j) {
            if (n % j === 0 && isPrime(j)) {
                primeFactorSet.add(j);
            }
        }
    }

    const primeFactorList = [...primeFactorSet].sort(((a, b) => a - b));

    const result = [];

    for (let i = 0; i < primeFactorList.length; ++i) {
        const n = primeFactorList[i];
        const nonDivisible = [];

        for (let j = 0; j < lst.length; ++j) {
            const num = lst[j];

            if (num % n === 0) {
                nonDivisible.push(num);
            }
        }

        result.push([n, nonDivisible.reduce((a, b) => a + b)]);
    }

    return result;
}