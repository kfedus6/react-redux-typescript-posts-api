export interface PostState {
   posts: any[],
   loading: boolean,
   error: null | string,
}

export enum PostActionTypes {
   FETCH_POSTS = 'FETCH_POSTS',
   FETCH_POSTS_SUCCES = 'FETCH_POSTS_SUCCES',
   FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
   FETCH_POSTS_REMOVE = 'FETCH_POSTS_REMOVE',
}

interface FetchPostAction {
   type: PostActionTypes.FETCH_POSTS,
}

interface FetchPostSuccesAction {
   type: PostActionTypes.FETCH_POSTS_SUCCES,
   payload: any[],
}

interface FetchPostErrorAction {
   type: PostActionTypes.FETCH_POSTS_ERROR,
   payload: null | string | any,
}

interface FetchPostRemoveAction {
   type: PostActionTypes.FETCH_POSTS_REMOVE,
   payload: number,
}

export type PostAction = FetchPostAction | FetchPostErrorAction | FetchPostSuccesAction | FetchPostRemoveAction;