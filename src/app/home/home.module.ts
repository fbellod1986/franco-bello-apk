import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { InAppBrowser } from "@awesome-cordova-plugins/in-app-browser/ngx";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    InAppBrowser
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
