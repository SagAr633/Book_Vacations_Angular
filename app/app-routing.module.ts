import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { PropertiesComponent } from './pages/properties/properties.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'search/:id', component:SearchComponent},
  {path:'properties', component:PropertiesComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
