import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  z-index: 10;
`;

export const HeaderContent = styled.div`
  display: flex;
  max-width: 1078px;
  margin: auto;
  padding: 2rem 0 6px;

  gap: 0.8rem;
  img {
    max-width: 11rem;
    justify-self: start;
  }

  button {
    max-width: 160px;

    margin-left: auto;

    margin-top: -10px;
  }
`;
