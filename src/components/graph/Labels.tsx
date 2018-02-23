import * as React from "react";
import * as d3 from "d3";
import { d3Types } from "./types";

interface Props {
  nodes: d3Types.d3Node[];
}

interface InternalProps {
  node: d3Types.d3Node;
}

class Label extends React.Component<InternalProps, {}> {
  ref: SVGTextElement;

  componentDidMount() {
    d3.select(this.ref).data([this.props.node]);
  }

  render() {
    return (
      <text className="label" ref={(ref: SVGTextElement) => (this.ref = ref)}>
        {this.props.node.id}
      </text>
    );
  }
}

class Labels extends React.Component<Props, {}> {
  render() {
    const labels = this.props.nodes.map(
      (node: d3Types.d3Node, index: number) => {
        return <Label key={index} node={node} />;
      }
    );

    return <g className="labels">{labels}</g>;
  }
}

export default Labels;