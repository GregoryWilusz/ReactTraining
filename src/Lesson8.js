import React from 'react';
//import PropTypes from 'prop-types';

class Lesson8 extends React.Component {
    render() {
        return <Title text="123456"/>
    }
}

const Title = (props) => <h1>Title: {props.text}</h1>

Title.propTypes = {
  //  text: PropTypes.string.isRequired //alternatywa, wykorzystanie standardowej opcji
    text(props, propName){          // w kursie był jeszcze argument component, ale nieużywany....
        if(!(propName in props)){
            return new Error(`Missing ${propName}`)
        }
        if(props[propName].length < 6){
            return new Error(`${propName} was too short`)
        }
    }
}

export default Lesson8