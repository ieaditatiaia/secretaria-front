import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutionsRoutingModule } from './institutions-routing.module';
import { InstitutionsService } from './institutions.service';
import { InstitutionsListComponent } from './institutions-list/institutions-list.component';


@NgModule({
  declarations: [
    InstitutionsListComponent
  ],
  imports: [
    CommonModule,
    InstitutionsRoutingModule
  ],
  providers: [
    InstitutionsService
  ]
})
export class InstitutionsModule { }
