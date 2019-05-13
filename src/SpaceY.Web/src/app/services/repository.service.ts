import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../models/Models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private readonly baseUrl = 'https://api.github.com';
  private readonly endpoint = '/orgs/wearespacey';

  constructor(private httpClient: HttpClient) { }

  public get(currentPage = 1): Observable<Repository[]> {
    return this.httpClient.get<Repository[]>(`${this.baseUrl}${this.endpoint}/repos?page=${currentPage}`);
  }
}
