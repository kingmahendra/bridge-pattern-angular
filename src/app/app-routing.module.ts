import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'ivb',
    loadChildren:() => import('./products/modules/ivb/ivb.module').then(m => m.IvbModule),
  },
  {
    path:'rbb',
    loadChildren:() => import('./products/modules/rbb/rbb.module').then(m => m.RbbModule),
  },
  {
    path:'rzb',
    loadChildren:() => import('./products/modules/rzb/rzb.module').then(m => m.RzbModule),
  },
  {
    path:'',
    redirectTo:'ivb',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
