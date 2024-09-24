import { Component } from '@angular/core';

@Component({
  selector: 'auth-page',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationPage {
  public isRegistration: boolean = false

  protected toggleForm(): void {
    this.isRegistration = !this.isRegistration
  }
}
