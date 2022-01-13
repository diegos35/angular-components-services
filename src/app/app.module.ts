import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';


import { FormsModule } from '@angular/forms'; //para utilizar el [(ngMOdel)]
@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //importarlo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
