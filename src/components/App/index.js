import React, { Component, Fragment } from "react";
import { Container, Header, List, Label } from "semantic-ui-react";
import { Pagination } from "semantic-ui-react";

import StatusFilter from "../StatusFilter";
import Request from "../Request";
import DataView from "../DataView";
import { formatIssues, getLasPageFromLink } from "../../services/utils";

import "./styles.css";

const formatLabel = function(row) {
  return row.length > 0 ? (
    <List as="ul">
      {row.map(label => (
        <List.Item key={label.id} as="li">
          <Label
            style={{
              backgroundColor: `#${label.color}`
            }}
            horizontal
          >
            {label.name}
          </Label>
        </List.Item>
      ))}
    </List>
  ) : null;
};

export default class extends Component {
  state = {
    status: "all",
    activePage: 1
  };

  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage });
  };

  handleStatusChange = (e, { value }) => {
    this.setState({ status: value });
  };

  render() {
    const { activePage, status } = this.state;
    return (
      <Container className="App">
        <Header as="h1" textAlign="center">
          React project issues
        </Header>
        <Request
          url={`https://api.github.com/repos/facebook/react/issues?state=all&per_page=10&page=${activePage}&state=${status}`}
        >
          {({ data }) => (
            <Fragment>
              <StatusFilter
                status={status}
                handleChange={this.handleStatusChange}
              />
              <DataView
                headers={[
                  "Issue Number",
                  "Title",
                  "Created At",
                  "Updated At",
                  "Labels",
                  "State"
                ]}
                columns={[
                  "number",
                  "title",
                  "created_at",
                  "updated_at",
                  "labels",
                  "state"
                ]}
                keyRow="number"
                data={formatIssues(data.data)}
                formatter={{ labels: formatLabel }}
              />
              <Container textAlign="center">
                <Pagination
                  defaultActivePage={activePage}
                  totalPages={getLasPageFromLink(data.link)}
                  onPageChange={this.handlePaginationChange}
                />
              </Container>
            </Fragment>
          )}
        </Request>
      </Container>
    );
  }
}
