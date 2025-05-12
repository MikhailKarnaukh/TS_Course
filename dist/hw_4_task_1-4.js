var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Task 1
export function getPromise(message, delay) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(message);
        }, delay);
    });
}
// Task 2
export function calcArrProduct(arr) {
    return new Promise((resolve) => {
        const digits = arr.every(item => typeof item === 'number');
        if (digits) {
            const result = arr.reduce((acc, num) => acc * num, 1);
            resolve(result);
        }
        else {
            resolve("Error! Incorrect array!");
        }
    });
}
// Task 3
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
export function showNumbers() {
    let promise = Promise.resolve();
    for (let i = 0; i < 10; i++) {
        const randomDelay = Math.floor(Math.random() * 3000);
        promise = promise.then(() => delay(i, randomDelay)).then((result) => {
            console.log(result);
        });
    }
}
// Task 4
export function showNumbersAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < 10; i++) {
            const randomDelay = Math.floor(Math.random() * 3000);
            const result = yield delay(i, randomDelay);
            console.log(result);
        }
    });
}
