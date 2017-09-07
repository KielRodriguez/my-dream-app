import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziScuare';
  lat:number = 19.2790452;
  lng:number = -99.1681434;
  negocios:any = [
    {plan: "pagado", cercania: 1, active: true, nombre: "Donas la pasadita"},
    {plan: "gratuito", cercania: 1, active: true, nombre: "Floreria la Gardenia"},
    {plan: "gratuito", cercania: 3, active: false, nombre: "Veterinaria Huellitas Felices"},
    {plan: "pagado", cercania: 1, active: true, nombre: "Floreria la Gardenia"},
    {plan: "gratuito", cercania: 2, active: true, nombre: "Donas la pasadita"},
    {plan: "pagado", cercania: 1, active: false, nombre: "Veterinaria Huellitas Felices"}
  ]
  constructor(){
  }
}
