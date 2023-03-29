import styled from 'styled-components';

export const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin-bottom: 18px;

  svg {
    position: absolute;
  }

  input[type='text'] {
    padding: 8px 18px;
    border: none;
    font-size: 16px;
    color: var(--grey);
    width: 100%;
    outline: none;
    font-size: 19px;
  }
`;
