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
    return this.httpClient.post<any>('https://catchk.net/api/login', form).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): ObservableInput<any> {
    console.error(error)
    return throwError({

    });
  }
}
