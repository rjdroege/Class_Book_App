import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, tap } from "rxjs";
import { User } from "./user.model";


const AUTH_API_KEY: string = "AIzaSyCbQzYmUalgjTpDBUCTkUyECQ6WIxtpIlM";
const SIGN_UP_URL: string = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
const SIGN_IN_URL: string = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
const userToken: string = null;

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  currentUser = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient, private router: Router){ }

  signUp(email: string, password: string){
    return this.http.post<AuthResponseData>(SIGN_UP_URL + AUTH_API_KEY, {
      email,
      password,
      returnSecureToken: true,
    }
    ).pipe(
      tap((res) => {
        const { email, localId, idToken, expiresIn } = res;
        this.handleAuth(email, localId, idToken, +expiresIn);
      })
      )
    ;
  }

  signIn(email: string, password: string) {
    return this.http.post<AuthResponseData>(SIGN_IN_URL + AUTH_API_KEY, {
      email,
      password,
      returnSecureToken: true
    }
    ).pipe(
      tap((res) => {
        const { email, localId, idToken, expiresIn } = res;
        this.handleAuth(email, localId, idToken, +expiresIn);
      })
      );
  }

  handleAuth(email: string, userId: string, token: string, expiresIn: number){
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);

    const formUser = new User(email, userId, token, expDate);
    this.currentUser.next(formUser);

    localStorage.setItem("userData", JSON.stringify(formUser));
  }

  signOut(){
    this.currentUser.next(null);
    this.router.navigate(['auth']);
  }

}
