import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

import heroImage from '../assests/hero.png';
import bgImage from '../assests/bg.png';
import HeroText from './HeroText';

const Hero = () => {
  return (
    <Container bg={bgImage}>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          <TiltWrapper>
            <img src={heroImage} alt="Cover" />
          </TiltWrapper>
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
// Blur Effect
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.9);

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.4);
  }
`;
const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 100%;
  }
`;
const Left = styled.div`
  width: 40%;

  @media (max-width: 528px) {
    width: 100%;
  }
`;

const TiltWrapper = styled(Tilt)`
  width: 60%;
  @media (max-width: 528px) {
    display: none;
  }
`;
