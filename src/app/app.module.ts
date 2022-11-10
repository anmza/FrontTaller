import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './publico/plantilla/header/header.component';
import { NavbarComponent } from './publico/plantilla/navbar/navbar.component';
import { FooterComponent } from './publico/plantilla/footer/footer.component';
import { NotFoundComponent } from './publico/error/not-found/not-found.component';
import { InternalServerErrorComponent } from './publico/error/internal-server-error/internal-server-error.component';
import { HomeComponent } from './publico/general/home/home.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
