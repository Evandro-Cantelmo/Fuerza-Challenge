import React from 'react';
import { Button } from '../../components';
import EmptyState from '../../components/EmptyState';
import Header from '../../components/Header';
import { BoxContent, Container, GridContent, Plus } from './styles';

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
  let test = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Header>
        {test?.length && (
          <Button onOutline>
            <Plus />
            Add Note
          </Button>
        )}
      </Header>
      {test?.length < 1 ? (
        <EmptyState linkPath="/" linkLabel="Create a note" />
      ) : (
        <Container>
          <GridContent>
            {test?.map(() => (
              <BoxContent key=''>
                The h1, h2, h3, h4, h5, and h6 elements
                dfsdfsdfsdfsfdsdfsdfsdfasfasdfadfafasdasdasdasdasd
              </BoxContent>
            ))}
          </GridContent>
        </Container>
      )}
    </>
  );
}
