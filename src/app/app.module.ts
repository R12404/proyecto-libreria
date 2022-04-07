import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './libreria/header/header.component';
import { MainComponent } from './libreria/main/main.component';
import { GridComponent } from './libreria/grid/grid.component';
import { CardComponent } from './libreria/card/card.component';
import { LibreriaModule } from './libreria/libreria/libreria.module';
import {HttpClientModule} from '@angular/common/http';
import { ButtonDeleteComponent } from './libreria/button-delete/button-delete.component';
import { FormularioComponent } from './libreria/formulario/formulario.component'
import { NgModel } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    GridComponent,
    CardComponent,
    ButtonDeleteComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibreriaModule,
    HttpClientModule,
    NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
