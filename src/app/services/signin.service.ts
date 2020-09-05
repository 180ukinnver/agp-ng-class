import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(
    private httpClient: HttpClient
  ) { }

  signin(form): Observable<any> {
    return this.httpClient.post<any>('http://172.30.1.6:3000/api/signin', form).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): ObservableInput<any> {
    return throwError(error);
  }

  get isSignin(): boolean {
    const user = localStorage.getItem('user');
    return (user !== null) ? true : false;
  }
}
