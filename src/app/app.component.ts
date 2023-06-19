import { Component, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
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
  childComp!: PostComponent;
  constructor(private changeDetectorRef: ChangeDetectorRef){}
  ngAfterViewInit(): void {
    this.message = this.childComp.childMessage;
    this.changeDetectorRef.detectChanges();
  }
  receiveMessage($event: any) {
console.log($event);
  }
}
