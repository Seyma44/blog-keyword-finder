import logo from '../assets/openai.png';
import styled from 'styled-components';

const Box = styled.div`
  background-color: transparent;
  padding: 1rem;
  margin: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin-bottom: 1;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-right: 0.1rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

const Footer = () => {
  return (
    <Box>
      <Flex >
        <Image src={logo} />
        <Text>Powered By Open AI</Text>
      </Flex>
    </Box>
  );
};
export default Footer;
