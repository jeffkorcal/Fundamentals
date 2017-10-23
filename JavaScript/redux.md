# Redux


## Overview
Redux is a predictable state container for JavaScript apps. This means data for the entire application is stored in a single object. You can only change it by dispatching actions with your new value. To change the data, you use pure functions called reducers.

## Three Principles
Single Source of Truth: The state of your whole application is stored in an object tree within a single store. 
The state is read-only: The only way to change the state is to emit an action, an object describing what happened. 
Changes are made with pure functions: To specify how the state tree is transformed by actions, you write pure reducers. 

## Actions
An action is a plain object that represents an intention to change the state. Actions are the only way to get data into the store. Any data, whether from UI events, network callbacks, or other sources such as WebSockets needs to eventually be dispatched as actions. You can send an action to the store using store.dispatch().
Actions must have a type field that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for type than Symbols because strings are serializable.
Action creators are functions that create actions. Do not confuse the two terms— an action is a payload of information, and an action creator is a factory that creates an action. 
```
const ADD_TODO = 'ADD_TODO'
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}
dispatch(addTodo(text))
```

## Reducers
Reducers take the previous state and an action, and returns a new state. They must be pure functions—functions that return the exact same output for given inputs. They should also be free of side-effects.  
```
const initialState = {
   todos: []
}
function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state.todos,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}
```

## Data Flow
Redux architecture revolves around a strict unidirectional data flow. This means that all data in an application follows the same lifecycle pattern, making the logic of your app more predictable and easier to understand. It also encourages data normalization, so that you don't end up with multiple, independent copies of the same data that are unaware of one another.
### 4 Steps in the Data Lifecycle in Redux
* You call store.dispatch(action)
    * An action is a plain object describing what happened.
* The Redux store calls the reducer function you gave it
    * The store will pass two arguments to the reducer: the current state tree and the action.
* The root reducer may combine the output of multiple reducers into a single state tree
    * Redux ships with a combineReducers() helper function, useful for “splitting” the root reducer into separate functions that each manage one branch of the state tree.
* The Redux store saves the complete state tree returned by the root reducer
    * Every listener registered with store.subscribe(listener) will now be invoked; listeners may call store.getState() to get the current state.

## Middleware

Middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more. Without middleware, Redux store only supports synchronous data flow. This is what you get by default with createStore(). You may enhance createStore() with applyMiddleware().
Middleware is the suggested way to extend Redux with custom functionality. Middleware lets you wrap the store's dispatch method. The key feature of middleware is that it is composable. Multiple middlewares can be combined together, where each middleware requires no knowledge of what comes before or after it in the chain.  
