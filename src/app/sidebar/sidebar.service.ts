import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Settings } from '../class/settings';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  httpUrls={
    urlSeguidoresCount:'/users/followers/count',
    urlSeguidosCount:'/users/following/count',
  }

  constructor(private http: HttpClient, private router: Router) { }

  options = {
    headers: this.createHeader(),

  }




  public getFollowersCount(username:any): Observable<any>{
    
    let params = new HttpParams();

    params = params.append('username',String(username));

    //params = params.append('esCliente',Boolean(true));


    return this.http.get<any>(Settings.URL_BASE+this.httpUrls.urlSeguidoresCount,{...this.options,params:params}).pipe(
      map((followers:any) => followers)
    )

  }

  public getFollowingsCount(username:any): Observable<any>{
    
    let params = new HttpParams();

    params = params.append('username',String(username));

    //params = params.append('esCliente',Boolean(true));


    return this.http.get<any>(Settings.URL_BASE+this.httpUrls.urlSeguidosCount,{...this.options,params:params}).pipe(
      map((followers:any) => followers)
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
