import { Component, OnInit } from '@angular/core';
import { nanoid } from 'nanoid';

@Component({
  selector: 'app-view-notes',
  templateUrl: './view-notes.component.html',
  styleUrls: ['./view-notes.component.css'],
})
export class ViewNotesComponent implements OnInit {
  widgets: [{ id: string }] = [{ id: nanoid() }];

  addNoteWidget() {
    this.widgets.push({
      id: nanoid(),
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
