import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// Rutas
import { APP_ROUTES } from "./app.routes";

// Componentes
import { AppComponent } from "./app.component";
import { FotosComponent } from "./componentes/fotos/fotos.component";
import { CargaComponent } from "./componentes/carga/carga.component";

// Servicios
import { CargaImagenesService } from "./services/carga-imagenes.service";

// Firebase
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from "src/environments/environment";

@NgModule({
  declarations: [AppComponent, FotosComponent, CargaComponent],
  imports: [
    BrowserModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // AngularFireAuthModule,
  ],
  providers: [CargaImagenesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
