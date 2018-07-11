import React, { Component } from "react";
import { Loader, Message } from "semantic-ui-react";

import data from "../../services/data";

export default class Request extends Component {
  state = {
    error: false,
    loading: true,
    data: null
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ loading: true });
      this.loadData();
    }
  }

  componentWillUnmount() {
    data.abort();
  }

  loadData() {
    data.get(this.props.url).then(data => {
      data.promise.then(response => {
        this.setState({
          data: {
            data: response,
            link: data.link
          },
          loading: false
        });
      });
    });
  }

  render() {
    const { loading, data, error } = this.state;
    return error ? (
      <Message negative>
        <Message.Header>Something was wrong with your request</Message.Header>
        <p>Please try again later</p>
      </Message>
    ) : loading ? (
      <Loader active inline="centered" />
    ) : (
      this.props.children({ data })
    );
  }
}
