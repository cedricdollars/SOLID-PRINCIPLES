/**
 * SINGLE RESPONSABILITY PRINCIPLE
 * The single responsibility says that: one class must have one reason to change. Let's take an example with the code below
 *
 */

//Violation SRP
export class Employee {
  private salary: number = 200;
  private hours: number = 7;

  public calculatePay(): number {
    //implements algorithm
    return 37 * this.salary;
  }
  public reportHours(): number {
    return this.hours * 8;
  }
  public save(): void {
    //implements algorithm
  }
}

//NO violation SRP

abstract class Employe {
  abstract calculatePay(): number;

  abstract reportHours(): number;

  protected save(): void {}
}

class HR extends Employe {
  private salary: number = 200;
  private hours: number = 7;

  calculatePay(): number {
    return this.salary * 37;
  }

  reportHours(): number {
    return this.hours * 24;
  }
}

class Accounting extends Employe {
  private salary: number = 200;
  private hours: number = 7;

  calculatePay(): number {
    return this.salary * 37;
  }

  reportHours(): number {
    return this.hours * 24;
  }
}
