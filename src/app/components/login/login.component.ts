import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginUsername: string = '';
  public loginPassword: string = '';
  public submitted: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    console.log(this.loginForm);
  }

  get form() {
    return this.loginForm.controls;
  }

  onSubmit() {
    // if (this.loginForm.invalid) {
    //   console.log("로그인폼 비정상")
    //   return;
    // }

    let form = this.loginForm.controls;
    this.loginService.auth(form.username.value, form.password.value)
    this.loginService.observable.subscribe(
      value => {
        console.log(value);
        if (value.status === 200) {
          this.loginUsername = value.username;
          this.loginPassword = value.password;
        } 
        this.submitted = true;
      },
      error => {
        console.error(error);
      }
    );

    // 로그인 로직
    // 후 처리
    // 오류 처리
  }

  checkAuth() {
    if (this.loginUsername !== '' && this.loginPassword !== '') {
      return true;
    }
    return false;
  }
}
