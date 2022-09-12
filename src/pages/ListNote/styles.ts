import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
export const InputContainer = styled.div`
  width: 100%;
  padding: 20px 0 32px;
`;
export const GridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
`;
export const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 154px;
  height: 178px;
  padding: 10px;

  background: white;
  box-shadow: -1px 1px 0px 1px #faf2ec;
  overflow-wrap: anywhere;
  overflow: hidden;

  font-size: 20px;

  border-radius: 4px;
`;
export const Plus = styled.span`
  &::after {
    content: '+';
    font-size: 22px;
  }
`;
