"use strict";
exports.__esModule = true;
exports.employeeArray = exports.employeeFakeData = void 0;
var faker = require("faker");
var employeeFakeData = function () {
    return {
        name: faker.internet.userName(),
        job: faker.random.word(),
        salary: faker.random.number()
    };
};
exports.employeeFakeData = employeeFakeData;
var employeeArray = function () { return [exports.employeeFakeData()]; };
exports.employeeArray = employeeArray;
