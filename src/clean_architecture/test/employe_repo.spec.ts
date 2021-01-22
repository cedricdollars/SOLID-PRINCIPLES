import { IEmploye } from "../repos/employe_repo";
import { Employe } from "../entities/Employee";

class TestEmployeRepo implements IEmploye {
  private employe: Employe[] = [];

  constructor() {}
  async getEmploye(): Promise<Employe[]> {
    return this.employe;
  }
}
