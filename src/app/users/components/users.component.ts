import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private apiServices: UsersService) {}

  ngOnInit(): void {
    this.getDataUsers();
  }
  //TRAER A TODOS LOS USUARIOS
  getDataUsers() {
    this.apiServices.getDataUser().subscribe((res: any) => {
      console.log(res.value);
    });
  }
}
