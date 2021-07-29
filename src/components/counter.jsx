import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value:this.props.counter.value,
    };

    handleIncrement = () => {
        console.log(this);
        this.setState({value: this.state.value + 1})
    }

    render() { 

        return (         
            <div>
                {/* Dynamically Displaying classes */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-default btn-sm">Increment</button>
                <button 
                    className="btn btn-danger btn-sm m2" 
                    onClick = {() => this.props.onDelete(this.props.counter.id)}>
                    Delete
                </button>
            </div>        
        );
    }

    getBadgeClasses() {
        let classes = "m-2 badge badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        // object destructuring
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }

}
 
export default Counter;