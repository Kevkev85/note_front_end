import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { NotesComponent } from "./notes/notes.component";
import { NotFoundComponent } from "./not-found/not-found.component";

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NoteChildComponent } from "./notes/note-child/note-child.component";
import { NoteTextFilterPipe } from './shared/note-text-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedbackComponent,
    NotesComponent,
    NotFoundComponent,
    NoteChildComponent,
    NoteTextFilterPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
