import React, { Component } from 'react';
import { connect } from 'react-redux'; //A function that returns a higher order component.

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                {/*Before redux it was {this.state.counter} but since we are now getting our state from redux and not from the top of the page,
                we can set the state.counter to the ctr property and simply pass it as a prop.*/}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} /> {/*Before redux it was {this.onIncremenetCounter}. It becomes a prop from below.*/}
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onIncrementOfFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractOfFive} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

//This is our Action
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}), //Remeber a type property is always required when dispatching your action. This line is directly connected to the reducer.js file.
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onIncrementOfFive: () => dispatch({type: 'INCREMENT_FIVE', value: 5}),
        onSubtractOfFive: () => dispatch({type: 'SUBTRACT_FIVE', value: 5})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
