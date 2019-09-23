import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import api from '../../sevice/api';

class Repository extends Component {
  // eslint-disable-next-line
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  render() {
    // eslint-disable-next-line
    const { repository, issues, loading } = this.state;
    return <h1>Repository:</h1>;
  }
}

export default Repository;
