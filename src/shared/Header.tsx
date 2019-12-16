import React from "react";

const Trianglify = require("trianglify");

type HeaderProperties = {
  maxHeightInPercent: number;
  pattern: any;
};

type HeaderState = {
  width: number;
  height: number;
};

export default class Header extends React.Component<
  HeaderProperties,
  HeaderState
> {
  static defaultProps: HeaderProperties = {
    maxHeightInPercent: 100,
    pattern: Trianglify({
      cell_size: 30 + Math.random() * 100
    })
  };

  updateDimensions = () => {
    let maxHeight = window.innerHeight * (this.props.maxHeightInPercent / 100);
    let maxWidth = window.innerWidth;

    if (
      this.state != null &&
      this.state.width === maxWidth &&
      this.state.height === maxHeight
    )
      return;
    console.log(
      "TRIGGER [" +
        (this.state == null
          ? "NULL"
          : this.state.width + " " + this.state.height) +
        " <-> " +
        maxWidth +
        " " +
        maxHeight
    );

    this.setState({
      width: maxWidth,
      height: maxHeight
    });
  };

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render(): JSX.Element {
    if (this.state == null) return <p>Loading ...</p>;

    let style = {
      width: `${this.state.width}px`,
      height: `${this.state.height}px`,
      position: "static" as "static",
      top: 0,
      left: 0
    };

    return (
      <svg
        style={style}
        viewBox={`0 0 ${this.state.width / 2} ${this.state.height / 2}`}
        dangerouslySetInnerHTML={{ __html: this.props.pattern.svg().innerHTML }}
      />
    );
  }
}
