import { useState } from 'react';
import { UserLogo } from '../UserLogo/style';
import Auth from '../Auth/auth';
import { Modal, OpenModal, User } from './style';
import { CloseButton } from '../Auth/style';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';

interface ModalSignInProps {}

const ModalSignIn: React.FC<ModalSignInProps> = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const user = useSelector((state: RootState) => state.auth.user);

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  return (
    <>
      <OpenModal onClick={openSignInModal}>
        {user ? <User>Hello, {user.email}</User> : <UserLogo />}
      </OpenModal>

      <Modal isOpen={isSignInModalOpen}>
        <CloseButton onClick={closeSignInModal}>Close</CloseButton>

        <Auth />
      </Modal>
    </>
  );
};

export default ModalSignIn;
