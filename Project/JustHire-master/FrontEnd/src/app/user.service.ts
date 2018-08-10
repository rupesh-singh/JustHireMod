import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  apiUrl="https://justhire-wissen.herokuapp.com/api/admin/user";

  loadUser(){
    return this.http.get(this.apiUrl);
  }

  loadUserById(id) {
    let url=`https://justhire-wissen.herokuapp.com/api/admin/editUser/`;
    return this.http.get(url + `${id}`);
  }

  getRounds(){
    return this.http.get("https://justhire-wissen.herokuapp.com/api/admin/rounds");
  }

  addUser(userForm){
    return this.http.post("https://justhire-wissen.herokuapp.com/api/admin/user",userForm);
  }

  update(id,user){
    let url = `https://justhire-wissen.herokuapp.com/api/admin/editUser/`;
    return this.http.put(url+`${id}`, user);
  }
}
