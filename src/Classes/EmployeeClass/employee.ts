export class Employee {
  firstName: string;
  lastName: string;
  state: string;
  city: string;
  startDate: Date;
  endDate: Date;
  CE: number;
  CS: number;
  CN: number;
  CRR: number;
  constructor(firstName: string, lastName: string,
              state: string, city: string,
              startDate: Date, endDate: Date,
              CE: number, CN: number, CS: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.state = state;
    this.city = city;
    this.startDate = startDate;
    this.endDate = endDate;
    this.CE = CE;
    this.CN = CN;
    this.CS = CS;
    this.CRR = ((CE - CN) / CS) * 100;
  }
}
