import { UserInterface } from '../../interfaces/user'



export enum UserActionTypes {
    USERS_LOAD = 'USERS_LOAD',
    USERS_LOAD_ERROR = 'USERS_LOAD_ERROR'
}

interface IUserState {
    users: UserInterface[]
    error: null | string
}

interface IUserLoadAction {
    type: UserActionTypes.USERS_LOAD
    payload: UserInterface[]
}
interface IUserErrorAction {
    type: UserActionTypes.USERS_LOAD_ERROR
    payload: string
}

type UserActions = IUserLoadAction | IUserErrorAction;

const userInitialState: IUserState = {
    users: [],
    error: null
}

export const userReducer = (state: IUserState = userInitialState, action: UserActions): IUserState => {
    switch(action.type) {
        case UserActionTypes.USERS_LOAD: {
            return {users: action.payload, error: null};
        }
        case UserActionTypes.USERS_LOAD_ERROR: {
            return {users: [], error: action.payload};
        }
        default:
            return state;
    }

}