import styled, { keyframes } from 'styled-components';

export const SearchBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: relative;

  svg {
    position: absolute;
    margin-left: 32px;
  }

  input[type='text'] {
    padding: 8px 18px;
    border: 1px solid var(--grey);
    background: white;
    flex: 1;
    border-radius: 999px;
    font-size: 16px;
    color: var(--grey);
    overflow: hidden;
    width: 100%;
    overflow: hidden;
    padding-left: 40px;
  }
`;
