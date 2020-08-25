import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private settings: SettingsService
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

}
