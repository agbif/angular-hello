import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdsComponent } from './ads/ads.component';
import { BindingComponent } from './binding/binding.component';
import { InputComponent } from './binding/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    AdsComponent,
    BindingComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
