import React from 'react';
import PropTypes from 'prop-types';

// const App = () => <h1>Hi</h1>

class App extends React.Component {
    render(){
        let txt = this.props.txt;
        return <h1>{txt}</h1>
    }
}

App.propTypes = {
   txt: PropTypes.string,
   cat: PropTypes.number.isRequired
}

App.defaultProps = {
     txt: "This is a default text",
}

export default App;