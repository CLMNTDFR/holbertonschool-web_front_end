class roomDimensions {
    constructor() {
        this.width = 50;
        this.length = 100;
    }

    getArea() {
        return this.width * this.length;
    }
}

const boundGetArea = new roomDimensions().getArea();

console.log(boundGetArea);