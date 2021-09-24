import React from 'react';
import styled from 'styled-components';

export const Menu: React.FC = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

const Wrap = styled.div`
  position: absolute;
  //width: 100px;
  //height: 100px;
  background-color: red;
`;
