import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Settings } from '../class/settings';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  constructor(private http: HttpClient) { }

  httpUrls={
    urlFollowers:'/users/followers',
    urlFollowing:'/users/following',
  }

  options = {
    headers: this.createHeader(),

  }


  public getFollowers(username:string|null,followers:boolean): Observable<any>{
    
    let params = new HttpParams();

    params = params.append('username',String(username));


    return this.http.get<any>(Settings.URL_BASE+(followers ? this.httpUrls.urlFollowers : this.httpUrls.urlFollowing),{...this.options,params:params}).pipe(
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
