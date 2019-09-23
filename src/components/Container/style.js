import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  margin: 80px auto;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0.1);
  h1 {
    font-size: 30px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    svg {
      margin-right: 5px;
    }
  }
`;

export default Container;
