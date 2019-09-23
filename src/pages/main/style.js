import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 20px;
    &[error] {
      border: 1px solid #e74c3c;
    }
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

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
    span {
      font-size: 20px;
    }
  }
`;
