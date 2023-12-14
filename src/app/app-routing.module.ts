import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OntarioComponent } from './components/ontario/ontario.component';
import { QuebecComponent } from './components/quebec/quebec.component';
import { AlbertaComponent } from './components/alberta/alberta.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ontario',
    component: OntarioComponent,
  },
  {
    path: 'quebec',
    component: QuebecComponent,
  },
  {
    path: 'alberta',
    component: AlbertaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
