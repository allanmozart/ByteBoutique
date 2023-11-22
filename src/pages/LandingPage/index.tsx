import NavBar from '../../components/NavBar';
import FooterBar from '../../components/Footer';
import HeroBanner from '../../components/HeroBanner';
import Carousel from '../../components/Carousel';
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
