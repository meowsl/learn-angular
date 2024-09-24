import { Component } from '@angular/core';
import { AuthenticationData } from '../../models/auth';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  protected registrationForm: AuthenticationData = {
    email: '',
    password: ''
  }

  protected sendRegistration(data: AuthenticationData): void {
    console.log(`${data.email}, ${data.password}`)
  }
}
