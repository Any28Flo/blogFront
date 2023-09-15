import React ,{ createContext, useReducer, Dispatch } from "react";
import { PostsActions, Types, postsReducer } from "./blogReducer";
import { Post } from "../types";

import {isOnlineReducer, isOnlineActions}from './isOnlineReducer';
export type InitialStateType = {
	//user:  null,
    posts: Post[],
    isOnline : boolean
    //selectedPost: null,
}
const initState = {
    //user: null,
    posts: [],
    isOnline: true,
    //selectedPost: null,
}
const AppContext = createContext<{
    state: InitialStateType;
    dispatch: Dispatch< PostsActions | isOnlineActions>;
}>({
    state: initState,
    dispatch: () => null
});

const mainReducer = (
        {posts, isOnline}: InitialStateType,
        action: PostsActions | isOnlineActions
    ) => ({
    posts: postsReducer(posts, action),
    isOnline: isOnlineReducer(isOnline, action)
})

export interface State  {
	//user: User| null;
	posts: Post[];
    isOnline: boolean;
    //sselectedPost: Post | null;
	
}
export type Action =

	| {
		type: 'login';
		payload: State;
	} |{
        type: Types.SET_POSTS;
        payload: Post[]
    }
	
export type AppContextType = State & {
    dispatch: React.Dispatch<Action>;
};

export type Props = {
    children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(mainReducer, initState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
}
export { AppProvider, AppContext };