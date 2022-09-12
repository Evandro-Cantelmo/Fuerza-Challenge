import React from 'react';
import { Button } from '../../components';
import EmptyState from '../../components/EmptyState';
import Header from '../../components/Header';
import JournalCard from '../../components/JournalCard';
import theme from '../../styles/theme';
import { Container, GridContent, Plus } from './styles';

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
  let test = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Header>{test?.length && <Button onOutline><Plus/>Add Journal</Button>}</Header>
      {test?.length < 1 ? (
        <EmptyState linkPath="/" linkLabel="Create a journal" />
      ) : (
        <Container>
          <GridContent>
            {test?.map((tes, index) => (
              <JournalCard
                key=""
                bigPartHeight="201px"
                smallPartHeight="201px"
                bigPartWidth="144.92px"
                smallPartWidth="11.31px"
                link
                linkPath="/"
                bigPartColor={
                  index % 2 == 0
                    ? theme.colors.blue.tertiary
                    : theme.colors.blue.primary
                }
                letterColor={index % 2 == 0 ? '' : theme.colors.white}
                smallPartColor={theme.colors.blue.secondary}
                title="test"
              />
            ))}
          </GridContent>
        </Container>
      )}
    </>
  );
}
