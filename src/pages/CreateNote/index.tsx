import React, { ChangeEvent, useState } from 'react';
import { Button, Header, NavBar } from '../../components';
import { Container } from './styles';

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Header />
      <Container>
        <NavBar title="HTML"/>
        <input placeholder="Title" onChange={handleTitle} value={title}></input>
        <textarea
          placeholder="Write your note"
          onChange={handleText}
          value={content}
        ></textarea>
        <Button>Save note</Button>
      </Container>
    </>
  );
}
