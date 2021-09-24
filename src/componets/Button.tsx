import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <>
      <StyledButton type={'button'} onClick={onClick}>
        Нажми меня
      </StyledButton>
    </>
  );
};

const StyledButton = styled.button`
  padding: 20px;
`;
