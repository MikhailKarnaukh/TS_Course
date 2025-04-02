export interface Employee {
    name: string;
    profession: string;
    worworkingHoursPerDay: number;
}

export interface PremiumData {
    isPremium: boolean;
    premium: number;
}

export const experienceСoefficients: number[] = [1, 1.1, 1.2, 1.3, 1.5];

export const getSalaryInfo = (
    employeeData: Employee,
    premiumData: PremiumData,
    payPerHour: number,
    worworkingDays: number,
    experienceСoefficients: number
): string => {
    let salary: number;

    if (premiumData.isPremium) {
        salary = employeeData.worworkingHoursPerDay * payPerHour * worworkingDays * experienceСoefficients + premiumData.premium;
    } else {
        salary = employeeData.worworkingHoursPerDay * payPerHour * worworkingDays * experienceСoefficients;
    }

    return `${employeeData.profession} ${employeeData.name} has a salary of ${salary}$ this month`;
};