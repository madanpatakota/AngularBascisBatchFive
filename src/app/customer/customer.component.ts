import { Component } from "@angular/core";
// "@angular/core": "^14.2.0",



// my plan is i wanted to write content , css , business logic
// @Component({
//      selector:"app-customer",
//      template : `<h1>hello world , this is the my firsta project.......</h1>
//      <input type = text value='Angular123'>`,
//      styles  :  ["h1{color:red}" , "input{ color : blue}"]
     
// })


@Component({
     selector:"app-customer",
     templateUrl : "../customer/customer.component.html",
     styleUrls   : ["../customer/customer.component.css"]
})

export class CustomerCompnonent{


     text = "This is the my first project";

     customerID = 10;


     customerName = "Clerk";

     inputtype = "radio";


     getProjectStatus(){
          return this.text;
     }

     status = true;


     getFired(){
           console.log("executed....") ; 
     }




       customerLocation = "New york";



       showMessage(msg:HTMLInputElement){
          console.log(msg.value);
          // console.log("Execuing");
       }





       employeeLocation = "Delhi";



       showEmpMessage(event:any){
          console.log(event);
          // console.log("Execuing");
       }



     

       employeeRole = "Admin";



       applyRedColor = true;

       applyBlueColor = true;



       isStatus = false;





       isStauts1 = false;


     


}

