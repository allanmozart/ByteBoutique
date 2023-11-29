import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, resetCart } from '../../store/cartSlice';
import { RootState } from '../../store/store';
import {
  CartItems,
  CloseButton,
  RemoveBtn,
  ResetBtn,
  SidebarContainer,
  SidebarContent,
  Total,
} from './style';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotal = (items: CartItem[]) => {
    return items.reduce(
      (total, item) => total + Number(item.price) * Number(item.quantity),
      0
    );
  };

  return (
    <SidebarContainer isOpen={true}>
      <CloseButton onClick={onClose}>Close</CloseButton>
      <SidebarContent>
        {/* Display cart items, add more products, delete from cart */}
        {cartItems.map((item) => (
          <CartItems key={item.id}>
            <p>
              {item.name}
              <RemoveBtn onClick={() => dispatch(removeFromCart(item.id))}>
                X
              </RemoveBtn>
            </p>
            <p>Quantity: {item.quantity}</p>
          </CartItems>
        ))}
        {/* Option to add more products */}
      </SidebarContent>

      <Total>Total: {calculateTotal(cartItems).toFixed(2)}€</Total>
      <ResetBtn onClick={() => dispatch(resetCart())}>Delete All</ResetBtn>
    </SidebarContainer>
  );
};

export default Sidebar;
