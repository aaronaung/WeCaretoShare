import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { globalGivingConf } from '../configs/global-giving';

@Injectable({
  providedIn: 'root'
})
export class GlobalGivingHttpService {
  private key: string;
  private endpoint: string;

  constructor(private http: HttpClient) { 
    this.key = globalGivingConf.API_KEY;  //@toDo - move to server side to avoid exposing the key -> your node app should communicate with Global Giving api
    this.endpoint = globalGivingConf.API_ENDPOINT;
  }

  private encodeQuery(query) {
    let queryStr = '&';
    if (typeof(query) == 'string') {
      return queryStr += query;
    }
    for (var key in query) {
        queryStr += `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}&`
    }
    return queryStr.slice(0, queryStr.length-1);
  }

  get(query: Object|string, url: string): Observable<any> {
    let encodedQuery = this.encodeQuery(query);
    return this.http.get(`${this.endpoint}/${url}?api_key=${this.key}${encodedQuery}`);
  }
}
