import styled from 'styled-components';

const Input = ({ placeholder, type = 'text' }) => {
  return (
    <Container>
      <StyledInput
        type={type}
        placeholder={placeholder}
        required
        autoComplete="off"
      />
      <InputStatus />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  color: #343434;
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #f5f5f5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
  }

  &::placeholder {
    color: #9d9d9d;
  }
`;

const InputStatus = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #9d9d9d;
  margin-left: 1rem;

  ${StyledInput}:focus + & {
    background-color: #ffa689;
  }

  ${StyledInput}:invalid + & {
    background-color: #fe2f75;
  }

  ${StyledInput}:valid + & {
    background-color: #70edb9;
  }
`;

export default Input;
