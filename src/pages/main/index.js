import React from 'react';
import { FaGithub, FaTerminal } from 'react-icons/fa';
import { Container, Form, SubButton } from './style';

function Main() {
  return (
    <Container>
      <h1>
        <FaGithub />
        Repositório
      </h1>
      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Manda ai" />
        <SubButton>
          <FaTerminal color="#fff" size="14" />
        </SubButton>
      </Form>
    </Container>
  );
}

export default Main;
