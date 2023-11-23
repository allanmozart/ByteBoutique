import NavBar from '../../components/NavBar';
import PagesCarousel from '../../components/PagesCarousel';
import PagesDisplay from '../../components/PagesDisplay';
import { Page } from '../style';

function JeweleryPage() {
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

export default JeweleryPage;
