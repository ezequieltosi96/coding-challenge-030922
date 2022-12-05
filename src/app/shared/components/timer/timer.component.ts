import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {

  @Input()
  public completed: boolean = false;
  @Input()
  public playing: boolean = false;
  @Input()
  public remaining: number = 0;

  @Output()
  public timeSpentEvent: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('cd', { static: false }) 
  private countdown!: CountdownComponent;

  ngOnChanges(changes: SimpleChanges) {
    if(this.countdown && this.countdown.left) {
      if(changes["playing"].currentValue) {
        this.countdown.begin();
      }
      else{
        this.countdown.stop();
        let leftSeconds = this.remaining - (this.countdown.left / 1000);
        this.timeSpentEvent.emit(leftSeconds);
      }
    }
  }
  
}
