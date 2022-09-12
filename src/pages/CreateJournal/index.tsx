import React, { useState } from 'react';

import { Button, Header, Input, JournalCard } from '../../components';
import theme from '../../styles/theme';
import { Container, InputContainer } from './styles';

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
  return (
    <>
      <Header></Header>

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
      </Container>
    </>
  );
}
