import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import Utils from '../utils';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  passwordContainer: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    // this.nameControl = new FormControl();
    this.form = new FormGroup({
      name: new FormControl('', [Validators.minLength(2), Validators.required]),
      surname: new FormControl('', [Validators.minLength(2), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required])
    });
    this.passwordContainer = new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPass: new FormControl('')
    }, this.checkPasswords);
  }

  create() {
    const formData = this.form.value;
    const password = this.passwordContainer.value.password;
    this.userService.createUser({
      id: Utils.getUniqueId(),
      name: formData.name.toString(),
      surname: formData.surname.toString(),
      email: formData.email.toString(),
      password: password.toString(),
      isAdmin: false,
    });
    this.router.navigate(['/signin']);
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPass').value;
    return pass === confirmPass ? null : {notSame: true};
  }

  // create(userData): void {
  //   this.userService.createPost({
  //     id: Utils.getUniqueId(),
  //     name: userData.name,
  //     surname: userData.surname,
  //     password: userData.password,
  //     isAdmin: userData.isAdmin,
  //   });
  // }
}

