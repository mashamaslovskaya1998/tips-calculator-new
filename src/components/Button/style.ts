import styled from "styled-components";

export const StyledButton = styled.button<{ isDisabled: boolean }>`
  padding: 13px 0;

  font-size: 24px;
  background-color: #2ed2c9;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)};
  line-height: 35px;
  color: #ffffff;
  border: none;

  cursor: pointer;
`;
