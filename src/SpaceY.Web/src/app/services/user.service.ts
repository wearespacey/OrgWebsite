import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Member } from '../models/models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private readonly baseUrl = 'https://api.github.com';
  private readonly endpoint = '/orgs/wearespacey';

  constructor(private httpClient: HttpClient) { }

  public getMembers(currentPage = 1): Observable<Member[]> {
    const members = this.httpClient.get<Member[]>(`${this.baseUrl}${this.endpoint}/members?page=${currentPage}`)
      .pipe(
        catchError(this.handleError)
      );
    // add algorithm to get all members (bypass pagination)
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
