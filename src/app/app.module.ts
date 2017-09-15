import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective} from './directives/resaltar.directive';
import { ContarClicks } from './directives/contar-clicks.directive';
import { DetalleComponent } from './detalle/detalle.component'
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearComponent } from './crear/crear.component';
import { LugaresService } from './services/lugares.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

const appRoutes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'nuevo', component: CrearComponent }
]

export const firebaseConfig = {
  apiKey: "AIzaSyAzQVOPrCMBE_ZiumkUlRCJcfR0SievAYs",
  authDomain: "my-dream-app-1504810321652.firebaseapp.com",
  databaseURL: "https://my-dream-app-1504810321652.firebaseio.com",
  storageBucket: "my-dream-app-1504810321652.appspot.com",
  messagingSenderId: "280027196460"
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicks,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCULxSOKfiAvUmVTqZ1Mlxpbb5Tsk8C7lA'
    }),
    BrowserAnimationsModule,
    RouterModule.forRoot( appRoutes ),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [ LugaresService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
