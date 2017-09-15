import { Component } from '@angular/core';
import { LugaresService} from '../services/lugares.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'PlatziScuare';
  lat:number = 19.2790452;
  lng:number = -99.1681434;
  lugares:FirebaseListObservable<any>;
  
  constructor( private lugaresService: LugaresService ){
    this.lugares = lugaresService.getLugares()
      .subscribe( lugares =>  {
        console.log(typeof lugares)
        console.log(lugares)
        this.lugares = lugares;
      })
  }
}
