import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [TableComponent, FormComponent, HelloComponent],
  imports: [
    CommonModule
  ],
  exports: [TableComponent, FormComponent, HelloComponent]
})
export class SharedModule { }