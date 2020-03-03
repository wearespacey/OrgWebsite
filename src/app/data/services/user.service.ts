import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Member } from '../models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'https://api.github.com';
  private readonly endpoint = '/orgs/wearespacey';

  constructor(private httpClient: HttpClient) { }

  public getMembers(): Observable<Member[]> {
    const members = this.httpClient.get<Member[]>(`${this.baseUrl}${this.endpoint}/members?per_page=9999999`)
      .pipe(
        catchError(this.handleError)
      );
    return members;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('A client-side error occurred.', error.error.message);
    } else {
      console.error(`Returned code is ${error.status}`);
    }
    return throwError('An error occurred. Please try again later');
  }
}
