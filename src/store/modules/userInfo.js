const GETUSERINFO = 'getInfo/USER';
const SETUSERINFO = 'setInfo/USER';

export const getUserInfo = () => {
    return {
        type: GETUSERINFO
    }    
}
export const setUserInfo = () => {
    return { 
        type: SETUSERINFO
    }
} 

const initialData = {
    name: '',
    age: '',
    birth: '',
    sex: '',
    email: '',
    id: '',
    nickName: ''
}

export default function userInfo (state = initialData, action ) {
    switch(action.type){
        case GETUSERINFO:
            return {
                ...state,
                ...action.data
            }
        case SETUSERINFO:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
}