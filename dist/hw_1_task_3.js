export function getFigureInfo(figure) {
    switch (figure.type) {
        case "triangle":
            const triangleArea = (figure.base * figure.height) / 2;
            return `Triangle with base ${figure.base} and height ${figure.height} has an area of ${triangleArea}`;
        case "rectangle":
            const rectangleArea = figure.width * figure.height;
            return `Rectangle with width ${figure.width} and height ${figure.height} has an area of ${rectangleArea}`;
        case "circle":
            const circleArea = (Math.PI * Math.pow(figure.radius, 2)).toFixed(2);
            return `Circle with radius ${figure.radius} has an area of ${circleArea}`;
        default:
            throw new Error("Check input data");
    }
}
