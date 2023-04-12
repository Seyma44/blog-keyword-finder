import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: #8d816c;
  line-height: 1.5;
  margin-bottom: 1rem;
  padding: 0.5rem;
  text-align: center;
`;

const Header = () => {
  return (
      <>
        <Heading className="paper pink">
          <div className="tape-section"></div>
            <p>AI Keyword Extractor</p>
          <div className="tape-section"></div>
        </Heading>
        <Text>
          Paste in your text below and we'll extract the keywords for you.
        </Text>
      </>
  );
};

export default Header;