import styled, { css, keyframes } from 'styled-components';

const UpDown = keyframes`
 0% { transform:translateY(10px) }

 50% { transform:translateY(30px)  }

 100% { transform:translateY(10px)  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  width: 100%;
  max-width: 720px;
  height: 0;

  gap: 1.5rem;

  a {
    color: inherit;
    text-decoration: none;
  }
`;
export const Emptyfloating = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: auto;

    gap: 5rem;

    img {
      max-width: 400px;
      width: 100%;
      padding-top: 70px;

      animation-name: ${UpDown};
      animation-duration: 3.5s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    a {
      text-decoration: underline;
      color: ${theme.colors.brown.secondary};

      font-size: 1.1rem;
      font-weight: 600;
    }
  `}
`;
