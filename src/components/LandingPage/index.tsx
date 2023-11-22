import NavBar from '../NavBar';
import FooterBar from '../Footer';
import HeroBanner from '../HeroBanner';
import Carousel from '../Carousel';
import StyledLanding from './style';

function LandingPage() {
  return (
    <StyledLanding>
      <NavBar />
      <HeroBanner />
      <Carousel />
      <FooterBar />
    </StyledLanding>
  );
}

export default LandingPage;
