function pickPeaks(arr) {
    const data = {
        pos: [],
        peaks: []
    };

    for (let i = 0; i < arr.length; ++i) {
        if (i > 0 && i < arr.length - 1 && arr[i] > arr[i - 1] && arr[i] >= arr[i + 1]) {
            let tempI = i;

            while (i < arr.length - 1 && arr[i] === arr[i + 1]) {
                ++i
            }

            if (i < arr.length - 1 && arr[i] > arr[i + 1]) {
                data.pos.push(tempI);
                data.peaks.push(arr[tempI]);
            }
        }
    }

    return data;
}