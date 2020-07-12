export class Employee {
  firstName: string;
  lastName: string;
  gender: string;
  state: string;
  city: string;
  startDate: Date;
  endDate: Date;
  CE: number;
  CS: number;
  CN: number;
  CRR: number;
  isDeleted: boolean;
  employeeID: number;
  constructor(employeeID: number, firstName: string, lastName: string, gender: string,
              state: string, city: string,
              startDate: Date, endDate: Date,
              CE: number, CN: number, CS: number) {
    this.employeeID = employeeID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.state = state;
    this.city = city;
    this.startDate = startDate;
    this.endDate = endDate;
    this.CE = CE;
    this.CN = CN;
    this.CS = CS;
    this.CRR = ((CE - CN) / CS) * 100;
    this.isDeleted = false;
  }
}
