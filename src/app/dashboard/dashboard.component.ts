import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  username: string = '';

  ngOnInit(): void {
    this.username = localStorage.getItem('username') || '';
  }
  onLogout() {
    this.authService.logoutUser();
    this.router.navigate(['/login']);
  }
}
