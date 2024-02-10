import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyComponent extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      lastName: "",
    };
  }

  setValue() {
    this.setState({
      name: "zuka",
    });

    window.alert(this.state.name);
  }

  render() {
    return (
      <React.Fragment>
        <button type="button" onClick={() => this.setValue()}>
          Click
        </button>
      </React.Fragment>
    );
  }
}

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<MyComponent />);
