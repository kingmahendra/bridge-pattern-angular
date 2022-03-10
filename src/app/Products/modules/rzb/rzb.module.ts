import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RzbComponent } from './rzb.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: RzbComponent
  }
]

@NgModule({
  declarations: [
    RzbComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RzbModule { }
