import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {HeaderService} from '../../services/header.service';
import {User} from '../../interfaces/user.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  form: FormGroup;
  users: User[];
  isShowSignInError = false;
  private subscriptionGetUsers: Subscription;

  constructor(
    private userService: UserService,
    private router: Router,
    private auth: AuthService,
    private headerService: HeaderService
  ) {
  }

  ngOnInit() {
    this.headerInit();
    this.formGroupSettings();
    this.getUsers();
  }

  headerInit(): void {
    this.headerService.settings.isSignUpLink = true;
  }

  formGroupSettings(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  getUsers(): void {
    this.subscriptionGetUsers = this.userService.getUsers().subscribe(
      date => {
        this.users = date.map(e => {
            return e.payload.doc.data() as User;
          }
        );
      }
    );
  }

  check(): void {
    const successUser = this.users.find(user => {
      return user.email === this.form.value.email && user.password === this.form.value.password;
    });
    successUser ? this.signInSuccess(successUser) : this.signInError();
  }

  signInSuccess(user: User): void {
    this.auth.signIn(user);
    this.router.navigate(['/posts']);
  }

  signInError(): void {
    this.showSignInError();
    this.form.controls.password.reset();
  }

  showSignInError(): void {
    this.isShowSignInError = !this.isShowSignInError;
    setTimeout(() => this.isShowSignInError = !this.isShowSignInError, 5000);
  }

  ngOnDestroy(): void {
    this.headerService.settings.isSignUpLink = false;
    this.subscriptionGetUsers.unsubscribe();
  }
}
