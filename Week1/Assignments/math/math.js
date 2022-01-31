class mathstuff {
    constructor(a, b) {
        this.A = a
        this.B = b
    }

    add() {
        let c = (this.A + this.B)
        return c
    }

    sub() {
        let c = (this.A - this.B)
        return c 
    }

    div() {
        let c = (this.A / this.B)
        return c
    }

    mul() {
        let c = (this.A * this.B)
        return c
    }
}

module.exports = mathstuff;