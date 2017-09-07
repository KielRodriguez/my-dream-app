import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective} from './directives/resaltar.directive'
import { ContarClicks } from './directives/contar-clicks.directive'

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicks
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCULxSOKfiAvUmVTqZ1Mlxpbb5Tsk8C7lA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
