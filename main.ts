import { Store, PaymentProcess } from "./src/inversion_control";
import { ProfileService } from "./src/dependency_injection";

function Main() {
  //   let store = new Store("Cédric", 235, new PaymentProcess());
  //   store.makePayment();

  let profileService = new ProfileService();
  console.log(profileService);
}
Main();
