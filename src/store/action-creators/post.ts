import axios from "axios";
import { Dispatch } from "react";
import { PostAction, PostActionTypes } from "../../types/post";

export const fetchPosts = () => async (dispatch: Dispatch<PostAction>) => {
   dispatch({ type: PostActionTypes.FETCH_POSTS });
   try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({ type: PostActionTypes.FETCH_POSTS_SUCCES, payload: response.data });
   } catch (err: any) {
      dispatch({ type: PostActionTypes.FETCH_POSTS_ERROR, payload: err.message })
   }
}

export const fetchPostsRemove = (id: number) => async (dispatch: Dispatch<PostAction>) => {
   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
   })
   dispatch({ type: PostActionTypes.FETCH_POSTS_REMOVE, payload: id })
}