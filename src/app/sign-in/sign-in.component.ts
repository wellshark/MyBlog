import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {Post} from '../post.model';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  users;
  isWrongFormData = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    this.users = this.userService.getUsers().subscribe(
      date => {
        this.users = date.map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            } as Post;
          }
        );
      }
    );
  }

  check(): void {
    this.users.map(user => {
      if (user.email === this.form.value.email && user.password === this.form.value.password) {
        this.auth.signIn(user);
        this.router.navigate(['/posts']);
        return;
      }
    });
    this.form.controls.password.reset();
    this.showDataError();
  }

  showDataError(): void {
    this.isWrongFormData = !this.isWrongFormData;
    setInterval(() => this.isWrongFormData = !this.isWrongFormData, 5000);
  }
}
