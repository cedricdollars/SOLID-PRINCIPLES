import { Employe } from "../entities/Employee";
import { employeeArray } from "../entities/employe_fake_data";

export interface IEmploye {
  getEmploye(): Promise<Employe[]>;
}

export class EmployeRepo implements IEmploye {
  constructor() {}

  async getEmploye(): Promise<Employe[]> {
    const data = await employeeArray();
    return data;
  }
}
