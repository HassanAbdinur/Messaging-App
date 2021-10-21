import React, { Component } from "react";
import { ReactDOM } from "react";

class App extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;

