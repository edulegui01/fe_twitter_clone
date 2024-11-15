import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Settings } from '../class/settings';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  httpUrls={
    urlTweets:'/tweet/listar',
  }

  constructor(private http: HttpClient, private router: Router) { }

  options = {
    headers: this.createHeader(),

  }




  public getTweets(username:any): Observable<any>{
    
    let params = new HttpParams();

    params = params.append('username',String(username));

    //params = params.append('esCliente',Boolean(true));


    return this.http.get<any>(Settings.URL_BASE+this.httpUrls.urlTweets,{...this.options,params:params}).pipe(
      map((tweets:any) => tweets)
    )

  }

  createHeader(){
    return new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
          
      })
    
  }
}
