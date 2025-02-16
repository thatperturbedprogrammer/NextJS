"use client";

import { useState, useEffect } from "react";
import NoteForm from "@/components/NoteForm";

// Define the type for a single note
interface NoteType {
  id: number;
  title: string;
  content: string; // Renamed from 'notes' to match API
}

export default function Home() {
  const [notes, setNotes] = useState<NoteType[]>([]);
  // const [editingNote, setEditingNote] = useState<NoteType | null>(null);  // Track the note being edited

  // Read
  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  // Create
  const addNote = async (data: { title: string; content: string }) => {
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Now correctly passing an object
    });

    const newNote = await res.json();
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  // Delete
  const deleteNote = async (id: number) => {
    await fetch(`/api/notes/${id}`, {
      method: "DELETE",
    });
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold m-2">Notes</h1>
      <NoteForm onSubmit={addNote} />

      <h2 className="text-xl font-bold m-2 text-gray-800 bg-white">
        Your Notes:
      </h2>

      <ul>
        {notes.map((note) => (
          <li key={note.id} className="p-2 border my-2 flex justify-between">
            <div>
              <h2 className="font-bold">{note.title}</h2>
              <p>{note.content}</p>
            </div>
            <button
              onClick={() => deleteNote(note.id)}
              className="text-white bg-red-600 p-2 rounded "
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
