import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { trashFill } from 'ngx-bootstrap-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OntarioComponent } from './components/ontario/ontario.component';
import { QuebecComponent } from './components/quebec/quebec.component';
import { AlbertaComponent } from './components/alberta/alberta.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const icons = { trashFill };
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
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(icons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
