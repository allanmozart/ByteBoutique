import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 10%;
  align-items: center;
  text-shadow: -0.25px -0.25px 0 black, 0.25px 0.25px black;
`;

function Title() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState<string>('');

  useEffect(() => {
    const title = location.pathname.split('/').filter(Boolean).pop();

    setPageTitle(
      title ? title.toUpperCase().split('-').join(' ') : 'Page Not Found'
    );
  }, [location.pathname]);

  return <StyledTitle>{pageTitle}</StyledTitle>;
}

export default Title;
