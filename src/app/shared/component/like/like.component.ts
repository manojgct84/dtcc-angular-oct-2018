import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  // <app-like [(likes)]="homeLikes"
  @Input()
  likes: number;

  @Output()
  likesChange: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  incr() {
    this.likesChange.emit(this.likes + 1);
  }

}
