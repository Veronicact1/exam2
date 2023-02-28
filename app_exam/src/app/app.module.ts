import { HttpClientModule } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ExComponent } from './ex/ex.component';
import { WebcomponentComponent } from './webcomponent/webcomponent.component';
@Injectable({providedIn:'root'})

@NgModule({
  declarations: [
    ExComponent,
    WebcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
})
export class AppModule { }
