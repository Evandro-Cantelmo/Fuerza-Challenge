import styled from 'styled-components';

export const Container = styled.div`
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
`;
export const InputContainer = styled.div`
  width: 100%;
  padding: 20px 0 32px;
`;