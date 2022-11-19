import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerCompnonent} from './customer/customer.component';
import { CustomersComponent } from './customers/customers.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCompnonent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})



//AppModule
export class AppModule { }



//main file will be triggered   -- here i can see the what is the module getting triggered
//bootstrap: [AppComponent] 

