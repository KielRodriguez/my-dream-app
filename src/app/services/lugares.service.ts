import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

@Injectable()
export class LugaresService {
    lugares:FirebaseListObservable<any>;

    public getLugares() {
        this.lugares = this.afDB.list('lugares/');
        return this.lugares;
    }

    public buscarLugar(id) {
        //return this.lugares.filter((lugar) => { return lugar.id == id }) [0] || null;
    }

    public guardarLugar(lugar:any) {
        this.afDB.database.ref('lugares/' + lugar.id ).set(lugar)
    }

    constructor(private afDB:AngularFireDatabase) {
        
    }
}