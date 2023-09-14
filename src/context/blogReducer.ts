import { ActionMap, Post } from "../types";

export enum Types {
    SET_POSTS = "SET_POSTS",
    ADD_POSTS= "ADD_POSTS",
    REMOVE_POSTS = "REMOVE_POSTS"
}

type PostPayload = {
    [Types.SET_POSTS]: Post[];
}

export type PostsActions = ActionMap<PostPayload>[keyof ActionMap<PostPayload>];

export const postsReducer = (state: Post[], action: PostsActions) => {
    switch (action.type) {
        case Types.SET_POSTS:
            return action.payload
            
      
        default:
            return state;
    }
}