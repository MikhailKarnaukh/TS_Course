var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Worker_experience;
// Task 1
export function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}
// Task 2
export function showProps(obj) {
    const result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(`${key}: ${obj[key]}`);
        }
    }
    return result;
}
// Task 3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return `${this.surname} ${this.name}`;
    }
}
export class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showFullName(middleName) {
        return `${this.surname} ${this.name} ${middleName}`;
    }
    showCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year;
        if (course >= 1 && course <= 6) {
            return course;
        }
        else if (course < 1) {
            return 1;
        }
        else {
            return 6;
        }
    }
}
// Task 4
export class Worker {
    constructor(fullName, dayRate, workingDays) {
        _Worker_experience.set(this, 1.2);
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    showSalary() {
        const salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salary}`);
        return salary;
    }
    showSalaryWithExperience() {
        const salaryWithExp = this.dayRate * this.workingDays * __classPrivateFieldGet(this, _Worker_experience, "f");
        console.log(`${this.fullName} salary: ${salaryWithExp}`);
        return salaryWithExp;
    }
    get showExperience() {
        return __classPrivateFieldGet(this, _Worker_experience, "f");
    }
    set setExperience(value) {
        __classPrivateFieldSet(this, _Worker_experience, value, "f");
    }
}
_Worker_experience = new WeakMap();
// Task 5
class GeometricFigure {
    getArea() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}
export class Triangle extends GeometricFigure {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    getArea() {
        return 0.5 * this.base * this.height;
    }
}
export class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() {
        return Math.pow(this.side, 2);
    }
}
export class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
export function handleFigures(figures) {
    let totalArea = figures.reduce((sum, figure) => {
        if (figure instanceof GeometricFigure) {
            const area = figure.getArea();
            console.log(`Geometric figure: ${figure.toString()} - area: ${area}`);
            return sum + area;
        }
        else {
            console.warn("Non-figure object found.");
            return sum;
        }
    }, 0);
    return totalArea;
}
