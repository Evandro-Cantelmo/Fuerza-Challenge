import React from 'react';
import { Link } from 'react-router-dom';
import { IJournalCard } from '../../interfaces/journalcard.interface';
import { BigCard, Content } from './styles';

export default function JournalCard({
  id,
  link,
  linkPath,
  title,
  smallPartColor,
  bigPartColor,
  smallPartHeight,
  smallPartWidth,
  bigPartHeight,
  bigPartWidth,
  letterColor,
}: IJournalCard) {
  return link ? (
    <Link to={linkPath || '/'}>
      <BigCard
        id={id}
        smallPartHeight={smallPartHeight}
        smallPartWidth={smallPartWidth}
        bigPartHeight={bigPartHeight}
        bigPartWidth={bigPartWidth}
        bigPartColor={bigPartColor}
        smallPartColor={smallPartColor}
        letterColor={letterColor}
      >
        <Content>{title}</Content>
      </BigCard>
    </Link>
  ) : (
    <BigCard
    id={id}
      smallPartHeight={smallPartHeight}
      smallPartWidth={smallPartWidth}
      bigPartHeight={bigPartHeight}
      bigPartWidth={bigPartWidth}
      bigPartColor={bigPartColor}
      smallPartColor={smallPartColor}
      letterColor={letterColor}
    >
      <Content>{title}</Content>
    </BigCard>
  );
}
