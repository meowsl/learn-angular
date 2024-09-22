import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { RegistrationComponent } from './components/registration/registration.component'
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AuthenticationComponent } from './components/authentication/authentication.component'

@NgModule({
  declarations: [
    RegistrationComponent,
    AuthorizationComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthModule { }
