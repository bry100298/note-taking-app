import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

interface NotesListProps {
  notes: {
    id: number;
    text: string;
    date: string;
  }[];
  handleAddNote: (noteText: string) => void;
  handleDeleteNote: (id: number) => void;
}

const NotesList: React.FC<NotesListProps> = ({
  notes,
  handleAddNote,
  handleDeleteNote,
}) => {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <Note
          key={note.id} // Add a 'key' prop for the map function
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
