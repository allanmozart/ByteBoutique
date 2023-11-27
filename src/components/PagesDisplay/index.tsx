import Title from '../PagesTitle';
import ProductCard from '../ProductCard';
import { Container, Display, Filter } from './style';

function PagesDisplay() {
  return (
    <Display>
      <Title />
      <Container>
        <Filter>Filter/Sort By...</Filter>
        <ProductCard />
      </Container>
    </Display>
  );
}

export default PagesDisplay;
