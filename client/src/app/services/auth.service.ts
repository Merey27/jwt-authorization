import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../interfaces/response.interface';
import {environment} from '../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }

  login(form: {username: string; password: string}): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.apiUrl}/login`, form)
      .pipe(
        tap(response => {
          this.user$.next(response.user);
        })
      );
  }
}
