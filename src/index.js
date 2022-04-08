import React from 'react';
import ReactDom from 'react-dom';


class HelloMessage extends React.Component {
    render() {
      return (
        <>
          <div>Hello World, my name is {this.props.name}</div>
          <Button />
        </>
      );
    }
  }

ReactDom.render(
    <HelloMessage name="Ronan"/>,
    document.getElementById('hello-example')
)

const Ronan = { name: 'Ronan' };