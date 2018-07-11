import React from "react";
import { Table } from "semantic-ui-react";

import "./styles.css";

export default ({
  headers = [],
  data = [],
  keyRow = "",
  columns = [],
  formatter = {}
}) => (
  <Table celled className="DataView">
    <Table.Header>
      <Table.Row>
        {headers.map(header => (
          <Table.HeaderCell key={header}>{header}</Table.HeaderCell>
        ))}
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {data.map(row => (
        <Table.Row key={row[keyRow]}>
          {columns.map(col => (
            <Table.Cell key={col}>
              {formatter[col] ? formatter[col](row[col]) : row[col]}
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);
