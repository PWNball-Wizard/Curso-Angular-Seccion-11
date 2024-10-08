import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';

const routes: Routes = [
  {
    path:'',
    component: BasicsPageComponent
  }, 
  {
    path:'uncommon',
    component: CommonPageComponent
  },
  {
    path:'numbers',
    component: NumbersPageComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
