import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-sign-modal',
  templateUrl: './sign-modal.component.html',
  styleUrls: ['./sign-modal.component.css']
})
export class SignModalComponent implements OnInit {

  signType: string;

  public signupForm: FormGroup;
  public signinForm: FormGroup;

  constructor(
    private settings: SettingsService
  ) {
    this.signType = this.settings.modalType;
  }

  ngOnInit(): void {
  }

}
