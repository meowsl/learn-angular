import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
  public isRegistration: boolean = false

  protected toggleForm(): void {
    this.isRegistration = !this.isRegistration
  }
}
