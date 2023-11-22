import { useState } from 'react';
import { UserLogo } from '../UserLogo/style';
import Auth from '../Auth/auth';
import { Modal, OpenModal } from './style';
import { CloseButton } from '../Auth/style';

interface ModalSignInProps {}

const ModalSignIn: React.FC<ModalSignInProps> = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  return (
    <>
      <OpenModal onClick={openSignInModal}>
        <UserLogo />
      </OpenModal>

      <Modal isOpen={isSignInModalOpen}>
        <CloseButton onClick={closeSignInModal}>Close</CloseButton>

        <Auth />
      </Modal>
    </>
  );
};

export default ModalSignIn;
