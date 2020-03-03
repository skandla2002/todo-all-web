// 액션 타입 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수
export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});

// 초기 상태 값
const initalState = {
    number: 0
}

// 액션 타입
export default function Counter(state = initalState, action){
    switch(action.type){
        case INCREMENT: 
            return {
                ...state,
                number: state.number + 1
            }
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1 
            }
        default:
            return state
    }
}