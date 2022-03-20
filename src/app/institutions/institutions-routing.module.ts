import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionsListComponent } from './institutions-list/institutions-list.component';

const routes: Routes = [
  {
    path: '', component: InstitutionsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionsRoutingModule { }
