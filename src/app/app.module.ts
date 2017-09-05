import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Mytest1componentComponent } from './mytest1component/mytest1component.component';

@NgModule({
  declarations: [
    AppComponent,
    Mytest1componentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
