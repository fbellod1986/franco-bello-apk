import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosProductosComponent } from './datos-productos.component';

const routes: Routes = [{ path: '', component: DatosProductosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatosProductosRoutingModule { }
