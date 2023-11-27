import Title from '../PagesTitle';
import ProductCard from '../ProductCard';
import { Container, Display, Filter } from './style';

function PagesDisplay() {
  return (
    <Display>
      <Title />
      <Container>
        <Filter />
        <ProductCard />
      </Container>
    </Display>
  );
}

export default PagesDisplay;
