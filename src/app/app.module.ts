import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
 * khai báo cái FormsModule để thực hiện twoway binding
 */
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  /**
   * components thì khai báo vào declarations
   */
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  /**
   * cái nào Module thì khai báo vào imports
   */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
