import { Component, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { matchPasswordService } from '../../services/match-password.service';
import { CreatuserService } from '../../services/creatuser.service';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerComponent } from '../../shared/components/spinner/spinner.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  form!: FormGroup;
  error = signal<string[]>([]);
  constructor(
    private formBuilder: FormBuilder,
    private signup: CreatuserService,
    private spinner: NgxSpinnerService,
    private matchPassword: matchPasswordService,
    private router: Router
  ) {
    this.getFrom();
  }

  getFrom() {
    this.form = this.formBuilder.group(
      {
        // Email
        email: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(/^[\w-.]+@([\w-]{4,5}).+[\w-]{2,9}$/),
          ]),
        ],

        // Frist Name
        name: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(/([a-zA-Z]{3,})/),
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
        confirmPassword: ['', Validators.required],
        role: ['customer'],
        avatar: ['https://cdn-icons-png.flaticon.com/512/6596/6596121.png'],
      },
      {
        validator: this.matchPassword.matchPassword(
          'password',
          'confirmPassword'
        ),
      }
    );
  }

  creatUser(body: any): Subscription | any {
    if (this.form.valid) {
      this.spinner.show();
      return this.signup.creatUser(this.form.value).subscribe({
        next: (res: any) => {
          this.spinner.hide();
          this.router.navigate(['/login']);
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
