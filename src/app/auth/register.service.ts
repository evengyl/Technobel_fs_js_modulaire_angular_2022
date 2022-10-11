import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() {
    console.log("Register service chargé")
  }

  log(){
    console.log("Call de la méthode log dans Register service")
  }
}
