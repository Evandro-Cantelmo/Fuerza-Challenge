import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Button, Header, NavBar } from '../../components';
import { AuthContext } from '../../context/AuthContext';
import { ICreateNote } from '../../interfaces/createnote.interface';
import { Entry } from '../../interfaces/entry.interface';
import { Journal } from '../../interfaces/journal.interface';
import http from '../../services/api';
import { Container, InputContainer } from './styles';
import { Toaster, toast } from 'react-hot-toast';

/**
 * @export
 * @component
 * @name CreateNote
 *
 *
 * @description
 * Creation note page
 */

export default function CreateNote() {
  const [content, setContent] = useState('');

  const [noteName, setNoteName] = useState('');
  const [journal, setJournal] = useState<Journal>();
  const [error, setError] = useState(false);

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setNoteName(e.target.value);
  };
  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const history = useHistory();

  const { user, signOut } = useContext(AuthContext);

  const { journalId } = useParams<ICreateNote>();

  let updateIdQuery = new URLSearchParams(useLocation().search).get('updateId');

  const handleOnSubmitForm = async (e: FormEvent) => {
    e.preventDefault();

    if (noteName.trim() === '' || content.trim() === '') {
      if (noteName.trim() === '') {
        setError(true);
        toast.error('Name is required!');
      }

      if (content.trim() === '') {
        setError(true);
        toast.error('Content is required!');
      }
      return null;
    }

    if (!updateIdQuery) {
      const response = await http.post(`/journals/entry/${journalId}`, {
        title: noteName,
        content: content,
      });

      if (!response) {
        setError(true);
        toast.error('failed creating the note!');
        return null;
      }

      history.push(`/journallist/${journalId}`);
    } else {
      const response = await http.put(`/journals/entry/${updateIdQuery}`, {
        title: noteName,
        content: content,
      });

      if (!response) {
        setError(true);
        toast.error('failed updating the note!');
        return null;
      }

      history.push(`/journallist/${journalId}/${updateIdQuery}`);
    }
  };

  const getJournals = useCallback(() => {
    http.get(`/journals/${user.id}`).then((response: any) => {
      if (!response) {
        setError(true);
        toast.error('failed fetching journals on creating note!');
        signOut();
        return null;
      }

      if (updateIdQuery) {
        http.get(`/journals/entries/${journalId}`).then((response: any) => {
          if (response) {
            const entry = (response.entries as Entry[]).filter(
              (entry) => entry.id === updateIdQuery
            )[0];

            setNoteName(entry.title);
            setContent(entry.content);
          } else {
            // eslint-disable-next-line
            updateIdQuery = null;
          }
        });
      }

      setJournal(
        response.journals.filter(
          (journal: Journal) => journal.id === journalId
        )[0] || null
      );
    });
  }, []);

  useEffect(() => {
    getJournals();
  }, [getJournals]);

  return (
    <>
      {error && <Toaster position="top-right"></Toaster>}
      <Header />
      <Container>
        <NavBar linkPath={`/journallist/${journalId}`} title={journal?.title} />
        <form onSubmit={handleOnSubmitForm}>
          <InputContainer>
            <input
              placeholder="Title"
              onChange={handleTitle}
              value={noteName}
            ></input>
            <textarea
              placeholder="Write your note"
              onChange={handleText}
              value={content}
            ></textarea>
            <Button>Save note</Button>
          </InputContainer>
        </form>
      </Container>
    </>
  );
}
