import React, { Component } from 'react';
import { FaGithub, FaTerminal } from 'react-icons/fa';
import api from '../../sevice/api';
import { Container, Form, SubButton, List } from './style';

class Main extends Component {
  state = {
    newRepo: ``,
    repositories: [],
    loading: false,
  };

  handleInput = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    const { newRepo, repositories } = this.state;
    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
      loading: false,
    });
  };

  render() {
    const { newRepo, repositories, loading } = this.state;
    return (
      <Container>
        <h1>
          <FaGithub />
          Repositório
        </h1>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Manda ai"
            value={newRepo}
            onChange={this.handleInput}
          />
          <SubButton loading={loading}>
            <FaTerminal color="#fff" size="14" />
          </SubButton>
        </Form>

        <List>
          {repositories.map(repositories => (
            <li key={repositories.name}>
              <span>{repositories.name}</span>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

export default Main;
