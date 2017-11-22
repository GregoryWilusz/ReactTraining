import React from 'react'

class Lesson18 extends React.Component {
    render(){
        return (
        <Parent>
            <div className="childA"></div>

        </Parent>
        )
    }
}

class Parent extends React.Component {
    render(){
        //console.log(this.props.children)
        // let items = React.Children
        //     //.map(this.props.children, child => child)
        //     .forEach(this.props.children, child => console.log(child.props.className))
        //console.log(items)
        // let items = React.Children.toArray(this.props.children);
        let items = React.Children.only(this.props.children);
        console.log(items)
        return null
    }
}
export default Lesson18