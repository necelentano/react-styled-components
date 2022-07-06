import styled from 'styled-components';

import logo from '../assests/logo.svg';
import Input from './Input';

const Sidebar = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={logo} alt="logo" />
        <h3>
          Eli <span>Codes</span>
        </h3>
      </LogoWrapper>

      <Form>
        <h3>Sign Up</h3>
        <Input placeholder="Full Name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Confirm password" type="password" />
        <button>Sign Up</button>
      </Form>
      <div>
        <Terms>
          By signing up, I agree to the Privacy Policy <br /> and Terms of
          Service
        </Terms>
        <h4>
          Already have an account? <span>Sign In</span>
        </h4>
      </div>
    </Container>
  );
};

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.7);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
    margin-top: 1rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }

  h3 {
    text-align: center;
    color: #ff8d8d;
    font-size: 22px;

    span {
      color: #5dc399;
      font-weight: 300;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 24px;
    font-weight: 700;
    color: #666666;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background-color: #70edb9;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Terms = styled.p`
  padding: 0 1rem;
  color: #808080;
  font-size: 12px;
  font-weight: 300;
  text-align: center;
`;

export default Sidebar;
