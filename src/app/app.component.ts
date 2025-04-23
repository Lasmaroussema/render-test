import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
imports:[RouterOutlet,CommonModule],
styleUrls:['./app.component.css'],
templateUrl:'./app.component.html',
standalone:true,
selector:'app-root'
})
export class AppComponent{
    answered:boolean=false;
}