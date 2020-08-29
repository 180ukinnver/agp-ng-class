import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SettingsService } from '../../services/settings.service';
import { SignupService } from '../../services/signup.service';
import { SigninService } from '../../services/signin.service';

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
    private formBuilder: FormBuilder,
    private settings: SettingsService,
    private signupService: SignupService,
    private signinService: SigninService
  ) {
    this.signType = this.settings.modalType;
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });
    this.signinForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  setSignType(signType: string) {
    this.signType = signType;
  }

  signup() {
    let f = this.signupForm.controls;
    this.signupService.signup({
      email: f.email.value,
      username: f.username.value,
      password: f.password.value,
      passwordConfirm: f.passwordConfirm.value
    }).subscribe(
      success => console.log(success),
      error => {
        alert(error.msg)
      }
    );
  }

  signin() {
    let f = this.signinForm.controls;
    this.signinService.signin({
      username: f.username.value,
      password: f.password.value
    }).subscribe(
      success => console.log(success),
      error => console.error(error)
    );
  }

}
