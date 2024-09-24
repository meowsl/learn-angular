import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexPage } from './components/index/index.component';
import { BannerComponent } from './components/banner/banner.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    IndexPage,
    BannerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    IndexPage,
    BannerComponent
  ]
})
export class IndexModule { }
