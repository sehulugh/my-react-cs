
Ref: [React turorials by Mosh](https://www.youtube.com/watch?v=Ke90Tje7VS0&list=PLDG0xwctDO6iF7CT1nbxwY4RNBTVIoDT8&index=5)

---
**Simple React Snippets** shortcuts
| shortcut | Output |
|------ | -------------------|
|`imrc` | import react line |
| `cc` | component boiler plate |
**VsCode** shortcuts
| shortcut | Description |
|------ | -------------------|
|`ctrl + P` | find file |

---

Install bootstrap
```
npm i bootstrap@4.1.1
```
import into index.js
```js
import 'bootstrap/dist/csss/bootstrap.css';
```
---
Replace empty div in virtual DOM using fragments, see [docs](https://reactjs.org/docs/fragments.html)
```jsx
<React.Fragment>
    //highlight and use ctrl + d to highlight 
    //multiple occurence of text in Vs Code
</React.Fragment>

//new syntax for fragments
<>
    //highlight and use ctrl + d to highlight 
    //multiple occurence of text in Vs Code
</>
```
---
> Highlight a section of code, right click and select refreactor to generate method.
---
Key attribute is required when using map array function on an iterable
```jsx
<ul>
    {this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}
</ul>
```
---
condtional rendering works based on the concept of truthy and falsy like in python
```jsx
//Examples
true && false //false
true && true //true
1 && 0 //0 : 0 means false
true && "Hi" // Hi: non empty sting is true so it is returned
1 && "" //"" : empty string is false
// In react
render(){
    return(
        <div>
            {this.state.tags.length === 0 && "Please create a new tag!"}
            {<ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
        </div>
    )
}
```
---
By default, `this` cannot be accessed by functions inside the component class as react is in strict mode, we therefor have to bind the this keyword in the constructor.
```jsx
class Counter extends Component {
    state = {
        count:0,
        tags:['tag1', 'tag2', 'tag3']
    };
    constructor(){
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    //event handler method
    handleIncrement(){
        console.log(this);
    }
    render() { 

        return (         
            <React.Fragment>
                {/* Dynamically Displaying classes */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement()} className="btn btn-default btn-sm">Increment</button>
            </React.Fragment>
        )
    }
}
```
another option will be to use an arrow function as it does not have the concept of this and would refrenc the class when called.
However we use `setSate()` method to update state.
```jsx
//note handleIncrememt is called without the bracket with arrow functions
class Counter extends Component {
    state = {
        count:0,
        tags:['tag1', 'tag2', 'tag3']
    };
    
    //event handler method
    handleIncrement = () => {
        console.log(this);
    };
    render() { 

        return (         
            <React.Fragment>
                {/* Dynamically Displaying classes */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-default btn-sm">Increment</button>
                </React.Fragment>
        )
    }

}
```
Using setState(), we also call the function in the event as an arrow function to enable us pas parameters
```jsx
class Counter extends Component {
    state = {
        count:0,
        tags:['tag1', 'tag2', 'tag3']
    };
    
    //event handler method
    handleIncrement = () => {
        this.setStat({count: this.state.count + 1});
    };
    render() { 

        return (         
            <React.Fragment>
                {/* Dynamically Displaying classes */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement(object)} className="btn btn-default btn-sm">Increment</button>
                </React.Fragment>
        )
    }

}
```
summary
```jsx
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0,
        tags:['tag1', 'tag2', 'tag3']
    };

    handleIncrement = () => {
        this.setState({count: this.state.count + 1})
    }

    render() { 

        return (         
            <React.Fragment>
                {/* Dynamically Displaying classes */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-default btn-sm">Increment</button>

                {/*Iterating through a list*/}
                <ul>
                    {this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>

                {/* Conditional rendering*/}
                <div>
            {this.state.tags.length === 0 && "Please create a new tag!"}
            {<ul>{this.state.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>}
        </div>
            </React.Fragment>        
        );
    }
```
---
### Composing components
Components can be nested and duplicated in 
#### Passing Data to components
Data is passed as attributes to the compnents and received as props object, the key attribute is usually ignored.
props has a property called `children` that allows you pass data stored in between compment tags
```jsx
<Counter value = {this.state.value}>
<h4>Title</h4>
</Counter>
// the resulting props object will be
props = {
    value: 1,
    children:{
        type:"h4",
        key: null,
        props:{
            children:"Title"
        }
    }
}
```
React Developer tools browser plugin helps you degug your rect code, you can select an object/Component and use `$r` in the console to view and expand on the component
Props is data that is given to a Component while state refers to data local to the component so to resolve this, **child components raise events** and **parent components handle the events**
```jsx
// create delete event handler in parent component
...
handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c=>c.id !== counterId);
        //this.setState({counters : counters});
        //above an be simplified since name and value is same
        this.setState({counters});
};

    render() { 
        return ( 
        <div>
            {this.state.counters.map((counter) => 
                <Counter key={counter.id} onDelete={this.handleDelete} value = {counter.value} />                             
            )}
        </div> 
        );
    }
    ...

// call delete event from child component
...
render() { 

        return (         
            <div>
                {/* Dynamically Displaying classes */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-default btn-sm">Increment</button>
                <button className="btn btn-danger btn-sm m2" onClick = {() => this.props.onDelete(this.props.id)}>Delete</button>
            </div>        
        );
}
...

```

