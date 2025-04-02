import { Employee, PremiumData, experienceСoefficients, getSalaryInfo } from './hw_1_task_1.js';
import { processData } from './hw_1_task_2.js';
import { Triangle, Rectangle, Circle, getFigureInfo } from './hw_1_task_3.js';

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