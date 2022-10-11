import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-gest-users',
  templateUrl: './gest-users.component.html',
})
export class GestUsersComponent implements OnInit {

  constructor(private authServe : AuthService) { }

  ngOnInit(): void {
    this.authServe.log()
  }

}
