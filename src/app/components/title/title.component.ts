import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  titleService:Title=inject(Title)
  changeTitle(){
    let currentTitle=this.titleService.getTitle()
    console.log(currentTitle);
    
    this.titleService.setTitle(currentTitle+" : title changed :new value")
  }

}
