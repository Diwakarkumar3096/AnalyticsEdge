import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './Components/NavBar/';
import UserDetails from './Components/UserDetails';
import { getPosts } from './Store/Slices/UserSlice';

const App = () => {
  const { posts, loading } = useSelector((state) => state.user); // Corrected the state property name
  const dispatch = useDispatch();

  console.log(posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]); // Added dispatch as a dependency

  return (
    <div>
      <NavBar />
      <UserDetails />
      {posts.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
};

export default App;
