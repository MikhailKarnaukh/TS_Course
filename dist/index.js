import { experienceСoefficients, getSalaryInfo } from './hw_1_task_1.js';
import { processData } from './hw_1_task_2.js';
import { getFigureInfo } from './hw_1_task_3.js';
import { findMin, findUnique, lastElem, randArray, toUpper } from './hw_2_task_1-8.js';
const employee = {
    name: "Alex Brown",
    profession: "doctor",
    worworkingHoursPerDay: 10
};
const premiumData = {
    isPremium: true,
    premium: 1000
};
const payPerHour = 32;
const worworkingDays = 14;
const salaryInfo = getSalaryInfo(employee, premiumData, payPerHour, worworkingDays, experienceСoefficients[2]);
const triangle = { type: "triangle", base: 5, height: 10 };
const rectangle = { type: "rectangle", width: 8, height: 14 };
const circle = { type: "circle", radius: 8 };
const stringData = "text data";
const numberData = 3;
const booleanData = false;
const arrayData = [1, 2, 3, 4];
const emptyArray = [];
console.log(salaryInfo);
console.log(processData(stringData));
console.log(processData(numberData));
console.log(processData(booleanData));
console.log(processData(arrayData));
console.log(processData(emptyArray));
console.log(getFigureInfo(triangle));
console.log(getFigureInfo(rectangle));
console.log(getFigureInfo(circle));
const dataForRanodmizer = 7;
const minDigit = [12, 14, 4, -4, 0.2];
const falseSet = [1, 2, 3, 5, 3];
const trueSet = [1, 2, 3, 5, 11];
const sentenceToAdjust = "i love java script";
const lastElement = [3, 4, 10, -5];
const twoDigits = 2;
const eightDigits = 8;
console.log(randArray(dataForRanodmizer));
console.log(findMin(...minDigit));
console.log(findUnique(falseSet));
console.log(findUnique(trueSet));
console.log(lastElem(lastElement));
console.log(lastElem(lastElement, twoDigits));
console.log(lastElem(lastElement, eightDigits));
console.log(toUpper(sentenceToAdjust));
