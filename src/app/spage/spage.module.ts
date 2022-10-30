import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { SpageComponent } from './spage.component';



@NgModule({
  declarations: [SpageComponent],
  imports: [
    CommonModule, LayoutModule
  ]
})
export class SpageModule { }
