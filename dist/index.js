import { display, identity, Manager } from './hw_6_task_1-3.js';
/* const employee: Employee = {
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

let names = ["Vlad", "Ira", "Nina", "Alex"];
console.log(superSort(names, "asc"));

const func: SortFunction = superSort;
const result = func(["A", "C", "D", "B"], "desc");
console.log(result);

const item: Parcel = {
  id: 224,
  weight: 22.5,
  dimensions: {
    length: 105,
    width: 44,
    height: 50.5
  },
  sender: "Vlad Tymo",
  description: "Super power inside.",
  status: PackageStatus.Pending,

  deliver(isSuccess: boolean) {
    this.status = isSuccess
      ? PackageStatus.Delivered
      : PackageStatus.Lost;
  },

  get statusName() {
    return PackageStatus[this.status];
  }
};

item.deliver(true);
console.log(item.statusName);

const admin = new Admin('admin@gmail.com', 'Qwerty');

admin.changePassword('Weak');
console.log(admin.passwordPreview);

admin.changePassword('Super-Pass');
console.log(admin.passwordPreview); */
display("1");
display("2", "3");
display(["4", "5", "6"]);
const data = [
    { item: "item1", rating: 2 },
    { item: "item2", rating: 3 },
    { item: "item3", rating: 4 },
    { item: "item4", rating: 5 },
    { item: "item5", rating: 6 },
    { item: "item6", rating: 7 },
];
console.log(identity(data));
const manager = new Manager();
console.log(manager.task);
console.log(manager.project);
console.log(manager.employmentDate);
