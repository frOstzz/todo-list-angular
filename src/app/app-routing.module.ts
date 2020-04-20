import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewNotesComponent } from './modules/notes/view-notes/view-notes.component';

export const routes: Routes = [
  { path: '', component: ViewNotesComponent },
  {
    path: 'previous',
    loadChildren: () =>
      import('./modules/notes/previous-notes.module').then(
        (m) => m.PreviousNotesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
