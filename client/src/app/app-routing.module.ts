import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDatailComponent } from './components/product-datail/product-datail.component';

const routes: Routes = [
  { path: 'product/:id', component: ProductDatailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
