import { Component } from '@angular/core';
import { ModalLoginService } from './modal-login/modal-login.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, FacebookLoginProvider,GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diplomaApp';

  signinForm: FormGroup;
  user: SocialUser;
  loggedIn: boolean;  

    constructor(private modalLoginService: ModalLoginService, private fb: FormBuilder, private authService: AuthService) { }

    ngOnInit() {
      this.loggedIn = false;
  this.signinForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });    this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);
    console.log(this.user);
  });
    }

    openModal(id: string) {
        this.modalLoginService.open(id);
    }

    closeModal(id: string) {
        this.modalLoginService.close(id);
    }

    signInWithGoogle(): void {
      this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    }
    signOut(): void {
      this.authService.signOut();
    }

    
}
