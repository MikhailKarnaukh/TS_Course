export const superSort = (arr, direction) => {
    const sorted = [...arr].sort((a, b) => a.localeCompare(b));
    return direction === "asc" ? sorted : sorted.reverse();
};
// Task 2
export var PackageStatus;
(function (PackageStatus) {
    PackageStatus[PackageStatus["Pending"] = 0] = "Pending";
    PackageStatus[PackageStatus["InTransit"] = 1] = "InTransit";
    PackageStatus[PackageStatus["Delivered"] = 2] = "Delivered";
    PackageStatus[PackageStatus["Lost"] = 3] = "Lost";
})(PackageStatus || (PackageStatus = {}));
class User {
    constructor(email, password) {
        this.id = User._idCounter++;
        this.email = email;
        this.setPassword(password);
    }
    get passwordPreview() {
        if (this.password.length <= 2)
            return this.password;
        const masked = '•'.repeat(this.password.length - 2);
        return this.password[0] + masked + this.password[this.password.length - 1];
    }
    changePassword(newPassword) {
        this.setPassword(newPassword);
    }
    setPassword(newPassword) {
        if (newPassword.length < 6) {
            console.log("Password too short!");
        }
        else {
            this.password = newPassword;
        }
    }
}
User._idCounter = 1000;
export class Admin extends User {
    constructor(email, password) {
        super(email, password);
        this.isActive = true;
    }
    showProfile() {
        const url = this.isActive
            ? `https://softserve/profile/${this.id}`
            : "https://softserve/login";
        console.log(url);
    }
    print() {
        console.log(this.constructor.name);
    }
    changePassword(newPassword) {
        super.changePassword(newPassword);
    }
}
