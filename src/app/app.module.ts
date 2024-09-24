import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './pages/auth/auth.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { Page404 } from './components/errors/page-404/page-404.component';
import { Page403 } from './components/errors/page-403/page-403.component';
import { Page502 } from './components/errors/page-502/page-502.component';
import { IndexModule } from './pages/index/index.module';
import { BannerComponent } from './pages/index/components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Page404,
    Page403,
    Page502,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    IndexModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
