import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  @Input() noteItem: string;
  @Output() deleted = new EventEmitter<string>();

  isDeleted(value: string) {
    this.deleted.emit(value);
  }

  constructor() {}

  ngOnInit(): void {}
}
