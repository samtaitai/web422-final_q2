import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OntarioComponent } from './components/ontario/ontario.component';
import { QuebecComponent } from './components/quebec/quebec.component';
import { AlbertaComponent } from './components/alberta/alberta.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    OntarioComponent,
    QuebecComponent,
    AlbertaComponent,
    HomeComponent,
    ListComponent,
    NavBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
