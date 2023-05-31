import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './Components/NavBar/';
import UserDetails from './Components/UserDetails';
import { getPosts } from './Store/Slices/UserSlice';
import Table from './Components/Table';
import Grid from './Components/Grid';

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

      <Table data={posts}/>
      <Grid data={posts}/>
    </div>
  );
};

export default App;
