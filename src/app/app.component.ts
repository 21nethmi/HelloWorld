import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./Login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, DashboardComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputValue:String='';
  title:String = 'HelloWorld';
  imageUrl:String = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbOFmjGchTMwQriXqezOovYKqXWK3YXUnFlQ&s';

  isDisable:boolean=true;

  ariaLabelTxt = "this is a button,when clicking it open";
  colSpan=2;
  color="blue";
  isActive:boolean=false;
  name:string="nemo1";
  clickNote:string="clickeddd";
  twoWayVal:string='';

  buttonClicked(){
   console.log("Button clicked");
   this.clickNote="clickeeedd";
  }

  inputEvent(event:KeyboardEvent){
    console.log(event.key);
    console.log(event.keyCode);
    if(event.keyCode == 13){
      console.log("Enter key pressed");
    }
  }
  KeyDownClicked(){
         console.log("Enter clicked");
  }

  keyPressed(input:HTMLInputElement){
    this.inputValue=input.value;
    console.log(input.value);
  }
}



