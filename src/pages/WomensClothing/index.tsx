import NavBar from '../../components/NavBar';
import PagesCarousel from '../../components/PagesCarousel';
import PagesDisplay from '../../components/PagesDisplay';
import { Page } from '../style';

function WomensClothingPage() {
  return (
    <>
      <NavBar />
      <Page>
        <PagesCarousel />
        <PagesDisplay />
      </Page>
    </>
  );
}

export default WomensClothingPage;
