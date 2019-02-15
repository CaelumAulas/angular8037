import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable()
export class AuthGuardGeral implements CanActivate {
    constructor( private router: Router ) {}
    canActivate(): boolean {
        if (localStorage.getItem('TOKEN')) {
            return true; // console.log('Tem token, ta logado!');
        } else {
            this.router.navigate(['/']);
            return false; console.log('Sem token, sai fora! redirect');
        }
    }
}
