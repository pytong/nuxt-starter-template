import React from "react";
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    return (
      <div className="xl-tac xl-p24 xl-m40 xl-ba-black-500 xl-co-white xl-br8">
        <span className="xl-vam xl-fs24 xl-fw300">Hello <span className="xl-fw600">{this.props.name}</span></span>
      </div>
    );
  }
}

export default HelloMessage;

ReactDOM.render(<HelloMessage name="Rocket"/>, document.getElementById('app'));
