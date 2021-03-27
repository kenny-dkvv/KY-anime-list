import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"anime/:id",
    component: DetailComponent
  },
  {
    path:"search",
    component: SearchComponent
  },
  {
    path:"about",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
