import styled from 'styled-components';

export const Container = styled.div`
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
export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 20px;
  }
`;
export const SubButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  padding: 0 15px;
  background: #7159c1;
  border: 0;
  border-radius: 4px;
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const List = styled.ul``;
