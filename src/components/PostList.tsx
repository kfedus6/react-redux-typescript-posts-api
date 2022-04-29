import React, { useEffect } from 'react';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const PostList: React.FC = () => {

   const { posts } = useTypedSelector(state => state.post);

   const { fetchPosts, fetchPostsRemove } = useAction();

   useEffect(() => {
      fetchPosts();
   }, [])

   const removePost = (id: number) => {
      fetchPostsRemove(id);
   }


   return (
      <div>
         {posts.map(item => {
            return (
               <div key={item.id} className='post'>
                  <div className='post__content'>
                     <strong>{item.id}. {item.title}</strong>
                     <div>
                        {item.body}
                     </div>
                  </div>
                  <div className='post__btn'>
                     <button onClick={() => removePost(item.id)} >Delete</button>
                  </div>
               </div>
            )
         })}
      </div>
   )
}

export default PostList;