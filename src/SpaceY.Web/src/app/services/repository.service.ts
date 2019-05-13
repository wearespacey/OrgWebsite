import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Repository } from '../models/Models';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private readonly baseUrl = 'https://api.github.com';
  private readonly endpoint = '/orgs/wearespacey';

  constructor(private httpClient: HttpClient) { }

  public get(): Observable<Repository[]> {
    const repos =  this.httpClient.get<Repository[]>(`${this.baseUrl}${this.endpoint}/repos?per_page=9999999`)
      .pipe(
        catchError(this.handleError)
      );
    return repos;
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
