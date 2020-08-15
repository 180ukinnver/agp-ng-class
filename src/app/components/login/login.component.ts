import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });

    console.log(this.loginForm);
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    let form = this.loginForm.controls;
    console.log(form.username.value, form.password.value);
    // this.loginForm(form.username.value, form.password.value);
    // 로그인 로직
    // 후 처리
    // 오류 처리
  }
}
