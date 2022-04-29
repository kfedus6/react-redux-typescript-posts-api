import React from 'react';
import PostList from './components/PostList';
import Loader from './components/UI/laoder/Loader';
import { useTypedSelector } from './hooks/useTypedSelector';
import './styles/app.css'

const App = () => {

   const { loading, error } = useTypedSelector(state => state.post);

   return (
      <div className="app">
         {loading ? <Loader /> : error ? <h1>{error}</h1> : <PostList />}
      </div>
   );
}

export default App;
