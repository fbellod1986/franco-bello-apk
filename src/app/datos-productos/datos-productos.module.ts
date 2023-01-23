import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosProductosRoutingModule } from './datos-productos-routing.module';
import { DatosProductosComponent } from './datos-productos.component';

import { IonicModule } from '@ionic/angular';
import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser/ngx";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DatosProductosComponent,
  ],
  providers: [
    InAppBrowser
  ],
  imports: [
    CommonModule,
    DatosProductosRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class DatosProductosModule { }
