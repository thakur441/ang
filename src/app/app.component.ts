import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hello:string='';

 sayHello(){
   alert('h'+this.hello);
 }
 
}
