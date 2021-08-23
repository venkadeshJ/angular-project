import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestsellerComponent } from './bestseller/bestseller.component';

const routes: Routes = [
  {path:'bestseller',component:BestsellerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BestsellerComponent]
