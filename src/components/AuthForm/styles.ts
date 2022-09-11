import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;

    grid-template-rows: repeat(3, auto);
    grid-template-columns: 1fr auto;
    grid-template-areas: 'img img' 'title anchor' 'form form';
    gap: 2rem;

    width: 100%;
    max-width: 720px;

    a:first-child {
      grid-area: img;

      img {
        width: 16rem;

        margin-bottom: 3rem;
      }
    }

    > a:nth-child(3) {
      grid-area: anchor;

      margin: auto auto 6px;

      font-size: 12px;
      font-weight: 600;

      text-decoration: underline;

      color: ${theme.colors.brown.primary};

      text-align: right;

      cursor: pointer;
    }

    h1 {
      grid-area: title;

      font-weight: 400;
      font-size: 32px;
      white-space: nowrap;

      color: ${theme.colors.brown.primary};
    }
  `}
`;
export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    grid-area: form;
    gap: 1rem;

    a {
      margin: auto 0 auto auto;

      font-size: 1rem;
      text-decoration: underline;
      color: ${theme.colors.brown.secondary};
    }

    button {
      margin: 2rem auto auto;
      font-weight: 600;
    }
  `}
`;
