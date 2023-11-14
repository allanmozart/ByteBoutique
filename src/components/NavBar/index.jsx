import styled from 'styled-components';

const StyledNavBar = styled.div`
  background-color: orange;
  height: 10vh;
`;

const StyledLogo = styled.img``;

function NavBar() {
  return (
    <StyledNavBar>
      <StyledLogo />
    </StyledNavBar>
  );
}

export default NavBar;
