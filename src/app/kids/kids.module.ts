import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';

import { KidsRoutingModule } from './kids-routing.module';
import { MessageComponent } from '../message/message.component';
import { KidsListComponent } from './kids-list/kids-list.component';
import { KidsEditComponent } from './kids-edit/kids-edit.component';

@NgModule({
  declarations: [
    MessageComponent,
    KidsListComponent,
    KidsEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    KidsRoutingModule,
    CardModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    TooltipModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    SelectButtonModule,
  ],
})
export class KidsModule { }
