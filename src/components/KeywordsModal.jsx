import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const StyledModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 80%;
  max-width: 40rem;
`;

const StyledModalHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const StyledModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StyledModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCircularProgress = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-left-color: #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const StyledText = styled.p`
  font-size: 1.2rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #ff69b4;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #e05c9e;
  }
`;

const KeywordsModal = ({ keywords, loading, isOpen, closeModal }) => {
  return (
    <StyledModal isOpen={isOpen}>
      <StyledModalOverlay  />
      <StyledModalContent>
        <StyledModalHeader>Keywords</StyledModalHeader>
        <StyledModalCloseButton onClick={closeModal}>&times;</StyledModalCloseButton>
        <StyledModalBody>
          {loading ? (
            <StyledCircularProgress />
          ) : (
            <StyledText>{keywords}</StyledText>
          )}
        </StyledModalBody>
        <StyledButton onClick={closeModal}>Close</StyledButton>
      </StyledModalContent>
    </StyledModal>
  );
};

export default KeywordsModal;
