class roomDimensions {
    constructor(width, length) {
        this.width = 50;
        this.length = 100;
    }

    getArea(width, length) {
        return this.width * this.length;
    }
}

const boundGetArea = new roomDimensions().getArea();

console.log(boundGetArea);