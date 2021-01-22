import faker = require("faker");
import { Employe } from "./Employee";

export const employeeFakeData = (): Employe => {
  return {
    name: faker.internet.userName(),
    job: faker.random.word(),
    salary: faker.random.number(),
  };
};

export const employeeArray = (): Employe[] => [employeeFakeData()];
