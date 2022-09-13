import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Button, NavBar, EmptyState, Header, Loading } from '../../components';

import { AuthContext } from '../../context/AuthContext';
import { Entry } from '../../interfaces/entry.interface';
import { Journal } from '../../interfaces/journal.interface';
import { INoteList } from '../../interfaces/noteList.interface';
import http from '../../services/api';
import { BoxContent, Container, GridContent, Plus } from './styles';
import { Toaster, toast } from 'react-hot-toast';

/**
 * @export
 * @component
 * @name ListNote
 *
 *
 * @description
 * ListNote page
 */

export default function ListNote() {
  const [journal, setJournal] = useState<Journal>();
  const [entries, setEntries] = useState<Entry[]>();
  const [error, setError] = useState(false);
  const { user, signOut } = useContext(AuthContext);

  const { journalId } = useParams<INoteList>();

  const history = useHistory();

  const handleEditJournal = () => {
    history.push(`/journallist/new/${journalId}?updateId=${journalId}`);
  };

  const addNote = () => {
    history.push(`/note/new/${journalId}`);
  };

  const getJournals = useCallback(() => {
    http.get(`/journals/${user.id}`).then((response: any) => {
      if (response) {
        setJournal(
          response.journals.filter(
            (journal: Journal) => journal.id === journalId
          )[0] || null
        );
      } else {
        setError(true);
        toast.error('failed fetching journals!');

        signOut();
      }
    });
  }, [user, journalId, signOut]);
  const getEntries = useCallback(() => {
    http.get(`/journals/entries/${journalId}`).then((response: any) => {
      if (response) {
        setEntries(response.entries as Entry[]);
      } else {
        setError(true);
        toast.error('failed fetching journals!');
      }
    });
  }, [journalId]);
  useEffect(() => {
    getJournals();
  }, [getJournals]);

  useEffect(() => {
    getEntries();
  }, [getEntries]);

  return (
    <>
      {error && <Toaster position="top-right"></Toaster>}
      <Header>
        <Button onClick={handleEditJournal} onOutline>
          Edit journal
        </Button>
      </Header>

      {entries?.length ? (
        <Container>
          <NavBar linkPath="/" title={journal?.title}>
            <Button onClick={addNote} onOutline>
              <Plus />
              Add note
            </Button>
          </NavBar>
          <GridContent>
            {entries?.map((entry) => (
              <Link to={`/journallist/${journalId}/${entry.id}`} key={entry.id}>
                <BoxContent>{entry.title}</BoxContent>
              </Link>
            ))}
          </GridContent>
        </Container>
      ) : entries ? (
        <EmptyState
          linkPath={`/note/new/${journalId}`}
          linkLabel="Create a note"
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
