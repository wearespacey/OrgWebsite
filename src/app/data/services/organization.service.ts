import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Organization } from '../models/models';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  private readonly baseUrl = 'https://api.github.com';
  private readonly endpoint = '/orgs/wearespacey';

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<Organization> {
    const org = this.httpClient.get<Organization>(`${this.baseUrl}${this.endpoint}`)
      .pipe(
        catchError(this.handleError)
      );
    return org;
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
