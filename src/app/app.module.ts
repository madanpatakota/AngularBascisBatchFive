import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerCompnonent} from './customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCompnonent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CustomerCompnonent]
})



//AppModule
export class AppModule { }



//main file will be triggered   -- here i can see the what is the module getting triggered
//bootstrap: [AppComponent] 

