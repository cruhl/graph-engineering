import * as React from "react";
import gql from "graphql-tag";

import withGraphQL from "./withGraphQL";
import Operations from "../generated/App";

import Schema from "./Schema";

export default withGraphQL<Operations>(
  gql`
    query App {
      count
    }

    mutation Increment {
      increment
    }
  `,
  ({ App: { data }, Increment }) => (
    <div>
      <Schema />
      <h1 onClick={Increment}>{data && data.count}</h1>
    </div>
  )
);
