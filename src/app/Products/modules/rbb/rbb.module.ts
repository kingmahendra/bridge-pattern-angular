import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RbbComponent } from './rbb.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: RbbComponent
  }
]

@NgModule({
  declarations: [
    RbbComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RbbModule { }
