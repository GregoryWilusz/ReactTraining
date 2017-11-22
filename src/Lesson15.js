import React from 'react';

const HOC = (InnerComponent) => class extends React.Component { //HighOrderControl method
    constructor(){
        super();
        this.state = {count: 0}
    }
    update(){   // increments state by 1
        this.setState({count: this.state.count + 1})
    }
    componentWillMount(){
        console.log('will mount')
    }
    render() {
        return (
            <InnerComponent
                {...this.props} // (props.children not passing through) spreading this.props into InnerComponent
                {...this.state}
                update={this.update.bind(this)}
            />
        )
    }
}

class Lesson15 extends React.Component {
    render(){
        return (
            <div>
                <Button>button</Button>
                <hr/>
                <LabelHOC>label</LabelHOC>
            </div>
        )
    }
}

const Button = HOC((props) =>
    <button onClick={props.update}>{props.children} - {props.count}</button>)

class Label extends React.Component{
    componentWillMount(){
        console.log('label will mount')
    }
    render(){
        return (
            <label onMouseMove={this.props.update}>
                {this.props.children} - {this.props.count}</label>
        )
    }
}
const LabelHOC = HOC(Label) //new component name as a new component?
export default Lesson15