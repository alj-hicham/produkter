import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduktComponent} from './produkt/produkt.component';
import {AddproduktComponent} from './addprodukt/addprodukt.component';


const routes: Routes = [
  {
    path:"produkts" , component:ProduktComponent

  },
  {
    path:"addingprodukt" , component:AddproduktComponent
  },
  {
    path:"",redirectTo:"/produkts",pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
