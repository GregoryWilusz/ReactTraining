import React from 'react';
import ReactDOM from 'react-dom';

class Lesson12 extends React.Component {
    constructor(){
        super();
        this.state = {val: 0}
        this.update = this.update.bind(this)
    }
    update(){
        this.setState({val: this.state.val + 1})
    }
    componentWillMount(){
        console.log('componentWillMount')
        this.setState({m: 2})
    }
    render() {
        console.log('render');
        return <button onClick={this.update}>
            {this.state.val * this.state.m}</button>
    }
    componentDidMount(){
        console.log('componentDidMount')
        this.inc = setInterval(this.update,500) //inc like incremental -> executing update for every 0.5 sec
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.inc)
    }
}

class Wrapper extends React.Component {
    mount(){
        ReactDOM.render(<Lesson12 />, document.getElementById('a'))
    }
    unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }
    render(){
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
            </div>
        )
    }
}

export default Wrapper