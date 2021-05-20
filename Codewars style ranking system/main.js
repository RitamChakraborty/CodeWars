class User {
    constructor() {
        this.rank = -8;
        this.progress = 0;
    }

    incProgress(rank) {
        if (rank !== 0 && rank >= -8 && rank <= 8 && this.rank !== 8) {
            if (this.rank < 0 && rank > 0) {
                --rank;
            }

            if (this.rank === 1 && rank === -1) {
                this.progress += 1;
            } else if (this.rank === rank + 1) {
                this.progress += 1;
            } else if (this.rank === rank) {
                this.progress += 3;
            } else if (this.rank < rank) {
                const d = rank - this.rank;
                this.progress += 10 * d ** 2
            }

            while (this.rank < 8 && this.progress >= 100) {
                ++this.rank;

                if (this.rank === 0) {
                    ++this.rank;
                }

                this.progress -= 100;
            }

            // I don't know why this is not working!!
            if (this.progress === 0) this.progress = 0;
        } else {
            throw "";
        }
    }
}