import { Component, OnInit } from "@angular/core";
import { Notebook } from "../models/Notebook";
import { ApiService } from "../shared/api.service";
import { Note } from "../models/note";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  notebooks: Notebook[] = [];
  notes: Note[] = [];
  selectedNotebook: Notebook;
  searchText: string;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllNotebooks();
    this.getAllNotes();
  }

  getAllNotebooks() {
    this.apiService.getAllNotebooks().subscribe(
      res => {
        this.notebooks = res;
      },
      err => {
        alert("An error occured;");
      }
    );
  }

  getAllNotes() {
    this.apiService.getAllNotes().subscribe(
      res => {
        this.notes = res;
      },
      err => {
        alert("Error occured while retrieving notes!!!!");
      }
    );
  }

  createNotebook() {
    let newNotebook: Notebook = {
      name: "New notebook",
      id: null,
      nbOfNotes: 0
    };

    this.apiService.postNotebook(newNotebook).subscribe(
      res => {
        newNotebook.id = res.id;
        this.notebooks.push(newNotebook);
      },
      err => {
        alert("An error has occured while saving the notebook!!!!!!");
      }
    );
  }

  updateNotebook(updatedNotebook: Notebook) {
    this.apiService.postNotebook(updatedNotebook).subscribe(
      res => {},
      err => {
        alert("An error has occured while updating the note notebook");
      }
    );
  }

  deleteNotebook(notebook: Notebook) {
    if (confirm("Are you sure you want to delete the notebook")) {
      this.apiService.deleteNotebook(notebook.id).subscribe(
        res => {
          let indexOfNotebook = this.notebooks.indexOf(notebook);
          this.notebooks.splice(indexOfNotebook, 1);
        },
        err => {
          alert("Could not delete notebook");
        }
      );
    }
  }

  deleteNote(note: Note) {
    if (confirm("Are you sure you want to delete this note?")) {
      this.apiService.deleteNote(note.id).subscribe(
        res => {
          let indexOfNote = this.notes.indexOf(note);
          this.notes.splice(indexOfNote, 1);
        },
        err => {
          alert("An error has occured while deleting the note");
        }
      );
    }
  }

  createNote(notebookId: string) {
    let newNote: Note = {
      id: null,
      title: "New Note",
      text: "Write some text in here",
      lastModifiedOn: null,
      notebookId: notebookId
    };

    this.apiService.saveNote(newNote).subscribe(
      res => {
        newNote.id = res.id;
        this.notes.push(newNote);
      },
      err => {
        alert("An error occured while saving the note");
      }
    );
  }

  updateNote(updatedNote: Note) {
    this.apiService.saveNote(updatedNote).subscribe(
      res => {},
      err => {
        alert("An error occured while updating the note");
      }
    );
  }

  selectNotebook(notebook: Notebook) {
    this.selectedNotebook = notebook;
    this.apiService.getNotesbyNotebook(notebook.id).subscribe(
      res => {
        this.notes = res;
      },
      err => {
        alert("An error has occured while dowloading the notes");
      }
    );
  }

  selectAllNotes() {
    this.selectedNotebook = null;
    this.getAllNotes();
  }
}
