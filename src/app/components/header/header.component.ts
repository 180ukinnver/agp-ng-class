import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private settings: SettingsService,
    public signinService: SigninService
  ) {
  }

  ngOnInit(): void {
  }

  get modalType() {
    return this.settings.modalType;
  }

  set modalType(modalType: string) {
    this.settings.modalType = modalType;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
