import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ExComponent } from './ex/ex.component';
import { WebcomponentComponent } from './webcomponent/webcomponent.component';

@NgModule({
  declarations: [
    ExComponent,
    WebcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
})
export class AppModule { }
