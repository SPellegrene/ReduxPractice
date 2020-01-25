const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer(nothing asynchronous, input in, output out....simple)
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,//this makes a copy of the initial state so we can change it(immutable), never change the original data(mutable).
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription(gets triggered whenever the state is updated)
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action(action is a predefined package of info, no logic...just a messenger)
//Must have property TYPE and all uppercase string is convention, after that you create your own adventure.
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
