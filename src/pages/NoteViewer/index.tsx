import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Header, NavBar } from '../../components';
import { AuthContext } from '../../context/AuthContext';
import { Entry } from '../../interfaces/entry.interface';
import { Journal } from '../../interfaces/journal.interface';
import { INoteViewer } from '../../interfaces/noteviewer.interface';
import http from '../../services/api';
import { Container } from './styles';
/**
 * @export
 * @component
 * @name NoteViewer
 *
 *
 * @description
 * Note viewer
 */

export default function NoteViewer() {
  const [journal, setJournal] = useState<Journal>();
  const [entry, setEntry] = useState<Entry | null>();

  const { user, signOut } = useContext(AuthContext);

  const { journalId, noteId } = useParams<INoteViewer>();

  const history = useHistory();

  const editNote = () => {
    history.push(`/note/new/${journalId}?updateId=${entry?.id}`);
  };

  const getJournals = useCallback(() => {
    http.get(`/journals/${user.id}`).then((response: any) => {
      if (!response) {
        console.log('failed fetching journals!');

        signOut();

        return null;
      }

      setJournal(
        response.journals.filter(
          (journal: Journal) => journal.id === journalId
        )[0] || null
      );
    });
  }, [user, journalId, signOut]);

  const getEntries = useCallback(() => {
    if (journal === null) {
      setEntry(null);
    }
    if (journal) {
      http.get(`/journals/entries/${journalId}`).then((response: any) => {
        if (!response) {
          console.log('failed fetching entries!');
          return;
        }

        setEntry(
          response.entries.filter((note: Entry) => note.id === noteId)[0] ||
            null
        );
      });
    }
  }, [journal, noteId, journalId]);

  useEffect(() => {
    getJournals();
  }, [getJournals]);

  useEffect(() => {
    getEntries();
  }, [journal, getEntries]);

  return (
    <>
      <Header>
        <Button onClick={editNote} onOutline>
          Edit note
        </Button>
      </Header>
      <Container>
        <NavBar linkPath={`/journallist/${journalId}`} title={journal?.title} />
        <h1>{entry?.title}</h1>
        <p>{entry?.content}</p>
      </Container>
    </>
  );
}
