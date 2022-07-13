import styled from 'styled-components';

const HeroText = () => {
  return (
    <Container>
      <h5>Online education for people of all ages</h5>
      <h2>Learn</h2>
      <h2>Anything.</h2>
      <h2>Anytime.</h2>
      <h2>Anywhere.</h2>
      <BtnContainer>
        <button className="readmore">Read More</button>
        <button>7 Day Free Trial</button>
      </BtnContainer>
    </Container>
  );
};

export default HeroText;

const Container = styled.div`
  padding: 1rem;

  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: 900;
    font-size: 3.5rem;

    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 700;
    }
    &:nth-of-type(2) {
      color: #a86de3;
    }
    &:nth-of-type(3) {
      color: #8849c7;
    }
    &:nth-of-type(4) {
      color: #651fac;
    }
  }
`;

const BtnContainer = styled.div`
  margin-top: 2rem;

  button {
    background-color: #81d1ff;
    border: none;
    padding: 0.9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0px 13px 24px -7px #81d1ff;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }
  }
  .readmore {
    color: #81d1ff;
    background-color: transparent;
    border: 3px solid #81d1ff;
  }
`;
