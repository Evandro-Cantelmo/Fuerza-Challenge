import styled, { css } from 'styled-components';
import { IJournalCard } from '../../interfaces/journalcard.interface';

export const BigCard = styled.div<IJournalCard>`
  background: ${(p) => p.bigPartColor};
  color: ${(p) => p.letterColor};
  display: flex;
  border-radius: 2px 16px 16px 2px;
  mix-blend-mode: normal;
  box-shadow: inset 0px -4px 4px rgba(0, 0, 0, 0.1),
    inset -2px -2px 2px rgba(0, 0, 0, 0.1);

  margin: 0;
  width: ${(p) => p.bigPartWidth};
  height: ${(p) => p.bigPartHeight};

  &::before {
    content: '';
    border-radius: 2px 0px 0px 2px;

    background: ${(p) => p.smallPartColor};

    width: ${(p) => p.smallPartWidth};
    height: ${(p) => p.smallPartHeight};

    mix-blend-mode: normal;
    box-shadow: inset 0px -4px 4px 0 rgba(0, 0, 0, 0.1),
      inset 0px -2px 2px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    width: 100%;

    padding: 10px;

    border-radius: 0px 16px 16px 0px;

    overflow-wrap: anywhere;
    font-family: ${theme.fonts.family.secondary};
    font-size: 24px;
  `}
`;
