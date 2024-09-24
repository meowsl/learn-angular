import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPage } from './pages/auth/components/authentication/authentication.component';
import { Page404 } from './components/errors/page-404/page-404.component';
import { IndexPage } from './pages/index/components/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPage
  },
  {
    path: 'auth',
    component: AuthenticationPage
  },
  {
    path: '**',
    component: Page404
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
