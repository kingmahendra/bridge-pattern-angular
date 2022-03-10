import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IvbComponent } from './ivb.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: IvbComponent
  }
]

@NgModule({
  declarations: [
    IvbComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class IvbModule { }
