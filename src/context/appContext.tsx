import React ,{ createContext, useReducer, Dispatch } from "react";
import { PostsActions, postsReducer } from "./blogReducer";
import { Post, User } from "../types";


export type InitialStateType = {
	//user:  null,
    posts: Post[],
    //selectedPost: null,
}
const initState = {
    //user: null,
    posts: [],
    //selectedPost: null,
}
const AppContext = createContext<{
    state: InitialStateType;
    dispatch: Dispatch< PostsActions>;
}>({
    state: initState,
    dispatch: () => null
});

const mainReducer = (
        {posts}: InitialStateType,
        action: PostsActions
    ) => ({
    posts: postsReducer(posts, action),
})

export interface State  {
	//user: User| null;
	posts: Post[];
    //sselectedPost: Post | null;
	
}
export type Action =

	| {
		type: 'login';
		payload: State;
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