import { Component, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { UserIdService } from '../../services/userId.service';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form!: FormGroup;
  error = signal<string>('');

  constructor(
    private formBuilder: FormBuilder,
    private token: UserIdService,
    private login: LoginService,
    private spinner: NgxSpinnerService,
    private route: Router
  ) {
    this.getFrom();
  }
  getFrom() {
    this.form = this.formBuilder.group({
      // Email
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[\w-.]+@([\w-]{4,5}).+[\w-]{2,9}$/),
        ]),
      ],

      // Password
      password: [
        '',
        Validators.compose([
          Validators.required,
          // Validators.pattern(
          //   // /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]*[^A-z0-9]).{14,}$/
          // ),
        ]),
      ],
    });
  }

  loginUser(): Subscription | any {
    if (this.form.valid) {
      this.spinner.show();
      return this.login.login(this.form.value).subscribe({
        next: (res: any) => {
          this.token.setToken(res.access_token);
          this.route.navigate(['/home']);
          this.spinner.hide();
        },
        error: (error: any) => {
          this.error.set(error.error.message);
          this.spinner.hide();
        },
      });
    } else {
    }
  }
}
