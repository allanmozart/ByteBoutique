import NavBar from '../../components/NavBar';
import FooterBar from '../../components/Footer';
import HeroBanner from '../../components/HeroBanner';
import Carousel from '../../components/LandingCarousel';
import { StyledLanding } from './style';
import UpperBar from '../../components/UpperBar';

function LandingPage() {
  return (
    <>
      {/* <UpperBar /> */}
      <NavBar />
      <StyledLanding>
        <HeroBanner />
        <Carousel autoScroll={false} />
        <FooterBar />
      </StyledLanding>
    </>
  );
}

export default LandingPage;
