import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Lesson20 extends React.Component {
    constructor(){
        super();
        this.state = {
            red: 0,
            green: 0,
            // blue: 0
        }
        this.update = this.update.bind(this);
    }
    update(e){
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
            // blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
        })
    }
    render(){
        return (
            <div>
                <NumInput
                    ref="red"
                    min={0}
                    max={255}
                    step={0.01}
                    val={+this.state.red}
                    // type="number"
                    label="Red"
                    update={this.update} />
                <br/>
                <NumInput
                    ref="green"
                    min={0}
                    max={255}
                    step={0.01}
                    val={+this.state.green}
                    // type="number"
                    label="Green"
                    update={this.update} />
                {/*<Slider ref="green" update={this.update} />*/}
                {/*{this.state.green}*/}
                {/*<br />*/}
                {/*<Slider ref="blue" update={this.update} />*/}
                {/*{this.state.blue}*/}
                {/*<br />*/}
            </div>
        )
    }

}

class NumInput extends React.Component {
    render(){
        let label = this.props.label !== '' ?
            <label>{this.props.label} - {this.props.val}</label> : ''
        return (
            <div>
                <input ref="inp"
                       type={this.props.type}
                       min={this.props.min}
                       max={this.props.max}
                       step={this.props.step}
                       defaultValue={this.props.val}
                       onChange={this.props.update} />
                {label}
            </div>
        )
    }
}

NumInput.PropTypes = {
    min: PropTypes.number,
    max: PropTypes.numer,
    step: PropTypes.number,
    val: PropTypes.number,
    label: PropTypes.string,
    update: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
    min: 0,
    max: 0,
    step: 1,
    val: 0,
    label: '',
    type: 'range'
}

export default Lesson20