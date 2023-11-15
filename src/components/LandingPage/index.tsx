import UpperBar from '../UpperBar/style';
import NavBar from '../NavBar';
import FooterBar from '../Footer';
import HeroBanner from '../HeroBanner';
import Carousel from '../Carousel';

function LandingPage() {
  return (
    <>
      <UpperBar />
      <NavBar />
      <HeroBanner />
      <Carousel />
      <FooterBar />
    </>
  );
}

export default LandingPage;
