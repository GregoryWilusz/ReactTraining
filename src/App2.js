import React from 'react';

class App2 extends React.Component { // 1st Way to create Component using class. It has a state!
    render() { //render method that returns the DOM representation our component
         return ( // jeśli wyrzucimy nawias i w tej samej linii damy kod z kolejnej (tutaj <div>), będzie OK
             <div>
                 <h1>Hello Series</h1>
                 <b>Bold</b>
             </div>
         )
        // return React.createElement('h1', null, 'Hello Eggheads'); //
    }
}

// Stateless function component - 2nd way to create Component
// const App2 = () => <h1>Hello Stateless</h1>

export default App2