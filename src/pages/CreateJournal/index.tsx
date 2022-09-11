import React from 'react';
import EmptyState from '../../components/EmptyState';
import Header from '../../components/Header';

/**
 * @export
 * @component
 * @name CreateJournal
 *
 *
 * @description
 * CreateJournal page
 */

export default function CreateJournal() {
  return (
    <>
      <Header></Header>
      <EmptyState linkPath="/" linkLabel="Create a journal" />
    </>
  );
}
