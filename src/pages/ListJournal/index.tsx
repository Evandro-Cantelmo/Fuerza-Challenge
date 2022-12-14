import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  EmptyState,
  Header,
  JournalCard,
  Loading,
} from '../../components';

import { AuthContext } from '../../context/AuthContext';
import { Journal } from '../../interfaces/journal.interface';
import http from '../../services/api';
import theme from '../../styles/theme';
import { Container, GridContent, Plus } from './styles';
import { Toaster, toast } from 'react-hot-toast';

/**
 * @export
 * @component
 * @name ListJournal
 *
 *
 * @description
 * ListJournal page
 */

export default function ListJournal() {
  const [journals, setJournals] = useState<Journal[]>();
  const [error, setError] = useState(false);
  const history = useHistory();

  const { user, signOut } = useContext(AuthContext);

  const addJournal = () => {
    history.push('/journallist/new');
  };
  const getJournals = useCallback(() => {
    http.get(`/journals/${user.id}`).then((response: any) => {
      if (response) {
        const { journals } = response;

        setJournals(journals as Journal[]);
      } else {
        setError(true);
        toast.error('Something went wrong! Please sign up and sign in again!');

        signOut();
      }
    });
  }, [signOut, user]);

  useEffect(() => {
    getJournals();
  }, [getJournals]);
  return (
    <>
      {error && <Toaster position="top-right"></Toaster>}
      <Header>
        {journals?.length && (
          <Button onClick={addJournal} onOutline>
            <Plus />
            Add Journal
          </Button>
        )}
      </Header>
      {journals?.length ? (
        <Container>
          <GridContent>
            {journals?.map((tes, index) => (
              <JournalCard
                id={tes.id}
                key={tes.id}
                bigPartHeight="201px"
                smallPartHeight="201px"
                bigPartWidth="144.92px"
                smallPartWidth="11.31px"
                link
                linkPath={`/journallist/${tes.id}`}
                bigPartColor={
                  index % 2 === 0
                    ? theme.colors.blue.tertiary
                    : theme.colors.blue.primary
                }
                letterColor={index % 2 === 0 ? '' : theme.colors.white}
                smallPartColor={theme.colors.blue.secondary}
                title={tes.title}
              />
            ))}
          </GridContent>
        </Container>
      ) : journals ? (
        <EmptyState linkPath="/journallist/new" linkLabel="Create a journal" />
      ) : (
        <Loading></Loading>
      )}
    </>
  );
}
