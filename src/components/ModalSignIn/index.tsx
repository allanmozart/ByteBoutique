import React, { useState } from 'react';
import styled from 'styled-components';
import { UserLogo } from '../UserLogo/style';
import Auth from '../Auth/auth';

interface ModalSignInProps {}

interface ModalProps {
  isOpen: boolean;
}

const Modal = styled.div<ModalProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
  z-index: 1000;
`;

const ModalSignIn: React.FC<ModalSignInProps> = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  return (
    <div>
      {/* Your component content */}
      <button onClick={openSignInModal}>
        <UserLogo />
      </button>

      {/* Modal */}
      <Modal isOpen={isSignInModalOpen}>
        {/* Modal content */}
        <div>
          {/* Your sign-in form or content */}
          <Auth />
          <button onClick={closeSignInModal}>Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalSignIn;
