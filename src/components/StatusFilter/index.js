import React from "react";
import { Form, Radio } from "semantic-ui-react";

import "./styles.css";

export default ({ status = "all", handleChange = () => null }) => {
  const Field = ({ status, label, value }) => (
    <Form.Field>
      <Radio
        label={label}
        value={value}
        checked={status === value}
        onChange={handleChange}
      />
    </Form.Field>
  );

  return (
    <Form className="StatusFilter">
      <Field label="All" value="all" status={status} />
      <Field label="Open" value="open" status={status} />
      <Field label="Closed" value="closed" status={status} />
    </Form>
  );
};
