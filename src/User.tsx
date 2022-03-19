import { FC, ReactElement, useEffect } from "react";
import { UserInterface } from './interfaces/user';
import { useDispatch, useSelector } from "react-redux";
import { UserActionTypes } from "./store/reducers/user";
import { useTypeSelector } from "./hooks/useTypeSelector";

interface UserProps {
    userId: number;
    // [key: string]: any; Чтобы задавать любые параметры (например в props для компонента User)
}

export const User: FC<UserProps> = ({userId}): ReactElement | null => {

    

    const {users, error} = useTypeSelector((state) => state.user);

    

    let user = users.find((user) => user.id === userId);
    if(user) {
        return (
        <div>
            <b>{user.name}, {user.email}, {user.company.name}</b>
        </div>
        );
    } else {
        return null;
    }
}