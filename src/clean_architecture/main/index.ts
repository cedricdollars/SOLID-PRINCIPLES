import UserController from "../controllers/employe_controller";
import { EmployeRepo } from "../repos/employe_repo";
function Index() {
  let userRepo = new EmployeRepo();
  let usercontroller = new UserController(userRepo);
  usercontroller.handleGetUsers();
}
Index();
