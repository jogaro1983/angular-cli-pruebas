import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Rutas
import {routing, appRoutingProviders} from 'app/app.routing';


// Componentes
import { AppComponent } from './app.component';
import { HomeComponent} from './components/home.component';
import { ErrorComponent} from './components/error.component';
import { NoticiasComponent} from './components/noticia.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
