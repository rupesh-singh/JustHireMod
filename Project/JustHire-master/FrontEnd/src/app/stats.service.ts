import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  apiUrl: string = 'https://justhire-wissen.herokuapp.com/api/admin/stats';

  constructor(private http: HttpClient) { }

  loadStats(){
    return this.http.get(this.apiUrl);
  }

  loadRounds(){
    let url=`https://justhire-wissen.herokuapp.com/api/admin/rounds`;
    return this.http.get(url);
  }

  setAttributes(systemForm) {
    return this.http.post('https://justhire-wissen.herokuapp.com/api/admin/attribute', systemForm);
  }
}
