import React from 'react';
// import Button from "./components/Button";

class App extends React.Component {
  render() {
    this.count = 1;

    // function addOne(number) {
    //   this.count = this.count + number
    // }

    return (
      <div>
        <div>Number = {this.count}</div>
        {/* <Button addOneParent={() => addOne()}/> */}
      </div>
    );
  }
}

export default App;
