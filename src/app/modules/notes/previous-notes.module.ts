import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoteWidgetComponent } from './note-widget/note-widget.component';
import { PreviousNotesComponent } from './previous-notes/previous-notes.component';
import { ViewNotesComponent } from './view-notes/view-notes.component';

import { PreviousNotesRoutingModule } from './previous-notes-routing.module';
import { BackgroundDirective } from 'src/app/directives/background.directive';

import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    NoteWidgetComponent,
    PreviousNotesComponent,
    ViewNotesComponent,
    BackgroundDirective,
    NoteComponent,
  ],
  imports: [
    CommonModule,
    PreviousNotesRoutingModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
})
export class PreviousNotesModule {}
