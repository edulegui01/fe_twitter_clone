import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings } from '../class/settings';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpUrls={
    loginURL:Settings.URL_BASE + '/auth/login',
    registerURL:Settings.URL_BASE + '/auth/register',
  }

  constructor(
    private http: HttpClient,
  ) { }


  login(userName: string, userPassword: string): Observable<any> {
    const body = {
      username: userName,
      password: userPassword,
    };

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    return this.http.post(this.httpUrls.loginURL, body, options).pipe(
      tap((userData:any) =>{
        sessionStorage.setItem("token",userData.token)
        localStorage.setItem("username",userData.username)
        localStorage.setItem("nombre",userData.nombre)
        localStorage.setItem("apellido",userData.apellido)
      }),
      
      
    );
  }

}
