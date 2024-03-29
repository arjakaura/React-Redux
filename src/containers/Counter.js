import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../actions';

class Counter extends Component {
   

    render () {
        return (
            <div>
                <h1>Your score is: {this.props.ctr}</h1> 
                <div>
                    <button onClick={this.props.onIncCounter}> Increment </button>
                    <button onClick={this.props.onDecCounter}> Decrement </button>
                    <button onClick={this.props.addCounter}> Add 5 </button>
                    <button onClick={this.props.removeCounter}> Subtract 5 </button>

                    <button onClick={() => this.props.onStoreCounter(this.props.ctr)}>Store result</button>
                     <ul>
                        {this.props.storedResult.map(item => (
                            <li key={item.id} onClick={() =>this.props.onDeleteCounter(item.id)}>{item.value}</li> 
                        ))}
                    </ul>  
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncCounter:() => dispatch({ type: actionTypes.INCREMENT }),
        onDecCounter:() => dispatch({ type: actionTypes.DECREMENT }),
        addCounter:() => dispatch({ type: actionTypes.ADD, value:5 }),
        removeCounter:() => dispatch({type: actionTypes.REMOVE, value:5 }),
        onStoreCounter:(result) => dispatch({type: actionTypes.STORE_RESULT, result:result }),
        onDeleteCounter:(id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElementId:id })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);