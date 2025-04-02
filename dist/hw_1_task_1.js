export const experienceСoefficients = [1, 1.1, 1.2, 1.3, 1.5];
export const getSalaryInfo = (employeeData, premiumData, payPerHour, worworkingDays, experienceСoefficients) => {
    let salary;
    if (premiumData.isPremium) {
        salary = employeeData.worworkingHoursPerDay * payPerHour * worworkingDays * experienceСoefficients + premiumData.premium;
    }
    else {
        salary = employeeData.worworkingHoursPerDay * payPerHour * worworkingDays * experienceСoefficients;
    }
    return `${employeeData.profession} ${employeeData.name} has a salary of ${salary}$ this month`;
};
