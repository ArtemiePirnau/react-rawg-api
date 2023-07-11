import { Component } from "react";

export default class IsError extends Component {
  state = {
    isError: false,
  };
  componentDidCatch() {
    this.setState({
      isError: true,
    });
  }
  render() {
    return (
      <div className="error">
        <p>Something went wrong!</p>
      </div>
    );
  }
}
