import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  title = 'PCodes';
  email: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.email = localStorage.getItem('email');
    }
  }
}
