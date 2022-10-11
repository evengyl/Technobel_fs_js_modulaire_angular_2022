import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
    console.log("Auth service chargé")
  }

  log(){
    console.log("Call de la méthode log dans Auth service")
  }
}
