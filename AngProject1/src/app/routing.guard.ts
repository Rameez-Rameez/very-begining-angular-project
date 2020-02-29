import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable, from } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate{
  loggedIn:Boolean=false;
  constructor(private router:Router){};
  canActivate():boolean{
    if(this.loggedIn){
      return true;
    }else{
      this.router.navigate(['footer']);
      return false;
    }
  }
}
