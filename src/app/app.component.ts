import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit{
  title = 'Paul Angular';
  parentMessage:string = 'Message coming from parent component'
  message!: string;
  @ViewChild(PostComponent)
  childComp!: { childMessage: string; };
  constructor(){
    console.log(this.childComp);
  }
  ngAfterViewInit(): void {
      console.log(this.childComp);
      this.message = this.childComp.childMessage;
  }

}
