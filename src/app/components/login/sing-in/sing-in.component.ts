import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  imports: [FormsModule],
  templateUrl: './sing-in.component.html',
  styleUrl: './sing-in.component.css'
})
export class SingInComponent {
onLogin() {
throw new Error('Method not implemented.');
}
goLogin() {

}
  showSignIn: boolean = false;
  goSignIn() {
    this.showSignIn = true;
  }
  ifInputFill = {
    error: false,
  }
  show: boolean = false;
  ifMenuClick = {
    sMenuClick: !this.show,
  }
  inputCheck() {
    if (this.Repassword == "") {
      this.ifInputFill.error = true
      console.log("karmenikone");
    }
  }
  checkUser() {
    if (this.password !== this.Repassword) {
      console.log("ramz dorost nist!")
    }
  }
  reset() {
    this.username = this.password = this.Repassword = "";
  }
  SL: string = "Sign Up"

  username: string = "";
  password: string = "";
  Repassword: string = "";


}
