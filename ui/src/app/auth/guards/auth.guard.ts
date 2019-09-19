import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { roles } from 'src/app/config/roles';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
    // canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //     if (localStorage.getItem('currentUser')) {
    //         const title = JSON.parse(localStorage.getItem('currentUser')).title
    //         if(title == roles.student){
    //             console.log(state.url)
    //             this.router.navigate(['student'], { queryParams: { returnUrl: state.url }});
    //             return true;
    //         }
    //         if(title == roles.teacher){
    //             console.log(state.url)
    //             this.router.navigate(['teacher'], { queryParams: { returnUrl: state.url }});
    //             return true;
    //         }
    //         return false;
    //     }
	//     else {
    //         console.log('Unauthorized to open link: '+ state.url);
    //         return false;
	//     }
    // }
}