import { Component } from '@angular/core';
import { HttpProjectService } from './http-project.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Http';

Name:string="";
  constructor(private myService: HttpProjectService){}

ngOnit(){}

  getName():void{

    this.myService.getName().subscribe((nameE:any)=>{
      this.Name=nameE.name; 
      console.log(this.Name)
    })


    
  }

}
