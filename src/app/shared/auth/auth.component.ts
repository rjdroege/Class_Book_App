import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  errMsg: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  authObsrv: Observable<AuthResponseData>;

  onFormSubmit(formObj: NgForm){
    if (!formObj.valid) return;
    const { email, password } = formObj.value;
    if (this.isLoginMode) {
     this.authObsrv = this.authService.signIn(email, password)
    } else {
     this.authObsrv = this.authService.signUp(email, password)
    }

    this.authObsrv.subscribe((res) => {
      console.log('Auth Success!', res);
    }, (err) => {
      console.error('Auth Error!', err);
      this.errMsg = err.error.error.message;
    });

    formObj.reset();
  }

  onSwitchAuthMode(){
    this.isLoginMode = !this.isLoginMode;
  }

}
