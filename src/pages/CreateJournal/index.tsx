import React, {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Button, Header, Input, JournalCard } from '../../components';
import { AuthContext } from '../../context/AuthContext';
import { Journal } from '../../interfaces/journal.interface';
import http from '../../services/api';
import theme from '../../styles/theme';
import { Container, InputContainer } from './styles';
import { Toaster, toast } from 'react-hot-toast';

/**
 * @export
 * @component
 * @name CreateJournal
 *
 *
 * @description
 * Create journal page
 */

export default function CreateJournal() {
  const [journal, setJournal] = useState('');
  const [error, setError] = useState(false);

  const { user, signOut } = useContext(AuthContext);

  const history = useHistory();

  let updateIdQuery = new URLSearchParams(useLocation().search).get('updateId');

  const getJournals = useCallback(() => {
    http.get(`/journals/${user.id}`).then((response: any) => {
      if (response) {
        const journalRes = (response.journals as Journal[]).filter(
          (journalRes) => journalRes.id === updateIdQuery
        )[0];

        setJournal(journalRes.title);
      } else {
        // eslint-disable-next-line
        updateIdQuery = null;
      }
    });
  }, []);
  useEffect(() => {
    if (updateIdQuery) {
      getJournals();
    }
  }, [getJournals, updateIdQuery]);
  const handleOnSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    if (!journal.trim().length) {
      setError(true)
      toast.error('Journal name is required!');
      return null;
    }

    if (!updateIdQuery) {
      const response = await http.post('/journals', {
        userId: user.id,
        title: journal,
      });

      if (!response) {
        setError(true)
        toast.error('failed creating the journal!');
        signOut();

        return null;
      }

      history.push('/journallist');
    } else {
      const response = await http.put(`/journals/${updateIdQuery}`, {
        userId: user.id,
        title: journal,
      });

      if (!response) {
        setError(true)
        toast.error('failed updating the journal!');

        return null;
      }

      history.push('/journallist');
    }
  };
  return (
    <>
      <Header />

      <Container>
        <JournalCard
          bigPartHeight="332.87px"
          smallPartHeight="332.87px"
          bigPartWidth="240px;"
          smallPartWidth="18.72px"
          bigPartColor={theme.colors.background}
          smallPartColor={theme.colors.background}
          title={journal}
        />

        <form onSubmit={handleOnSubmitForm}>
          <InputContainer>
            <Input
              type="text"
              value={journal}
              setValue={setJournal}
              label="Define a journal"
              id="journal"
            />
          </InputContainer>
          <Button>Save journal</Button>
        </form>
      </Container>

      {error && <Toaster position="top-right"></Toaster>}
    </>
  );
}
