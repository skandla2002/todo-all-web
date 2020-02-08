const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

export increment = () => { type : INCREMENT };
export decrement = () => { type : DECREMENT };

const initialState = {
    counter: 0
}

export default CounterContainer = (state = initialState, action) => {

    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                counter: counter + 1
            }
            break;
        case DECREMENT:
            return {
                ...state,
                counter: counter - 1
            }
            break;
        default:
            return state;
            break;
    }
}