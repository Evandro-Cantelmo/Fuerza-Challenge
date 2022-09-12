import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    margin-top: 80px;

    width: 100%;
    max-width: 720px;
    height: 0;
    

    gap: 1.5rem;

    a {
      color: inherit;
      text-decoration: none;
    }
    input {
        padding: 0.4rem;
        height: 48px;
        width: 100%;
        outline: none;

        font-weight: 600;

        color: ${theme.colors.brown.primary};
        background: rgba(255, 255, 255, 0.42);

        border: 1px solid rgba(157, 164, 166, 0.07);
        border-radius: 4px;
        &::placeholder{
            color: ${theme.colors.brown.primary}
        }
      }

      textarea {
        padding: 0.4rem;
        min-height: 379px;
        width: 100%;
        outline: none;

        resize: none;
        font-weight: 600;

        color: ${theme.colors.brown.primary};
        background: rgba(255, 255, 255, 0.42);

        border: 1px solid rgba(157, 164, 166, 0.07);
        border-radius: 4px;
        &::placeholder{
            color: ${theme.colors.brown.primary}
        }
      }
  `}
`;
export const InputContainer = styled.div`
  width: 100%;
  padding: 20px 0 32px;
`;
