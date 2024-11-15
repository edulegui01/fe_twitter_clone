import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings } from '../class/settings';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  httpUrls={
    registerURL:Settings.URL_BASE + '/auth/register',
  }

  constructor(
    private http: HttpClient,
  ) { }


  register(userData:any): Observable<any> {

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };

    return this.http.post(this.httpUrls.registerURL, userData, options);
  }
}
