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
import { FormsModule } from '@angular/forms';
import { ButtonCreateComponent } from './libreria/button-create/button-create.component';
import { UpdateButtonComponent } from './libreria/update-button/update-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    GridComponent,
    CardComponent,
    ButtonDeleteComponent,
    FormularioComponent,
    ButtonCreateComponent,
    UpdateButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibreriaModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
