import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ProductDetailsDisplay from './index';
import { getProduct } from '../../api/API_PATH';
// import { addToCart } from '../../store/cartSlice';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('ProductDetailsDisplay Component', () => {
  it('renders product details correctly', async () => {
    const mockProduct = {
      id: 1,
      title: 'Product 1',
      price: 20,
      description: 'Product description',
      category: 'Category 1',
      image: 'product1.jpg',
      name: 'Product 1',
      quantity: 5,
      rating: { rate: 4.5, count: 10 },
    };


    (getProduct as jest.Mock).mockResolvedValueOnce(mockProduct);

    await act(async () => {
      render(
            <ProductDetailsDisplay />
      );
    });

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product description')).toBeInTheDocument();
    expect(screen.getByText('Rating: 4.5/5')).toBeInTheDocument();
    expect(screen.getByText('10 Reviews')).toBeInTheDocument();
    expect(screen.getByText('20€')).toBeInTheDocument();
    expect(screen.getByTestId('product-image')).toHaveAttribute('src');
  });
});