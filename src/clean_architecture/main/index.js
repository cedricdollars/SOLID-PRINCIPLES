"use strict";
exports.__esModule = true;
var user_controller_1 = require("../controllers/user_controller");
var user_repo_1 = require("../repos/user_repo");
function Index() {
    var userRepo = new user_repo_1.UserRepo();
    var usercontroller = new user_controller_1["default"](userRepo);
    usercontroller.handleGetUsers();
}
Index();
