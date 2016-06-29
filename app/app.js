import React from "react";
import ReactDOM from 'react-dom';

var HelloMessage = React.createClass({
  render: function() {
    return (
      <div className="xl-tac xl-p24 xl-m40 xl-ba-black-500 xl-co-white xl-br16">
        <em className="icon-flexiblegs xl-pr16"></em>
        <span className="xl-vam xl-fs24 xl-fw300">Hello <span className="xl-fw600">{this.props.name}</span></span>
      </div>
    );
  }
});

ReactDOM.render(<HelloMessage name="Flexible Grid System" />, document.querySelector('#app'));
