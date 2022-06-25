import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { StatuesListComponent } from './components/statues-list/statues-list.component';
import { StatuePageComponent } from './components/statue-page/statue-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full' 
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'statues-list',
    component: StatuesListComponent
  },
  {
    path: 'statues-list/:id',
    component: StatuePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
