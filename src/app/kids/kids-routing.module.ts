import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidsListComponent } from './kids-list/kids-list.component';
import { KidsEditComponent } from './kids-edit/kids-edit.component';

const routes: Routes = [
  {
    path: '',
    component: KidsListComponent
  },
  {
    path: 'new',
    component: KidsEditComponent
  },
  {
    path: ':id',
    component: KidsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
