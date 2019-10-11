class GuessingGame {
    constructor() {
        this.max;
        this.min;
        this.res;
    }

    setRange(min, max) {
       this.max = max;
       this.min = min;
    }

    guess() {
        return this.res = Math.ceil(this.max - (this.max - this.min)/2);
    }

    lower() {
        if (this.res < this.max){
            return this.max = this.res;
        }
    }

    greater() {
        if (this.res < this.max){
          return this.min = this.res;
        }
    }
}

module.exports = GuessingGame;
