import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Note } from "src/app/models/note";

@Component({
  selector: "app-note-child",
  templateUrl: "./note-child.component.html",
  styleUrls: ["./note-child.component.css"]
})
export class NoteChildComponent implements OnInit {
  @Input() note: Note;
  @Output() noteUpdated: EventEmitter<Note> = new EventEmitter<Note>();
  @Output() noteDeleted: EventEmitter<Note> = new EventEmitter<Note>();

  constructor() {}

  ngOnInit() {}

  updateNote() {
    this.noteUpdated.emit(this.note);
  }

  deleteNote() {
    this.noteDeleted.emit(this.note);
  }
}
