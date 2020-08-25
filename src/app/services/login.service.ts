import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username: string;
  password: string;
  observable: any;

  constructor(public httpClient: HttpClient) {

    const subscriber = (observer) => {
      try {
        this.httpClient.get("http://localhost:3000/login").subscribe(loginResult => {

          for (let item in loginResult) {
            if (loginResult[item].username === this.username 
              && loginResult[item].password === this.password) {
              observer.next({
                status: 200,
                username: loginResult[item].username,
                password: loginResult[item].password
              });
              observer.complete();
              break;
            } else {
              observer.next({
                status: 200,
                username: "존재하지 않는 사용자이름",
                password: "잘못된 패스워드"
              });
              observer.complete();
            }
          }
        });
      } catch(e) {
        observer.error();
      } finally {
        return () => { 
          console.log("unsubscriber."); 
        }
      }
    }

    this.observable = new Observable(subscriber);
  }

  auth(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  post(body: any) {
    this.httpClient.post("http://localhost:3000/login", body).subscribe(loginResult => {
      console.log(loginResult);
    })
  }
}
