import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaAutosComponent } from './autos/lista-autos/lista-autos.component';
import { DetalleAutosComponent } from './autos/detalle-autos/detalle-autos.component';
import { AEspacioPipe } from './shared/a-espacio.pipe';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EstrellasComponent } from './shared/estrellas/estrellas.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetalleAutoGuard } from './autos/detalle-auto.guard';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutosComponent,
    DetalleAutosComponent,
    AEspacioPipe,
    EstrellasComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      {path: "autos", component: ListaAutosComponent},
      {path: "auto/:id", component: DetalleAutosComponent,
      canActivate: [DetalleAutoGuard] },
      {path: "welcome", component: WelcomeComponent},
      {path: "", redirectTo: "welcome", pathMatch: "full"},
      {path: "**", redirectTo: "welcome", pathMatch: "full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
