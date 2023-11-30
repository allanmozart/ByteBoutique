import { useDispatch, useSelector } from 'react-redux';
import { setPriceUpFilter, setPriceDownFilter } from '../../store/filterSlice';
import { Container, Title } from './style';

const Filter = () => {
  const dispatch = useDispatch();
  const { priceUpFilter, priceDownFilter } = useSelector(
    (state) => state.filter
  );

  return (
    <Container>
      <Title>Sort by:</Title>
      <label>
        Price Up
        <input
          type='checkbox'
          checked={priceUpFilter}
          onChange={() => dispatch(setPriceUpFilter(!priceUpFilter))}
        />
      </label>
      <label>
        Price Down
        <input
          type='checkbox'
          checked={priceDownFilter}
          onChange={() => dispatch(setPriceDownFilter(!priceDownFilter))}
        />
      </label>
    </Container>
  );
};

export default Filter;
