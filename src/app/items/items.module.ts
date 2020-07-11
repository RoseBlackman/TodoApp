import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayListComponent } from './display/display-list.component';
import { DisplayCardComponent } from './display/dislay-card.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DisplayListComponent,
    DisplayCardComponent,
    AddItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddItemComponent,
    DisplayListComponent,
    DisplayCardComponent
  ]
})
export class ItemsModule { }
