import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  @Input() noteItem;
  @Output() deleted = new EventEmitter();

  isDelete() {
    this.deleted.emit('complete');
  }

  constructor() {}

  ngOnInit(): void {}
}
