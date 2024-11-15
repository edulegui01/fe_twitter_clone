import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Settings } from '../class/settings';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient,) { }

  httpUrls={
    urlTotalTweets:'/tweet/total',
    urlSeguidosCount:'/users/following/count',
    urlTweetSave:'/tweet/guardar'
  }



  options = {
    headers: this.createHeader(),

  }

  public getTotalTweets(): Observable<any>{
    
    let params = new HttpParams();

    //params = params.append('esCliente',Boolean(true));


    return this.http.get<any>(Settings.URL_BASE+this.httpUrls.urlTotalTweets,this.options).pipe(
      map((tweets:any) => tweets)
    )

  }


  public saveTweet(tweetData:any){

    console.log(tweetData)

    return this.http.post(Settings.URL_BASE+this.httpUrls.urlTweetSave, tweetData, this.options);
  }

  createHeader(){
    return new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8',
          'Accept': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
          
      })
    
  }


}
