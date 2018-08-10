import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }
  user:any=[];
  ngOnInit() {
  this.user=this.authenticationService.getUser();
  }
  
  ifAdmin(){
    return this.authenticationService.checkIfAdmin();
  }

  logout() {
    console.log('Logging out');
    this.authenticationService.logout();
  }

  togglemenu:Boolean=false;

  toggleMenu(){
    if(this.togglemenu===false)
    this.togglemenu=true;
    else
    this.togglemenu=false;
  }
}
