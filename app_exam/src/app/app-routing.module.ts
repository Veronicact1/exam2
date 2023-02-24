import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExComponent } from './ex/ex.component';
import { WebcomponentComponent } from './webcomponent/webcomponent.component';

const routes: Routes = [{ path: 'ex', component: ExComponent},
{path: 'webcomponent', component: WebcomponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
