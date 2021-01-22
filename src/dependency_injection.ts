export class ProfileService {
  private userService: UserService;
  private httpClient: HttpClient;
  private endPoint: Endpoint;

  constructor() {
    this.userService = new UserService();
    this.httpClient = new HttpClient();
    this.endPoint = new Endpoint();
  }
}

class UserService {}
class HttpClient {}

class Endpoint {}
