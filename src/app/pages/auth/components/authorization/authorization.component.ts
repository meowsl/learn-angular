import { Component } from '@angular/core'
import { AuthenticationData } from '../../models/auth'

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {

  protected authData: AuthenticationData = {
    email: '',
    password: ''
  }

  protected getAuthData(data: AuthenticationData): void {
    console.log(`${data.email}, ${data.password}`)
  }

}
