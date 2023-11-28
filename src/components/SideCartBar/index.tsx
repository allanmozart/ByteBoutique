import {
  CheckOutButton,
  CloseButton,
  SidebarContainer,
  SidebarContent,
} from './style';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <SidebarContainer isOpen={true}>
      <CloseButton onClick={onClose}>Close</CloseButton>
      <SidebarContent></SidebarContent>
      <CheckOutButton>Check Out</CheckOutButton>
    </SidebarContainer>
  );
};

export default Sidebar;
