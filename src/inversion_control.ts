export class Store {
  private name: string;
  private amount: number;
  private paymentMethod: IPaymentProcess;

  constructor(name: string, amount: number, paymentMethod: IPaymentProcess) {
    this.name = name;
    this.amount = amount;
    this.paymentMethod = paymentMethod;
  }

  makePayment(): void {
    if (this.amount < 0)
      console.log(
        "You don't have enough to make this payment, fill your account"
      );
    this.paymentMethod.PayWithPaypal();
    console.log(`[Info]: Paiment succeeded with paypal`);
  }
}

interface IPaymentProcess {
  PayWithPaypal(): void;
  PayWithStripe(): void;
}

export class PaymentProcess implements IPaymentProcess {
  private dateProcess: Date = new Date();
  private isDone: boolean = false;

  constructor() {}

  PayWithPaypal(): void {
    console.log("Paypal Payment Processing...");
    setTimeout(() => {
      console.log("Payment made at", this.dateProcess);
    }, 1500);
    this.isDone = true;
  }
  PayWithStripe(): void {
    console.log("Stripe Payment Processing...");
    setTimeout(() => {
      console.log("Payment made at", this.dateProcess);
    }, 1500);
    this.isDone = true;
  }
}
