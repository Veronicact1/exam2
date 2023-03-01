import { Component } from '@angular/core';
import { InfoPaginaService } from '../services/info-pagina.service';

@Component({
  selector: 'app-webcomponent',
  templateUrl: './webcomponent.component.html',
  styleUrls: ['./webcomponent.component.css']
})
export class WebcomponentComponent {
constructor (public infoService: InfoPaginaService){}
}