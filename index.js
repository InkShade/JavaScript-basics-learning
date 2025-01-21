function reducer(state, action) {
    if (action.type === 'incremented_age') {
        return {
            age: state.age + 1
        }
    }
}

function render() {
    console.log(`${state.age}`) //return state.age
}

let state = {age: 42}

function dispatch(action) {
    state = reducer(state, action)
    render() //Or return render()
}

dispatch({type: 'incremented_age'}) //Or console.log(dispatch({type: 'incremented_age'}))