import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardviewComponent } from './cardview/cardview.component';
import { ListviewComponent } from './listview/listview.component';

const routes: Routes = [
  { path: 'cardview', component: CardviewComponent },
  { path: 'listview', component: ListviewComponent },
  { path: '',   redirectTo: '/cardview', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
