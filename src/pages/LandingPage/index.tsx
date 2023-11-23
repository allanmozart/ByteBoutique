import NavBar from '../../components/NavBar';
import FooterBar from '../../components/Footer';
import HeroBanner from '../../components/HeroBanner';
import Carousel from '../../components/Carousel';
import StyledLanding from './style';
import UpperBar from '../../components/UpperBar';

function LandingPage() {
  return (
    <StyledLanding>
      <UpperBar />
      <NavBar />
      <HeroBanner />
      <Carousel />
      <FooterBar />
    </StyledLanding>
  );
}

export default LandingPage;
