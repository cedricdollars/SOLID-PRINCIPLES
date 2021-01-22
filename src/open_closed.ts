/**
 * THE OPEN-CLOSED PRINCIPLE.
 * The open-closed principle says that an software artifact is open for extension and closed for modification
 * Let's take an example through the code below
 */

// We want to implement an application that send mail for all users and we use API SendGrid

// Violation of OCP

class SendGridService {
  sg: unknown;
  constructor(sendGridInstance: unknown) {
    this.sg = sendGridInstance;
  }

  sendMail(from: any, to: any, body: any) {
    //Implementation of algorithm
  }
}

//Better way, no violation

type TTransmissionResult = "Success" | "Failed" | "Pending";
type Mail = {
  from: string;
  to: string;
  body: string;
};
interface IEmailTransmissionResult {
  status: TTransmissionResult;
  message?: string;
}

interface IEmailService {
  sendMail(mail: Mail): Promise<IEmailTransmissionResult>;
}

class MailChimp implements IEmailService {
  constructor(private mail: Mail) {
    this.mail = mail;
  }

  sendMail(mail: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

class AmazonSEService implements IEmailService {
  sendMail(mail: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  getMailsOpen(): number {
    //implementation algorithm
    return 0;
  }
  getMailDetails(): void {}
}
