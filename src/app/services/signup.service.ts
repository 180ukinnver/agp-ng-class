import { Injectable } from '@angular/core';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private httpClient: HttpClient
  ) { }

  signup(form): Observable<any> {
    return this.httpClient.post<any>('https://catchk.net/api/user/join', form).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): ObservableInput<any> {
    console.error(error.error)
    return throwError({
      msg: error.error
    });
  }
}
