import React, { Component } from 'react';
import { FaGithub, FaTerminal } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import api from '../../sevice/api';
import { Form, SubButton, List } from './style';
import Container from '../../components/Container/style';

class Main extends Component {
  state = {
    newRepo: ``,
    repositories: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    const repositories = localStorage.getItem('repositories');
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;
    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInput = e => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: false });

    try {
      const { newRepo, repositories } = this.state;

      const hasRepo = repositories.find(r => r.name === newRepo);

      if (hasRepo) {
        throw new Error('Repositório duplicado');
      }

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
      });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { newRepo, repositories, loading, error } = this.state;
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
            className={error && 'error'}
          />
          <SubButton loading={loading}>
            <FaTerminal color="#fff" size="14" />
          </SubButton>
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repo/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

export default Main;
