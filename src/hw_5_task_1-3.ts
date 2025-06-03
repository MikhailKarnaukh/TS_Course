// Task 1
export type SortFunction = (arr: string[], direction: "asc" | "desc") => string[];

export const superSort: SortFunction = (arr, direction) => {
  const sorted = [...arr].sort((a, b) => a.localeCompare(b));
  return direction === "asc" ? sorted : sorted.reverse();
};

// Task 2
export enum PackageStatus {
  Pending,
  InTransit,
  Delivered,
  Lost
}

interface Dimensions {
  length: number;
  width: number;
  height: number;
}

export interface Parcel {
  readonly id: number;
  weight: number;
  dimensions: Dimensions;
  description?: string;
  sender: number | string;
  status: PackageStatus;
  deliver(isSuccess: boolean): void;
  readonly statusName: string;
}

// Task 3
interface Printable {
  print(): void;
}

abstract class User {
  private static _idCounter = 1000;

  public readonly id: number;
  public email: string;
  private password!: string;

  constructor(email: string, password: string) {
    this.id = User._idCounter++;
    this.email = email;
    this.setPassword(password);
  }

  get passwordPreview(): string {
    if (this.password.length <= 2) return this.password;
    const masked = '•'.repeat(this.password.length - 2);
    return this.password[0] + masked + this.password[this.password.length - 1];
  }

  protected changePassword(newPassword: string): void {
    this.setPassword(newPassword);
  }

  private setPassword(newPassword: string): void {
    if (newPassword.length < 6) {
      console.log("Password too short!");
    } else {
      this.password = newPassword;
    }
  }

  abstract showProfile(): void;
}

export class Admin extends User implements Printable {
  public isActive: boolean = true;

  constructor(email: string, password: string) {
    super(email, password);
  }

  showProfile(): void {
    const url = this.isActive
      ? `https://softserve/profile/${this.id}`
      : "https://softserve/login";
    console.log(url);
  }

  print(): void {
    console.log(this.constructor.name);
  }

  public changePassword(newPassword: string): void {
    super.changePassword(newPassword);
  }
}