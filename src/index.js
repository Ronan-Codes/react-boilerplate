import React from 'react-dom/client';
import ReactDom from 'react-dom';
import Button from './components/Button'

class HelloWorld extends React.Component {
    render() {
        return (
            <>
                <div>Hello World, my name is {this.props.name}!</div>
                <Button/>
            </>
        )
    }
}

ReactDom.render(
    <HelloWorld name="Ronan"/>,
    document.getElementById('hello-example')
)