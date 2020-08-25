import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-modal-template',
  templateUrl: './modal-template.component.html',
  styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent implements OnInit {

  constructor(
    private settings: SettingsService
  ) { }

  ngOnInit(): void {
  }

  set modalType(modalType: string) {
    this.settings.modalType = modalType;
  }
}
