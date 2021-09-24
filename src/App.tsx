import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from './GlobalStyles';
import { Menu } from './componets/Menu';
import { Button } from './componets/Button';

export const App: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleButtonClkCb = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    x();
  };

  const x = useCallback(() => {
    setIsShow((prev) => !prev);
    console.log('toggle isSHow');
  }, []);

  useEffect(() => {
    if (isShow) {
      document.querySelector('body')?.addEventListener('click', x);
    } else {
      document.querySelector('body')?.removeEventListener('click', x);
    }
  }, [isShow]);

  return (
    <Container>
      <Button onClick={handleButtonClkCb} />
      {isShow ? (
        <div onBlur={x} onClick={(e) => e.stopPropagation()}>
          <Menu>
            <StyledUl>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setIsShow((prev) => !prev);
                    console.log('111');
                  }}
                >
                  111
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    setIsShow((prev) => !prev);
                    console.log('222');
                  }}
                >
                  222
                </a>
              </li>
            </StyledUl>
          </Menu>
        </div>
      ) : null}
      <div>
        <button
          type={'button'}
          onClick={() => console.log('тут мы нажали по левой кнопке')}
        >
          Если нажать здесь, то тоже пропадет
        </button>
      </div>
    </Container>
  );
};

const StyledUl = styled.ul`
  list-style: none;
  & > li {
    padding: 20px;
  }

  a {
    color: white;
  }
`;
