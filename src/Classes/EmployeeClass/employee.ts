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
    this.CRR = this.calculateCRR(CE, CN, CS);
    this.isDeleted = false;
  }
  calculateCRR = (CE: number, CN: number, CS: number) => {
    const tempCRR = ((CE - CN) / CS);
    tempCRR.toFixed(2);
    return Number(tempCRR);
  }
}
