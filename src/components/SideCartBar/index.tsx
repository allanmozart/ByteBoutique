import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import { RootState } from '../../store/store';
import { CloseButton, SidebarContainer, SidebarContent } from './style';

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
          <div key={item.id}>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove Item
            </button>
          </div>
        ))}
        {/* Option to add more products */}
      </SidebarContent>

      <div>Total: ${calculateTotal(cartItems).toFixed(2)}</div>
    </SidebarContainer>
  );
};

export default Sidebar;
