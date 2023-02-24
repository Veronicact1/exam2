import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExComponent } from './ex/ex.component';
import { WebcomponentComponent } from './webcomponent/webcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ExComponent,
    WebcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
