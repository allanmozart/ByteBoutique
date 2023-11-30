import NavBar from '../../components/NavBar';
import ProductDetailsDisplay from '../../components/Product-Details';
import { Page } from '../style';
import { StyledProductPage } from './style';

function ProductDescriptionPage() {
  return (
    <StyledProductPage>
      <NavBar />
      <Page>
        <ProductDetailsDisplay />
      </Page>
    </StyledProductPage>
  );
}

export default ProductDescriptionPage;
