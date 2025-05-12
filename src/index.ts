import { Employee, PremiumData, experienceСoefficients, getSalaryInfo } from './hw_1_task_1.js';
import { processData } from './hw_1_task_2.js';
import { Triangle, Rectangle, Circle, getFigureInfo } from './hw_1_task_3.js';
import { findMin, findUnique, lastElem, randArray, toUpper } from './hw_2_task_1-8.js';
import {propsCount, showProps, Student, Worker, Triangle as TriangleClass, Square, Circle as CircleClass, handleFigures} from './hw_3_task_1-5.js';
import {getPromise, calcArrProduct, showNumbers, showNumbersAsync} from './hw_4_task_1-4.js';

const employee: Employee = {
    name: "Alex Brown",
    profession: "doctor",
    worworkingHoursPerDay: 10
};

const premiumData: PremiumData = {
    isPremium: true,
    premium: 1000
};

const payPerHour: number = 32;
const worworkingDays: number = 14;

const salaryInfo: string = getSalaryInfo(employee, premiumData, payPerHour, worworkingDays, experienceСoefficients[2]);

const triangle: Triangle = { type: "triangle", base: 5, height: 10 };
const rectangle: Rectangle = { type: "rectangle", width: 8, height: 14 };
const circle: Circle = { type: "circle", radius: 8 };

const stringData: string = "text data";
const numberData: number = 3;
const booleanData: boolean = false;
const arrayData: number[] = [1, 2, 3, 4];
const emptyArray: number[] = [];

console.log(salaryInfo);
console.log(processData(stringData));
console.log(processData(numberData));
console.log(processData(booleanData));
console.log(processData(arrayData));
console.log(processData(emptyArray));
console.log(getFigureInfo(triangle));
console.log(getFigureInfo(rectangle));
console.log(getFigureInfo(circle));

const dataForRanodmizer: number = 7;
const minDigit: number[] = [12, 14, 4, -4, 0.2];
const falseSet: number[] = [1, 2, 3, 5, 3];
const trueSet: number[] = [1, 2, 3, 5, 11];
const sentenceToAdjust: string = "i love java script";
const lastElement: number[] = [3, 4, 10, -5];
const twoDigits: number = 2;
const eightDigits: number = 8;
console.log(randArray(dataForRanodmizer));
console.log(findMin(...minDigit));
console.log(findUnique(falseSet));
console.log(findUnique(trueSet));
console.log(lastElem(lastElement));
console.log(lastElem(lastElement, twoDigits));
console.log(lastElem(lastElement, eightDigits));
console.log(toUpper(sentenceToAdjust));

let mentor = { 
    course: "JS fundamental",
    duration: 3,
    direction: "web development"
};

console.log(propsCount(mentor));
let country = { 
    name: "Country",
    population: 3,
    capital: "Capital",
    square: 4,
    regions: 5
};
console.log(showProps(country));

const student = new Student("Petro", "Petrenko", 2015);

console.log(student.showFullName("Petrovych"));
console.log("Current course: " + student.showCourse());


let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExperience);
worker1.showSalaryWithExperience();
worker1.setExperience = 1.5;
console.log("New experience: " + worker1.showExperience);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Thomson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExperience);
worker2.showSalaryWithExperience();
worker2.setExperience = 1.5;
console.log("New experience: " + worker2.showExperience);
worker2.showSalaryWithExperience();


let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExperience);
worker3.showSalaryWithExperience();
worker3.setExperience = 1.5;
console.log("New experience: " + worker3.showExperience);
worker3.showSalaryWithExperience();

const workers = [worker1, worker2, worker3];

workers.sort((a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience());

console.log("Sorted salary:");
workers.forEach(worker => {
  console.log(`${worker.fullName}: ${worker.showSalaryWithExperience()}`);
});

const figures = [new TriangleClass(4, 5), new Square(7), new CircleClass(5)];
console.log(handleFigures(figures));

getPromise("test promise", 2000).then(function(data) {
console.log(data);
});

calcArrProduct([3,4,5]).then(result => console.log(result));
calcArrProduct ( [5,"user2", 7, 12]).then(result => console.log(result));

showNumbers();
showNumbersAsync();