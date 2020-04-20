import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-widget',
  templateUrl: './note-widget.component.html',
  styleUrls: ['./note-widget.component.css'],
})
export class NoteWidgetComponent implements OnInit {
  noteInfo = {
    date: new Date(2020, 3, 13),
    notes: ['text', '123'],
  };

  deleteNote(addedNoteText: HTMLSpanElement): void {
    this.noteInfo.notes.splice(
      this.noteInfo.notes.indexOf(addedNoteText.firstChild.textContent),
      1
    );
  }

  addNoteText(noteText: HTMLInputElement): void {
    this.noteInfo.notes.push(noteText.value);

    noteText.value = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
