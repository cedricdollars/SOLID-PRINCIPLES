/**
 * THE LISKOV-SUBSTITUTION PRINCIPLE
 * That principle says that we should able to swap one implementation to another one
 */

type TransmissionResult = "Success" | "Failed" | "Pending";

interface IEmailTransmissionResult {
  status: TransmissionResult;
  message?: string;
}

interface IEmailService {
  sendMail(mail: IMail): Promise<IEmailTransmissionResult>;
}

class SendGridMailService implements IEmailService {
  sendMail(mail: IMail): Promise<IEmailTransmissionResult> {
    throw new Error("not implemented");
  }
}

class MailChimpService implements IEmailService {
  sendMail(mail: IMail): Promise<IEmailTransmissionResult> {
    throw new Error("Not implemented");
  }
}

class CreateUserController extends BaseController {
  private emailService: IEmailService;
  constructor(emailService: IEmailService) {
    super();
    this.emailService = emailService;
  }

  public executeMail(): void {
    const mail = new Mail();
    this.emailService.sendMail(mail);
  }
}

// Client side : test

const userController = new CreateUserController(new SendGridMailService());
const userController2 = new CreateUserController(new MailChimpService());
