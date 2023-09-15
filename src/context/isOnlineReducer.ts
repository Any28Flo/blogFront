import { ActionMap } from "../types";


export enum Types {
    SET_IS_ONLINE= "SET_IS_ONLINE",
}

type isOnlinePayload = {
    [Types.SET_IS_ONLINE]: boolean;
}
export type isOnlineActions = ActionMap<isOnlinePayload>[keyof ActionMap<isOnlinePayload>];

export const isOnlineReducer = (state: true, action: isOnlineActions) => {
    switch (action.type) {
        case Types.SET_IS_ONLINE:
            return action.payload
        default:
            return state;
    }
}