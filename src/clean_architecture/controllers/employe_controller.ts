import { IEmploye } from "../repos/employe_repo";

export default class UserController {
  private employeRepo: IEmploye;
  constructor(employeRepo: IEmploye) {
    this.employeRepo = employeRepo;
  }

  async handleGetUsers(): Promise<void> {
    const emp = await this.employeRepo.getEmploye();
    console.log(emp);
  }
}
